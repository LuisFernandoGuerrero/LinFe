import { useLoaderData } from '@remix-run/react';
import { getServicios } from '../models/servicios.server';
import ServiciosContenedor from '../components/servicioscontenedor';
import stylesServicios from '../Styles/servicios.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesServicios
    }
  ]
}

export async function loader() {
  const resultado = await getServicios();
  return resultado.data
}

const Servicios = () => {

  const resultado = useLoaderData();

  return (
    <section className='bodyServicios'>
      <div className="encabezadoServicios">
        <ServiciosContenedor
          servicios={resultado}
        />
      </div>
    </section>
  )
}

export default Servicios