import { Link, useLocation } from '@remix-run/react'
import BotonContactanos from './botonContactanos';

const Navegacion = () => {
    const location = useLocation();

    return (
        <nav className='navegacion'>
            <Link
                to="/"
                className={location.pathname === "/" ? 'active' : ''}
            >Inicio</Link>
            <Link
                to="/Nosotros"
                className={location.pathname === "/Nosotros" ? 'active' : ''}
            >Nosotros</Link>
            <Link
                to="/Servicios"
                className={location.pathname === "/Servicios" ? 'active' : ''}
            >Servicios</Link>
            <Link
                to="/Proyectos"
                className={location.pathname === "/Proyectos" ? 'active' : ''}
            >Proyectos</Link>
            <BotonContactanos />
        </nav>
    )
}

export default Navegacion