export async function getProyectos() {
    const respuesta = await fetch(`${process.env.API_URL}proyectos?populate=imagen`)
    const resultado = await respuesta.json();

    return resultado;
}
