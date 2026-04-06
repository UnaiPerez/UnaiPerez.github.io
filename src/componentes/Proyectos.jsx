
import '../Styles/Proyectos.css'
import Modal from './Modal.jsx'
import { useState, useEffect } from 'react'

function Proyectos() {

    /*
    const proyectos = [
        {
            id: 1,
            nombre: "Gestor de tareas",
            descripcion: "Aplicación con React y API REST",
            tecnologias: ["React", "Node.js"],
            imagen: "https://api.dicebear.com/7.x/bottts/svg?seed=gestor"
        },
        {
            id: 2,
            nombre: "Extensión Chrome",
            descripcion: "Generador de preguntas desde PDFs",
            tecnologias: ["JavaScript", "API"],
            imagen: "https://api.dicebear.com/7.x/bottts/svg?seed=extension"
        }
    ]
        */
    
    const [proyectos, setProyectos] = useState([])

    const [abierto, setAbierto] = useState(null)
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)

    const cerrarModal = () => {
        setAbierto(false)
        setProyectoSeleccionado(null)
    }

    const gestionarClicProyecto = (p) => {
        setProyectoSeleccionado(p)
        setAbierto(true)
    }

    useEffect( () => {
        
        const cargarRepos = async () => {
            const res = await fetch('https://api.github.com/users/UnaiPerez/repos')
            const data = await res.json()

            const reposConImagen = data.map(repo => ({
                ...repo,
                imagen: `https://api.dicebear.com/7.x/bottts/svg?seed=${repo.name}`
            }))

            console.log(data)
            setProyectos(reposConImagen)
        }

        cargarRepos()

    }, [])

    return (
        <>
        <div id='proyectos' className='proyectos'>
            <h2 className='proyectos_titulo'>Proyectos</h2>

            <div className='proyectos_grid'>

                {proyectos
                    .filter(p => p.description)
                    .map( p => (
                    
                    <div key={p.id} className='proyectos_card' onClick={() => gestionarClicProyecto(p)}>
                        <h3>{p.name}</h3>
                        <div className='proyecto_info'>
                            <p>{p.description}</p>   
                            <div className="tecnologias">
                                <span className="tech">{p.language}</span>
                            </div>                     
                            <img className="proyecto_img" src={p.imagen} />
                        </div>
                    </div>

                ))}

            </div>
        </div>
        <Modal abierto={abierto} proyectoSeleccionado={proyectoSeleccionado} cerrar={cerrarModal}></Modal>
        </>
    )
}

export default Proyectos