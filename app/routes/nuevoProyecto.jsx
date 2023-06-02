import { Form } from "@remix-run/react";
import FormularioNuevoProyecto from "../components/formularioNuevoProyecto"
import styles from "../Styles/formularioNuevoProyecto.css";
import { setProyecto } from "../models/proyectos.server"
import { redirect } from "@remix-run/node";

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export async function action({ request }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    console.log(datos);

    await setProyecto(datos)

    return redirect('/NuevoProyecto')
}


const NuevoProyecto = () => {
    return (
        <section className="nuevoProyecto">
            <div className="formularioNuevoProyecto">

                <Form
                    method="post"
                    noValidate
                    className="formulario"
                >
                    <h3>Registrar Nuevo Proyecto</h3>
                    <FormularioNuevoProyecto />

                    <input type="submit" value="Crear Proyecto" />
                </Form>


            </div>
        </section>
    )
}

export default NuevoProyecto