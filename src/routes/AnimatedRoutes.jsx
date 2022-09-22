import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ArticuloTest from '../views/ArticuloTest'
import Comparador from '../views/Comparador'
import Home from '../views/Home'
import Nosotros from '../views/Nosotros'
import Novedades from '../views/Novedades'
import PreguntasFrecuentes from '../views/PreguntasFrecuentes'
import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {

    const location = useLocation()

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/comparador' element={<Comparador />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/novedades' element={<Novedades />} />
            <Route path='/faq' element={<PreguntasFrecuentes />} />
            <Route path='/articuloTest' element={<ArticuloTest />} />
            </Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes