import { Link } from '../Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: 'Hola! Me llamo Santiago y estoy creando un clon de React Router.',
    button: 'Ir a la Home page'
  },
  en: {
    title: 'About us',
    description: 'Hi! My name is Santiago and I am creating a clone of React Router',
    button: 'Go to Home page'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1447351622422646788/5LDEbyA8_400x400.jpg' alt='Foto de Santiago B' />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
