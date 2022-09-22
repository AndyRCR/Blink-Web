import React from 'react'
import Banner from '../Banner/Banner'
import ComparadorComponent from '../ComparadorComponent/ComparadorComponent'
import LogoCarousel from '../LogoCarousel/LogoCarousel'
import './ComparadorContainer.css'

const ComparadorContainer = () => {
  return (
    <div className='comparadorContainer'>
        <Banner section='comparador' image='https://blinkimages.s3.amazonaws.com/comparador/cotizador_image(1).webp'/>
        <div className="comparadorSection">
            <ComparadorComponent/>
            <LogoCarousel/>
        </div>
    </div>
  )
}

export default ComparadorContainer