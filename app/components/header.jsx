import { Link, useLocation } from "@remix-run/react"
import imgLinfe from '../../public/img/logoLinfe.png'
import Navegacion from "./navegacion"

const Header = () => {
    const location = useLocation();

    function toggleMenu () {
        const toggle = document.querySelector('.toggle');
        const navegacion = document.querySelector('.navegacion')

        toggle.classList.toggle('animarToggle')
        navegacion.classList.toggle('navegacionMobile')
    }
    return (
        <header className={location.pathname !== '/' ? 'header diferenteInicio' : 'header'}>
            <Link
                className="logo"
                to="/">
                <img src={imgLinfe} alt="logo Linfe" className="imagenLogo" />
            </Link>
            <div
                className="toggle"
                onClick={() => toggleMenu()}
            >
                <span className="linea"></span>
                <span className="linea"></span>
                <span className="linea"></span>
            </div>
            <Navegacion />
        </header>
    )
}

export default Header