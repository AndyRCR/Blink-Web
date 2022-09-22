import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Navbar.css'

const Navbar = () => {

  const [scroll, setScroll] = useState(0)

  useEffect(() => {
      const handleScroll = () => setScroll(window.scrollY)
      window.addEventListener('scroll', handleScroll)
      return () =>{
          window.removeEventListener('scroll', handleScroll)
      }
  }, [scroll])

  return (
    <div className={scroll < 150 ? 'navbar' : 'navbar transparent'}>
        <Logo/>
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