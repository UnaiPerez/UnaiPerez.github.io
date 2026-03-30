
import '../Styles/SobreMI.css'

function SobreMi() {
    return (
        <div id='sobre-mi' className='SobreMi'>
            <h2 className='sobre_titulo'>Sobre Mi</h2>

            <div className='grid'>

                <div className='card'>
                    <h3 className='card_titulo'>Skills</h3>
                    <ul className='card_list'>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                </div>

                <div className='card'>
                    <h3 className='card_titulo'>Intereses</h3>
                    <ul className='card_list'>
                        <li>Desarrollo Web</li>
                        <li>Inteligencia artificial</li>
                        <li>Automatizacion</li>
                    </ul>
                </div>

                <div className='card'>
                    <h3 className='card_titulo'>Formacion</h3>
                    <ul className='card_list'>
                        <li>Ingenieria informatica (EHU)</li>
                        <li>Cursos de React</li>
                        <li>Bachillerato</li>
                    </ul>
                </div>

                <div className='card'>
                    <h3 className='card_titulo'>Hobbies</h3>
                    <ul className='card_list'>
                        <li>Padel</li>
                        <li>Series/Peliculas</li>
                        <li>Videojuegos</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SobreMi