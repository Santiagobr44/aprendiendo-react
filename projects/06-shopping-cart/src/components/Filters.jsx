import { useId } from 'react'
import './Filters.css'
import { useFIlters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFIlters()
  // const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    // ESTO HUELE MAL
    // DOS FUENTES DE LA VERDAD
    // setMinPrice(event.target.value)
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    // ESTO HUELE MAL
    // estamos pasando la funcion de actualizar estado
    // nativa de React a un componente hijo
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Precio minimo</label>
        <input type='range' id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice} value={filters.minPrice} />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='mobile-accessories'>Accesorios</option>
        </select>
      </div>
    </section>
  )
}
