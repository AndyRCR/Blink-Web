import React from 'react'
import { Link } from 'react-router-dom'
import './NotFoundContainer.css'

const NotFoundContainer = () => {
  return (
    <div className='notFoundContainer'>
        <h1>Ups... no se encontró la página</h1>
        <button className='primaryButton'>
            <Link to={'/'}>Volver al inicio</Link>
        </button>
    </div>
  )
}

export default NotFoundContainer