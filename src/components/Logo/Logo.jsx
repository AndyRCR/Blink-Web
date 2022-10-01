import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import './Logo.css'

const Logo = () => {

  const {setIsDisplayed} = useContext(GlobalContext)

  return (
    <div className='logo'>
      <Link
      onClick={() => setIsDisplayed(false)}
      to={'/'}>blink</Link>
    </div>
  )
}

export default Logo