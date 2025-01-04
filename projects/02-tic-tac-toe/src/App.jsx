import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { TURNS } from "./constants.js";
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { Board } from "./components/Board.jsx";
import {
    resetGameFromStorage,
    saveGameToStorage,
} from "./logic/storage/index.js";

function App() {
    const [board, setBoard] = useState(() => {
        const boardFromStorage = window.localStorage.getItem("board");
        return boardFromStorage
            ? JSON.parse(boardFromStorage)
            : Array(9).fill(null);
    });

    const [turn, setTurn] = useState(() => {
        const turnFromStorage = window.localStorage.getItem("turn");
        return turnFromStorage ?? TURNS.X;
    });

    const [winner, setWinner] = useState(null);

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);

        resetGameFromStorage();
    };

    const updateBoard = (index) => {
        // no actualizamos estaposicion
        // si ya tiene algo
        if (board[index] || winner) return;
        // actualizar el tablero
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);
        // cambiar turno
        const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);
        saveGameToStorage({ board: newBoard, turn: newTurn });
        // revisar si hay ganador
        const newWinner = checkWinnerFrom(newBoard);
        if (newWinner) {
            confetti();
            setWinner(newWinner);
        } else if (checkEndGame(newBoard)) {
            setWinner(false); // empate
        }
    };

    return (
        <main className="board">
            <h1>Tic Tac Toe</h1>
            <button onClick={resetGame}>Reset del juego</button>
            <Board board={board} updateBoard={updateBoard} />
            <section className="turn">
                <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
            </section>

            <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
    );
}

export default App;
