import stylesProyectos from '../Styles/proyectos.css';
import ProyectosContenedor from '../components/proyectoscontenedor'


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
      <ProyectosContenedor />
    </section>
  )
}

export default Proyectos