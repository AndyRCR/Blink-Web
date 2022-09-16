import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
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