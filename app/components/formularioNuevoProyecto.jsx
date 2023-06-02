const FormularioNuevoProyecto = () => {
    return (
        <>
            <div className="campo">
                <label htmlFor="nombre">Nombre Proyecto:</label>
                <input type="text" name="nombre" id="nombre" />
            </div>
            <div className="campo">
                <label htmlFor="descripcion">Descripción Proyecto:</label>
                <input type="text" name="descripcion" id="descripcion" />
            </div>
            <div className="campo">
                <label htmlFor="website">URL Sitio Web:</label>
                <input type="url" name="website" id="website" />
            </div>
            <div className="campo">
                <label htmlFor="github">URL Github:</label>
                <input type="url" name="github" id="github" />
            </div>
        </>
    )
}

export default FormularioNuevoProyecto