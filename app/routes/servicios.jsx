import { useLoaderData } from '@remix-run/react';
import { getServicios } from '../models/servicios.server';
import ServiciosContenedor from '../components/servicioscontenedor';

export function meta() {
  return {
    title: 'LinFe Enterprise - Servicios',
    description: 'Mira los servicios que prestamos cómo empresa, podemos comenzar con tu solución desde cero.'
  }
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