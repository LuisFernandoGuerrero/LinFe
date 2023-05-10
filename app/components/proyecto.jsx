import imgProyecto from '../../public/img/ProyectoUno.png'

const Proyecto = ({ proyecto }) => {
    // ;
    const { nombre, descripcion, website, github, imagen } = proyecto;

    return (
        <div className="proyecto">
            <div className="imgProy" data-text="LinFe"><img src={imagen.data[0].attributes.formats.large.url} alt="imagen proyecto 1" /></div>
            <div className="infoProyecto">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <a href="">Ver Más</a>
            </div>
        </div>
    )
}

export default Proyecto