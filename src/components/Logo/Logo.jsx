import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import './Logo.css'

const Logo = () => {

  const {setIsDisplayed, isDisplayed} = useContext(GlobalContext)

  return (
    <div className='logo'>
      <Link
      onClick={() => {
        document.querySelector('body').style.overflow = isDisplayed ? 'visible' : 'hidden'
        setIsDisplayed(false)
      }}
      to={'/'}>blink</Link>
    </div>
  )
}

export default Logo