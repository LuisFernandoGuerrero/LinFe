import logoCompleto from '../../public/img/logoLinfeCompleto.png'
import BotonContactanos from './botonContactanos'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="logotipo">
        <a href="/"><img src={logoCompleto} alt="logoLinfe"/></a>
      </div>

      <div className="copyEInfo">
        <p>Para nosotros es un placer trabajar para ti</p>
        <BotonContactanos />
      </div>
    </footer>
  )
}

export default Footer