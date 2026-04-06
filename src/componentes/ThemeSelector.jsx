
import { ContextoTema } from './ThemeManager.jsx'
import { useContext } from 'react'

function ThemeSelector() {

    const {tema, cambiarTema} = useContext(ContextoTema)

    return (
        <button className='theme_boton' onClick={cambiarTema}>{tema == 'dark' ? '☀️' : '🌙' }</button>
    )
}

export default ThemeSelector