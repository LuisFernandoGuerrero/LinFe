export async function getServicios() {
    // const respuesta = await fetch(`${process.env.API_URL}servicios?populate=imagen`);
    const respuesta = await fetch(`http://localhost:3000/servicios`);
    const resultado = await respuesta.json();

    return resultado;
}