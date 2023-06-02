import { Outlet, LiveReload, Scripts, Links, Meta, useLocation } from "@remix-run/react";
import faviconLinfe from '../public/favicon.ico'
import Header from "./components/header";
import Footer from "./components/footer";
import stylesHeader from './Styles/header.css';
import stylesNosotros from './Styles/nosotros.css'
import stylesServicios from './Styles/servicios.css';
import stylesContacto from './Styles/contactanos.css';
import stylesFooter from './Styles/footer.css';
import styles from './Styles/index.css';

export function meta() {
  return {
    charSet: 'utf-8',
    title: 'LinFe Enterprise',
    viewport: 'width=device-width, initial-scale=1'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesHeader
    },
    {
      rel: 'stylesheet',
      href: stylesNosotros
    },
    {
      rel: 'stylesheet',
      href: stylesServicios
    },
    {
      rel: 'stylesheet',
      href: stylesContacto
    },
    {
      rel: 'stylesheet',
      href: stylesFooter
    },
    {
      rel: 'stylesheet',
      href: 'https://csstools.github.io/normalize.css/11.0.0/normalize.css'
    }, 
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: faviconLinfe
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
      integrity: 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children }) {
  const location = useLocation();
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="contenedorPrincipal">
        {location.pathname !== "/" ? <Header /> : ''}
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

/** Manejo de errores */
export function CatchBoundary() {
  const error = useCatch()
  return (
    <Document>
      <p className="error">{error.status} {error.statusText}</p>
      <Link to="/" className="error-enlace">La página no ha sido encontrada</Link>
    </Document>
  )
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <p className="error">{error.status} {error.statusText}</p>
      <Link to="/" className="error-enlace">La página no ha sido encontrada</Link>
    </Document>
  )
}