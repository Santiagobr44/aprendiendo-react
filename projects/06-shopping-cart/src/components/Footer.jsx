// import { useCart } from '../hooks/useCart'
// import { useFIlters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
  // const { filters } = useFIlters()
  // const { cart } = useCart()

  return (
    <footer className='footer'>
      {/* {
        JSON.stringify(filters, null, 2)
      } */}
      {/* {
        JSON.stringify(cart, null, 2)
      } */}
      <h4>Prueba técnica de React ⚛️ － <span>@sbr</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}
