const Servicio = ({ servicio }) => {
    const { nombre, descripcion, imagen } = servicio;
    return (
        <div className="servicio">
            <div className="icono">
                <img src={imagen} alt={`Servicio ${nombre}`} />
            </div>
            <div className="contenido">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default Servicio
