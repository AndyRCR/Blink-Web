import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import StepItem from '../StepItem/StepItem'
import './Steps.css'
import { Link } from 'react-router-dom'

const Steps = () => {
  return (
    <div className='steps'>
        <svg className='bg1' width="1920" height="493" viewBox="0 0 1920 493" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 25.5391C120.473 100.282 509.795 205.428 928.651 175.994C1347.51 146.56 1700.03 -27.8852 1920 3.83934V493H0V25.5391Z" fill="url(#paint0_linear_209_687)"/>
            <defs>
                <linearGradient id="paint0_linear_209_687" x1="939.174" y1="400.144" x2="939.174" y2="-26.1006" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5A00FE"/>
                <stop offset="0.23" stopColor="#6F20FF"/>
                <stop offset="0.48" stopColor="#7A31FF"/>
                <stop offset="0.7" stopColor="#876AE8"/>
                <stop offset="0.89" stopColor="#947AEB"/>
                </linearGradient>
            </defs>
        </svg>


        <svg className='bg2' width="1920" height="557" viewBox="0 0 1920 557" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0C113.825 79.9369 504.815 204.462 922.702 193.564C1340.59 182.666 1704.12 24.0182 1920 65.3989V557L0 469.116V0Z" fill="white"/>
        </svg>

        <svg className='bg3' width="1920" height="1500" viewBox="0 0 1920 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0C113.647 80.718 496.19 193.293 916.365 184.973C1336.54 176.654 1703.5 20.1509 1920 62.8964V981.446C1920 981.446 1717.95 919.449 916.365 981.446C114.778 1043.44 1.29293 981.446 1.29293 981.446L0 0Z" fill="url(#paint0_linear_209_689)"/>
            <defs>
                <linearGradient id="paint0_linear_209_689" x1="920.437" y1="455.233" x2="920.437" y2="-102.833" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5A00FE"/>
                <stop offset="0.23" stopColor="#6917FF"/>
                <stop offset="0.48" stopColor="#6742E1"/>
                <stop offset="0.7" stopColor="#7858E4"/>
                <stop offset="0.89" stopColor="#8C70E9"/>
                </linearGradient>
            </defs>
        </svg>

        <div className='stepsContent'>
            <div className='title'>Compará en 3 simples pasos</div>
            <div className='content'>Cotizá las prepagas para tu necesidad.<br/>¡Ahorra tiempo y dinero ahora!</div>
            <div className='itemContainer'>
                <StepItem
                image='https://blinkimages.s3.amazonaws.com/home/stepOne.png'
                orientation='left'
                number='1'
                title='Ingresá tu información'/>

                <StepItem
                image='https://blinkimages.s3.amazonaws.com/home/stepTwo.png'
                orientation='left'
                number='2'
                title='Compará los resultados'/>

                <StepItem
                image='https://blinkimages.s3.amazonaws.com/home/stepThree.png'
                orientation='right'
                number='3'
                title='Contratá una prepaga'/>
            </div>

            <div className='buttonContainer'>
                <button className='primaryButton'>
                    <Link to={'/comparador'}>
                        Comparar planes
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Steps