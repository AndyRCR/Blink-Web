import React from 'react'
import { Link } from 'react-router-dom'
import ArticlesList from '../ArticlesList/ArticlesList'
import Banner from '../Banner/Banner'
import './NovedadesContainer.css'

const NovedadesContainer = () => {
    return (
        <div className='novedadesContainer'>
            <Banner section='novedades' image='https://blinkimages.s3.amazonaws.com/novedades/novedades_image.webp' />
            <div className="novedadesBanner">
                <svg className='bg1' width="1920" height="493" viewBox="0 0 1920 493" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1920 25.5391C1799.53 100.282 1410.2 205.428 991.349 175.994C572.494 146.56 219.969 -27.8852 0.00012207 3.83934V493H1920V25.5391Z" fill="url(#paint0_linear_205_99)" />
                    <defs>
                        <linearGradient id="paint0_linear_205_99" x1="960" y1="0" x2="960" y2="493" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#A99BFF" />
                            <stop offset="0.282403" stopColor="#7C6BED" stopOpacity="0.985381" />
                            <stop offset="0.615743" stopColor="#6966E9" />
                            <stop offset="1" stopColor="#4744CC" />
                        </linearGradient>
                    </defs>
                </svg>

                <svg className='bg2' width="1920" height="470" viewBox="0 0 1920 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1920 0C1806.18 79.9369 1415.18 204.462 997.298 193.564C579.411 182.666 215.883 24.0182 -5.72205e-05 65.3989V469.116H1920V0Z" fill="white" />
                </svg>

                <div className='novedadesContent'>
                    <div className='novedadesImage'>
                        <img src="https://blinkimages.s3.amazonaws.com/bostezo.jpg" alt="novedades blink main" />
                    </div>
                    <div className='novedadesInfo'>
                        <h3>Qué alimentos consumir para combatir el cansancio</h3>
                        <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. Estos textos hacen parecerlo un español que se puede leer.</p>
                        <button className='primaryButton'>
                            <Link to={'/articuloTest'}>Leer más</Link>
                        </button>
                    </div>
                </div>

                <ArticlesList />
            </div>
        </div>
    )
}

export default NovedadesContainer