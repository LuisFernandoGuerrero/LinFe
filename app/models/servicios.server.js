export async function getServicios() {
    const respuesta = await fetch(`${process.env.API_URL}servicios?populate=imagen`);
    const resultado = await respuesta.json();

    return resultado;
    // console.log(resultado);
}