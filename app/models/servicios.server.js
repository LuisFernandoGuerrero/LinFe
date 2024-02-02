export async function getServicios() {
    // const respuesta = await fetch(`${process.env.API_URL}servicios?populate=imagen`);
    const respuesta = await fetch(`${process.env.API_URL}servicios`);
    const resultado = await respuesta.json();

    return resultado;
}