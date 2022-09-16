import React from 'react'
import Banner from '../Banner/Banner'
import LogoCarousel from '../LogoCarousel/LogoCarousel'
import Steps from '../Steps/Steps'
import './HomeContainer.css'

const HomeContainer = () => {
  return (
    <div className='homeContainer'>
        <Banner section='home' image='https://blinkimages.s3.amazonaws.com/home/blink_medic.webp'/>
        <Steps/>
        <LogoCarousel/>
    </div>
  )
}

export default HomeContainer