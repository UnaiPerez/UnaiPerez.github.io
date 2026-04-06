import '../Styles/Modal.css'

function Modal({ abierto, proyectoSeleccionado, cerrar }) {

  if (!abierto) return null

  return (
    <div className="modal-overlay" onClick={cerrar}>
      
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        
        <h2>{proyectoSeleccionado.name}</h2>
        <p>{proyectoSeleccionado.description}</p>

        <div className='tec_img'>
          <div className="tecnologias">
              <span className="tech">{proyectoSeleccionado.language}</span>
          </div>  

          <img className='modal_img' src={proyectoSeleccionado.imagen} alt={proyectoSeleccionado.nombre} />

        </div>
        
        <div className='botones'>
          <a href={proyectoSeleccionado.html_url}>
          <button className='btn_github'>Ver en GitHub</button>
        </a>

        <button className='modal_boton' onClick={cerrar}>Cerrar</button>
        </div>


      </div>
    </div>
  )
}

export default Modal