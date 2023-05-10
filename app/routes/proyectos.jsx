import { useLoaderData } from '@remix-run/react';
import stylesProyectos from '../Styles/proyectos.css';
import ProyectosContenedor from '../components/proyectoscontenedor'
import { getProyectos } from '../models/proyectos.server';

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: stylesProyectos
        }
    ]
}

export async function loader() {
    const resultado = await getProyectos();
    return resultado.data
}

const Proyectos = () => {

    const resultado = useLoaderData();

    return (
        <section className="bodyProyectos">
            <div className="encabezadoProyectos">
                <h3>Proyectos en los que hemos trabajado</h3>

                <ProyectosContenedor 
                    proyectos={resultado}
                />
            </div>
        </section>
    )
}

export default Proyectos