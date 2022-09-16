import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = () => {
  return (
    <div className='logo'>
      <Link to={'/'}>blink</Link>
    </div>
  )
}

export default Logo