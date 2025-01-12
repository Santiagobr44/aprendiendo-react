// const initialState = {
//   cart: []
// }
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_FROM_CART: 'CLEAR_FROM_CART'
}

// update localStorage with state for cart
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {
      // una forma seria usando structuredClone (la mas legible)
      // const newState = structuredClone(state)
      // newState[productInCartIndex].quantity += 1

      // usando el map (posiblemente la mas facil)
      // const newState = state.map(item => {
      //   if (item.id === id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1
      //     }
      //   }

      //   return item
      // })

      // usando el spread operator y slice (posiblemente la mas rapida y optima)
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload, // product
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.CLEAR_FROM_CART]: () => {
    updateLocalStorage([])
    return []
  }
}

export const cartReducer = (state, action) => {
  // const { type: actionType, payload: actionPayload } = action

  // switch (actionType) {
  //   case CART_ACTION_TYPES.ADD_TO_CART: {
  //     const { id } = actionPayload
  //     const productInCartIndex = state.findIndex(item => item.id === id)

  //     if (productInCartIndex >= 0) {
  //       // una forma seria usando structuredClone
  //       const newState = structuredClone(state)
  //       newState[productInCartIndex].quantity += 1
  //       updateLocalStorage(newState)
  //       return newState
  //     }

  //     const newState = [
  //       ...state,
  //       {
  //         ...actionPayload, // product
  //         quantity: 1
  //       }
  //     ]

  //     updateLocalStorage(newState)
  //     return newState
  //   }

  //   case CART_ACTION_TYPES.REMOVE_FROM_CART: {
  //     const { id } = actionPayload
  //     const newState = state.filter(item => item.id !== id)
  //     updateLocalStorage(newState)
  //     return newState
  //   }

  //   case CART_ACTION_TYPES.CLEAR_FROM_CART: {
  //     updateLocalStorage(cartInitialState)
  //     return cartInitialState
  //   }
  // }
  // return state

  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}

// TEST para probar que el reducer funciona para agregar un producto al carrito
// expect(
//   reducer([], { type: 'ADD_TO_CART', payload: { id: 1 } })
// ).toEqual([{ id: 1, quantity: 1 }])
