import { Link, useLocation } from '@remix-run/react'


const BotonContactanos = () => {
    const location = useLocation();

    return (
        <Link
            to="/Contactanos"
            className={
                location.pathname !== '/' ? 'contacto contactoDiferente' : 'contacto'
            }
        >
            Contactanos
        </Link>
    )
}

export default BotonContactanos