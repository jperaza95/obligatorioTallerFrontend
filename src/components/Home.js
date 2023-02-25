import React from 'react'
import fondo from '../images/finanzas.webp'

const Home = () => {
  return (
    <div id="home">
        <h2 className='p-4 text-center'>Aplicacion de gestión de gastos y finanzas personales</h2>
        <img src={fondo} id="fondo"></img>
        
    </div>
  )
}

export default Home