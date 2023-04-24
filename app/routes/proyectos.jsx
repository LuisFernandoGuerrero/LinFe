import stylesProyectos from '../Styles/proyectos.css';
import imgProyecto from '../../public/img/ProyectoUno.png'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesProyectos
    }
  ]
}

const Proyectos = () => {
  return (
    <section className="bodyProyectos">
      <div className="encabezadoProyectos">
        <h3>Proyectos en los que hemos trabajado</h3>
      </div>
      <div className="container">
        <div className="proyecto">
          <div className="imgProy" data-text="LinFe"><img src={imgProyecto} alt="imagen proyecto 1" /></div>
          <div className="infoProyecto">
            <div>
              <h3>LinFe</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi, facere delectus eum possimus cum nemo ullam. Nemo officia nobis facilis optio sequi quis eveniet rem alias ex cupiditate. Fugit!</p>
              <a href="">Ver Más</a>
            </div>
          </div>
        </div>

        <div className="proyecto">
          <div className="imgProy" data-text="LinFe"><img src={imgProyecto} alt="imagen proyecto 1" /></div>
          <div className="infoProyecto">
            <div>
              <h3>LinFe</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi, facere delectus eum possimus cum nemo ullam. Nemo officia nobis facilis optio sequi quis eveniet rem alias ex cupiditate. Fugit!</p>
              <a href="">Ver Más</a>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="imgProy" data-text="LinFe"><img src={imgProyecto} alt="imagen proyecto 1" /></div>
          <div className="infoProyecto">
            <div>
              <h3>LinFe</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi, facere delectus eum possimus cum nemo ullam. Nemo officia nobis facilis optio sequi quis eveniet rem alias ex cupiditate. Fugit!</p>
              <a href="">Ver Más</a>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="imgProy" data-text="LinFe"><img src={imgProyecto} alt="imagen proyecto 1" /></div>
          <div className="infoProyecto">
            <div>
              <h3>LinFe</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi, facere delectus eum possimus cum nemo ullam. Nemo officia nobis facilis optio sequi quis eveniet rem alias ex cupiditate. Fugit!</p>
              <a href="">Ver Más</a>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="imgProy" data-text="LinFe"><img src={imgProyecto} alt="imagen proyecto 1" /></div>
          <div className="infoProyecto">
            <div>
              <h3>LinFe</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi, facere delectus eum possimus cum nemo ullam. Nemo officia nobis facilis optio sequi quis eveniet rem alias ex cupiditate. Fugit!</p>
              <a href="">Ver Más</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proyectos