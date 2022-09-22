import React from 'react'
import ArticlesList from '../ArticlesList/ArticlesList'
import Banner from '../Banner/Banner'
import './NovedadesContainer.css'

const NovedadesContainer = () => {
    return (
        <div className='novedadesContainer'>
            <Banner section='novedades' image='https://blinkimages.s3.amazonaws.com/novedades/novedades_image.webp' />
            <div className="novedadesBanner">
                <svg className='bg1' width="1920" height="493" viewBox="0 0 1920 493" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1920 25.5391C1799.53 100.282 1410.2 205.428 991.349 175.994C572.494 146.56 219.969 -27.8852 7.14945e-05 3.83934V493H1920V25.5391Z" fill="url(#paint0_linear_205_99)" />
                    <defs>
                        <linearGradient id="paint0_linear_205_99" x1="980.826" y1="400.144" x2="980.826" y2="-26.1006" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5A00FE" />
                            <stop offset="0.23" stopColor="#6F20FF" />
                            <stop offset="0.48" stopColor="#7A31FF" />
                            <stop offset="0.7" stopColor="#876AE8" />
                            <stop offset="0.89" stopColor="#947AEB" />
                        </linearGradient>
                    </defs>
                </svg>

                <svg className='bg2' width="1920" height="470" viewBox="0 0 1920 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1920 0C1806.18 79.9369 1415.18 204.462 997.298 193.564C579.411 182.666 215.883 24.0182 -5.72205e-05 65.3989V469.116H1920V0Z" fill="white" />
                </svg>

                <div className='novedadesContent'>
                    <div className='novedadesImage'>
                        <img src="https://programacion.net/files/article/20161110041116_image-not-found.png" alt="novedades blink main" />
                    </div>
                    <div className='novedadesInfo'>
                        <h3>Qué alimentos consumir para combatir el cansancio</h3>
                        <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. Estos textos hacen parecerlo un español que se puede leer.</p>
                        <button className='secondaryButton'>Leer más</button>
                    </div>
                </div>

                <ArticlesList/>
            </div>
        </div>
    )
}

export default NovedadesContainer