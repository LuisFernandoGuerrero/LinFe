import React from 'react'

const Formulario = () => {
  return (
    <div className="contenidoFormulario">
        <div className="contactoInfo">
          <div className="caja">
            <div className="icon">
              <i className="fa-sharp fa-solid fa-location-dot"></i>
            </div>
            <div className="texto">
              <h4>Ubicación</h4>
              <p>Bogotá D.C, Colombia.</p>
            </div>
          </div>
          <div className="caja">
            <div className="icon"><i className="fa-solid fa-phone"></i></div>
            <div className="texto">
              <h4>Telefono</h4>
              <p>+57 (323) 2453175</p>
            </div>
          </div>
          <div className="caja">
            <div className="icon"><i className="fa-solid fa-envelope"></i></div>
            <div className="texto">
              <h4>Correo Electronico</h4>
              <p>linfeenterprise@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactoForm">
          <form action="">
            <h2>Envie su Mensaje</h2>
            <div className="input">
              <input type="text" required="required"/>
              <span>Nombre Completo</span>
            </div>
            <div className="input">
              <input type="email" required="required"/>
              <span>Correo Electronico</span>
            </div>
            <div className="input">
              <textarea required="required"></textarea>
              <span>Escribe tu mensaje</span>
            </div>
            <div className="input">
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
    </div>
  )
}

export default Formulario