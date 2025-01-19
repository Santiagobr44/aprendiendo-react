import { lazy, Suspense } from 'react'
// import HomePage from './pages/Home'
// import AboutPage from './pages/About' // import estatico
// import Page404 from './pages/404'
// import SearchPage from './pages/Search'

import { Router } from './Router'
import { Route } from './Route'

const LazyHomePage = lazy(() => import('./pages/Home'))
const LazyAboutPage = lazy(() => import('./pages/About')) // <-- Lazy loading
const LazyPage404 = lazy(() => import('./pages/404'))
const LazySearchPage = lazy(() => import('./pages/Search'))

const appRoutes = [
  // {
  //   path: '/',
  //   Component: HomePage
  // },
  // {
  //   path: '/about',
  //   Component: AboutPage
  // },
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: LazySearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={LazyPage404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
