import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import './ResponsiveNavbar.css'

const ResponsiveNavbar = () => {

  const { isDisplayed, setIsDisplayed } = useContext(GlobalContext)

  return (
    <div className={isDisplayed ? 'responsiveNavbar visible' : 'responsiveNavbar hidden'}>
      <NavLink
        onClick={() => {
          setIsDisplayed(false)
          document.querySelector('body').style.overflow = isDisplayed ? 'visible' : 'hidden'
        }}
        className={({ isActive }) => isActive ? 'activeNavLink' : 'navLink'}
        to={'/comparador'}>Comparador online</NavLink>
      <NavLink
        onClick={() => {
          setIsDisplayed(false)
          document.querySelector('body').style.overflow = isDisplayed ? 'visible' : 'hidden'
        }}
        className={({ isActive }) => isActive ? 'activeNavLink' : 'navLink'}
        to={'/nosotros'}>
        Sobre BLINK
      </NavLink>
      <NavLink
        onClick={() => {
          setIsDisplayed(false)
          document.querySelector('body').style.overflow = isDisplayed ? 'visible' : 'hidden'
        }}
        className={({ isActive }) => isActive ? 'activeNavLink' : 'navLink'}
        to={'/novedades'}>
        Novedades
      </NavLink>
      <NavLink
        onClick={() => {
          setIsDisplayed(false)
          document.querySelector('body').style.overflow = isDisplayed ? 'visible' : 'hidden'
        }}
        className={({ isActive }) => isActive ? 'activeNavLink' : 'navLink'}
        to={'/faq'}>
        Preguntas frecuentes
      </NavLink>
    </div>
  )
}

export default ResponsiveNavbar