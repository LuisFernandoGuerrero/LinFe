const Proyecto = ({ proyecto }) => {
    const { nombre, description, website, imagen } = proyecto;
    return (
        <div className="proyecto">
            <div className="imgProy" data-text="LinFe"><img src={imagen} alt={`Imagen Proyecto ${nombre}`} /></div>
            <div className="infoProyecto">
                <h3>{nombre}</h3>
                <p>{description}</p>
                <a href={website} target="_blank">Sitio Web</a>
            </div>
        </div>
    )
}

export default Proyecto