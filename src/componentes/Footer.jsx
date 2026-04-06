
import '../Styles/Footer.css'

function Footer(){
    return(
        <div className='footer'>

            <p>© {new Date().getFullYear()} Unai Perez</p>

            <div className='links'>
                <a href="#hero">Hero</a>
                <a href="#sobre-mi">Sobre Mi</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#contacto">Contacto</a>
            </div>
        </div>
    )
}

export default Footer