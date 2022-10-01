import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import ResponsiveNavbar from './ResponsiveNavbar/ResponsiveNavbar'

const Layout = () => {
  return (
    <>
        <ResponsiveNavbar/>
        <Navbar/>
        <Outlet/>
        <Footer/> 
    </>
  )
}

export default Layout