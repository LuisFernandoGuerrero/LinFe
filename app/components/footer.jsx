import { Link } from '@remix-run/react'
import logoCompleto from '../../public/img/logoLinfeCompleto.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <Link
        to="/"><img src={logoCompleto} alt="logo completo LinFe" className="logoCompleto" />
      </Link>

      <p>Copyright &copy; 2023, LinFe Enterprise. Todos los derechos reservados.</p>

    </footer>
  )
}

export default Footer