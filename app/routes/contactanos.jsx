import Formulario from "../components/formulario"
import stylesContacto from '../Styles/contactanos.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesContacto
    }
  ]
}

const Contactanos = () => {
  return (
    <section className='contactanos'>
      <div className="contenidoContacto">
        <h2 className='titulo'>Contactanos</h2>
        <h3 className='subtitulo'>¡Bienvenido/a al formulario de contacto!</h3>
        <p>Nos encanta desarrollar software únicos y de alta calidad para nuestros clientes; Estamos emocionados de trabajar con usted en su próximo proyecto.
          Por favor, complete el formulario con sus requisitos y consultas para que uno de nuestros expertos se ponga en contacto con usted lo antes posible para
          hablar de las necesidades y objetivos de su negocio.
        </p>
      </div>
      <Formulario />
    </section>
  )
}

export default Contactanos