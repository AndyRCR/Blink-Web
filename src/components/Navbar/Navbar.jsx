import React, { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Navbar.css'

const Navbar = () => {

  const {isDisplayed, setIsDisplayed} = useContext(GlobalContext)

  const [scroll, setScroll] = useState(0)
  const [showMenu, setShowMenu] = useState(window.innerWidth <= 870)

  const handleScroll = () => setScroll(window.scrollY)
  const handleResize = (e) => setShowMenu(e.target.screen.width <= 870)

  useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleResize)
      return () =>{
          window.removeEventListener('scroll', handleScroll)
          window.removeEventListener('resize', handleResize)
      }
  }, [scroll])

  return (
    <div className={scroll < 150 ? 'navbar' : 'navbar transparent'}>
        {/* <div style={{display: showMenu ? 'inline-block' : 'none'}}></div> */}
        <Logo/>
        <div
        onClick={() => {
          setIsDisplayed(!isDisplayed)
          document.querySelector('body').style.overflow = isDisplayed ? 'visible' : 'hidden'
        }}
        className={isDisplayed ? 'responsiveNavbarButton pressed' : 'responsiveNavbarButton unpressed'}
        style={{display: showMenu ? 'flex' : 'none'}}>
          <FontAwesomeIcon
          className={isDisplayed ? 'responsiveNavbarIcon pressed' : 'responsiveNavbarIcon'}
          icon={faAnglesDown}/>
        </div>
        <div className="menu">
            <div className="menuItem">
              <NavLink
              className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'}
              to={'/comparador'}>Comparador online</NavLink>
            </div>
            <div className="menuItem">
              <NavLink
              className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'}
              to={'/nosotros'}>
                Sobre BLINK
              </NavLink>
            </div>
            <div className="menuItem">
              <NavLink
              className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'}
              to={'/novedades'}>
                Novedades
              </NavLink>
            </div>
            <div className="menuItem">
              <NavLink
              className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'}
              to={'/faq'}>
                Preguntas frecuentes
              </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar