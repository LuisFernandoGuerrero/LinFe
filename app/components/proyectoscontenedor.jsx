import Proyecto from './proyecto'

const ProyectosContenedor = ({ proyectos }) => {
    return (
        <div className="container">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto?.id}
                    proyecto={proyecto}
                />
            ))}
        </div>
    )
}

export default ProyectosContenedor