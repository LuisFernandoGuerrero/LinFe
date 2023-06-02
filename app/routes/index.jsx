import Header from '../components/header'
import imgRobot from '../../public/img/robot.png'



export default function Inicio() {
  return (
    <section>
      <div className="landing">
        <div className="circulo"></div>
        <Header />
        <div className='presentacion'>
          <div className="informacion">
            <h1 className='titulo'>LinFe Enterprise <span>Comienza por Innovar</span></h1>
            <p className='descripcion'>Desarrollamos el software que requieras a medida, para ti o para tu empresa.</p>
          </div>
        </div>
        <div className="imgPresentacion">
          <img src={imgRobot} alt="alternativa" />
          <img src={imgRobot} alt="alternativa" />
          <img src={imgRobot} alt="alternativa" />
        </div>
      </div>
      <div>Desde Inicio</div>
    </section>
  )
}

