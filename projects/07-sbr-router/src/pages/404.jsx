import { Link } from '../Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='Gift del perro de This Is Fine quemandose vivo' />
      </div>

      <Link to='/'>Go to home</Link>
    </>

  )
}
