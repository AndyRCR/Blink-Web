import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import ScrollToTop from '../tools/ScrollToTop'
import ArticuloTest from '../views/ArticuloTest'
import Comparador from '../views/Comparador'
import Home from '../views/Home'
import Nosotros from '../views/Nosotros'
import Novedades from '../views/Novedades'
import PreguntasFrecuentes from '../views/PreguntasFrecuentes'

const Rutas = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/comparador' element={<Comparador />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/novedades' element={<Novedades />} />
            <Route path='/faq' element={<PreguntasFrecuentes />} />
            <Route path='/articuloTest' element={<ArticuloTest />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default Rutas