import React from 'react'
import Banner from '../Banner/Banner'
import WorkWithUs from '../WorkWithUs/WorkWithUs'
import './AboutContainer.css'

const AboutContainer = () => {
    return (
        <div className='aboutContainer'>
            <Banner section='about' image='https://blinkimages.s3.amazonaws.com/about/about_image.webp' />
            <div className="aboutSection">
                <svg className='bg1' width="1920" height="493" viewBox="0 0 1920 493" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1920 25.5391C1799.53 100.282 1410.2 205.428 991.349 175.994C572.494 146.56 219.969 -27.8852 7.14945e-05 3.83934V493H1920V25.5391Z" fill="url(#paint0_linear_205_292)" />
                    <defs>
                        <linearGradient id="paint0_linear_205_292" x1="980.826" y1="400.144" x2="980.826" y2="-26.1006" gradientUnits="userSpaceOnUse">
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

                <svg className='bg3' width="1920" height="540" viewBox="0 0 1920 540" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1920 0C1806.35 80.718 1423.81 193.293 1003.63 184.973C583.459 176.654 216.496 20.1509 -5.72205e-05 62.8964V512C-5.72205e-05 512 202.048 450.003 1003.63 512C1805.22 573.997 1918.71 512 1918.71 512L1920 0Z" fill="url(#paint0_linear_205_294)" />
                    <defs>
                        <linearGradient id="paint0_linear_205_294" x1="999.563" y1="455.233" x2="999.563" y2="-102.833" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5A00FE" />
                            <stop offset="0.23" stopColor="#6917FF" />
                            <stop offset="0.48" stopColor="#6742E1" />
                            <stop offset="0.7" stopColor="#7858E4" />
                            <stop offset="0.89" stopColor="#8C70E9" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className='aboutContent'>
                    <div className='content'>
                        Somos lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget blandit diam elementum velit elementum ipsum integer. Viverra sagittis, a, adipiscing vitae sit vitae, mauris. Nibh proin sem cras venenatis lectus. Volutpat, massa ultricies morbi at lorem quam fermentum, eget ornare. Amet, enim dolor scelerisque euismod blandit varius urna, amet.
                    </div>
                </div>
            </div>

            <div className='misionVision'>
                <div className='misionImage'>
                    <img src="https://programacion.net/files/article/20161110041116_image-not-found.png" alt="mision blink" />
                </div>
                <div className='misionContent'>
                    <div className='misionItem'>
                        <h2>Misión</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget blandit diam elementum velit elementum ipsum integer.</p>
                    </div>
                    <div className='misionItem'>
                        <h2>Visión</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget blandit diam elementum velit elementum ipsum integer. Viverra sagittis, a, adipiscing vitae sit vitae, mauris. Nibh proin sem cras venenatis lectus. </p>
                    </div>
                </div>
            </div>

            <div className='valores'>
                <svg className='bg1' width="1920" height="647" viewBox="0 0 1920 647" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1919.04 0C1751.71 62.4992 1368.51 123.32 948.333 115C528.158 106.68 220.333 21.9992 0.333317 35.4992V619C0.333317 619 202.381 557.003 1003.97 619C1805.55 680.997 1919.04 619 1919.04 619V0Z" fill="url(#paint0_linear_205_295)" />
                    <defs>
                        <linearGradient id="paint0_linear_205_295" x1="999.896" y1="521.233" x2="999.896" y2="-36.8326" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5A00FE" />
                            <stop offset="0.23" stopColor="#6917FF" />
                            <stop offset="0.48" stopColor="#6742E1" />
                            <stop offset="0.7" stopColor="#7858E4" />
                            <stop offset="0.89" stopColor="#8C70E9" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className='valoresContent'>
                    <h2>Nuestros valores</h2>
                    <div className='content'>
                        <div className="valoresItem">
                            <h3>Confianza</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nec arcu ante malesuada curabitur justo netus.</p>
                        </div>
                        <div className="valoresItem">
                            <h3>Transparencia</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi diam mauris magnis habitant lobortis. Diam at vitae odio etiam urna.</p>
                        </div>
                        <div className="valoresItem">
                            <h3>Credibilidad</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, tempor dui malesuada mi, phasellus laoreet justo.</p>
                        </div>
                    </div>
                </div>
            </div>

            <WorkWithUs/>
        </div>
    )
}

export default AboutContainer