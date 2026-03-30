import '../Styles/Modal.css'

function Modal({ abierto, proyectoSeleccionado, cerrar }) {

  if (!abierto) return null

  return (
    <div className="modal-overlay" onClick={cerrar}>
      
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        
        <h2>{proyectoSeleccionado.nombre}</h2>
        <p>{proyectoSeleccionado.descripcion}</p>

        <div className='tec_img'>
          <div className="tecnologias">
            {proyectoSeleccionado.tecnologias.map((t, i) => (
              <span key={i} className="tech">{t}</span>
            ))}
          </div>  

          <img className='modal_img' src={proyectoSeleccionado.imagen} alt={proyectoSeleccionado.nombre} />
        </div>
        

        <button className='modal_boton' onClick={cerrar}>Cerrar</button>

      </div>
    </div>
  )
}

export default Modal