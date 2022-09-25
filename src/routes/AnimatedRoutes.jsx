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
import NotFound from '../views/NotFound'
import Results from '../views/Results'

const AnimatedRoutes = () => {

    const location = useLocation()

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route exact path='/comparador' element={<Comparador />} />
              <Route exact path='/nosotros' element={<Nosotros />} />
              <Route exact path='/novedades' element={<Novedades />} />
              <Route exact path='/faq' element={<PreguntasFrecuentes />} />
              <Route exact path='/articuloTest' element={<ArticuloTest />} />
              <Route exact path='/resultado' element={<Results/>} />
              <Route path='*' element={<NotFound/>} />
            </Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes