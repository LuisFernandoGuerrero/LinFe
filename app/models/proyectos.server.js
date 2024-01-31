export async function getProyectos() {
    const respuesta = await fetch(`http://localhost:3000/proyectos`)
    const resultado = await respuesta.json();

    return resultado;
}

export async function setProyecto(datos) {
    try {
        const respuesta = await fetch(`http://localhost:3000/proyectos`, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json('')
    } catch (error) {
        console.log(error);
    }
}