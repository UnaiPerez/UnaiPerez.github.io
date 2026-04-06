import '../Styles/Navbar.css'
import ThemeSelector from './ThemeSelector.jsx'

function Navbar() {
    return(
        <>
            <div className='header'>
                <div className="logo">
                    <span className="azul">Mi</span>Portfolio
                </div>
                <ThemeSelector></ThemeSelector>
            </div>
            <nav className="navbar">
                <ul className="menu">
                    <li><a href="#hero">Hero</a></li>
                    <li><a href="#sobre-mi">Sobre Mi</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
            
        </>
        
    )
}

export default Navbar