import { Link, useLocation } from '@remix-run/react'

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
                to="/Equipo"
                className={location.pathname === "/Equipo" ? 'active' : ''}
            >Equipo</Link>
            <Link
                to="/Proyectos"
                className={location.pathname === "/Proyectos" ? 'active' : ''}
            >Proyectos</Link>
            <Link
                to="/Contactanos"
                className={
                    location.pathname !== '/' ? 'contacto contactoDiferente' : 'contacto'
                }
            >Contactanos</Link>
        </nav>
    )
}

export default Navegacion