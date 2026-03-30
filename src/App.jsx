import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './componentes/Navbar.jsx'
import Hero from './componentes/Hero.jsx'
import SobreMi from './componentes/SobreMi.jsx'
import Proyectos from './componentes/Proyectos.jsx'
import Contacto from './componentes/Contacto.jsx'

function App() {
  
  return(
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <SobreMi></SobreMi>
      <Proyectos></Proyectos>
      <Contacto></Contacto>
    </>
  )

}

export default App
