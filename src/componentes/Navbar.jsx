import '../Styles/Navbar.css'

function Navbar() {
    return(
        <>
            <div className='header'>
                <div className="logo">
                    <span className="rojo">Mi</span>Portfolio
                </div>
            </div>
            <nav className="navbar">
                <ul className="menu">
                    <li><a href="#hero">Hero</a></li>
                    <li><a href="#sobre-mi">Sobre Mi</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="contacto">Contacto</a></li>
                </ul>
            </nav>
            
        </>
        
    )
}

export default Navbar