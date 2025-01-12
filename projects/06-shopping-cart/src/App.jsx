import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFIlters } from './hooks/useFilters'
import { IS_DEVELOPMENT } from './config'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App () {
  const { filterProducts } = useFIlters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <Products products={filteredProducts} />
        {IS_DEVELOPMENT && <Footer />}
      </CartProvider>
    </>
  )
}

export default App
