import '../Styles/Hero.css'
import Messi from '../assets/messi.jpg'

function Hero(){
    return(
        <>
        <div className='hero_container' id='hero'>
            <img src={Messi} alt="messi" className='imagen' />
            <div className='hero_info'>
                <h1 className='nombre'><span className='azul'>Unai</span> Perez</h1>
                <p>Alumno de Ingenieria informatica de gestion y sistemas de informacion, en la EHU de Vitoria-Gasteiz, interesado en el desarrollo web.
                    Me gusta estudiar nuevas tecnologias y aplicar mis habilidades en todo tipo de trabajos, tanto frontend como backend. 
                </p>

                <p>
                    He trabajado con diferentes tecnologias, JavaScripy, React, Node.js, desarrollando proyectos donde se aplican practicas de programacion.
                    Estoy interesado en seguir ampliando mis conocimiento, crear interfaces modernas y sistemas bien estructurados.
                </p>
            </div>
        </div>
            
        </>
    )
}

export default Hero