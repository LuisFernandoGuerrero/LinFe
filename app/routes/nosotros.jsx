import imgNosotros from '../../public/img/FondoNosotros.png'

export function meta() {
  return {
    title: 'LinFe Enterprise - Nosotros',
    description: 'Conoce más sobre nosotros, una empresa dedicada al desarrollo de software.'
  }
}

const Nosotros = () => {
  return (
    <section className='nosotros'>
      <div className="contenidoNosotros">
        <h3>Nosotros</h3>
        <p>Nuestros diseños son personalizados y adaptados a sus necesidades específicas. Ya sea que necesite una página web para su pequeña empresa, una tienda en línea o una plataforma de blog, estamos aquí para ayudarlo.</p>
      </div>
      <div className="informacionNosotros">
        <div className="imgNosotros"><img src={imgNosotros} alt="prueba" /></div>
        <div className="textoNosotros">
          <p>LinFe Enterprise es una joven empresa de diseño y desarrollo de software con personal capacitado y experimentado en el área. Todos somos apacionados por el software y trabajamos junto a nuestros clientes para entender necesidades y ofrecer las soluciones personalizadas que les permitan alcanzar sus objetivos empresariales.</p>
          <p>En nuestro equipo tenemos experiencia en gran variedad de tecnologías y lenguajes de programación; Hacemos uso de metologías ágiles y colaborativas para así asegurarnos de que nuestros proyectos se entreguen a tiempo y dentro del presupuesto, sin perder el alto nivel de calidad y eficiencia.</p>
          <p>¡Gracias por considerarnos para su proyecto de página web! Esperamos trabajar con usted para crear una página web impresionante y efectiva que se adapte perfectamente a sus necesidades comerciales.</p>
        </div>
      </div>
    </section>
  )
}

export default Nosotros