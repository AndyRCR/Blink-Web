import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import StepItem from '../StepItem/StepItem'
import './Steps.css'
import { Link } from 'react-router-dom'

const Steps = () => {
    return (
        <div className='steps'>
            <svg className='bg1' width="1920" height="260" viewBox="0 0 1920 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 25.5391C120.473 100.282 509.795 205.428 928.651 175.994C1347.51 146.56 1700.03 -27.8852 1920 3.83934V260H0V25.5391Z" fill="url(#paint0_linear_205_292)" />
                <defs>
                    <linearGradient id="paint0_linear_205_292" x1="720" y1="0" x2="720" y2="493" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A99BFF" />
                        <stop offset="0.282403" stopColor="#7C6BED" stopOpacity="0.985381" />
                        <stop offset="0.615743" stopColor="#6966E9" />
                        <stop offset="1" stopColor="#4744CC" />
                    </linearGradient>
                </defs>
            </svg>

            <svg className='bg2' width="1920" height="209" viewBox="0 0 1920 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0C113.825 79.9369 504.815 204.462 922.702 193.564C1340.59 182.666 1704.12 24.0182 1920 65.3989V208.5H0V0Z" fill="white" />
            </svg>

            <svg className='bg3' width="1920" height="1009" viewBox="0 0 1920 1009" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0C113.647 80.718 496.19 193.293 916.365 184.973C1336.54 176.654 1703.5 20.1509 1920 62.8964V981.446C1920 981.446 1717.95 919.449 916.365 981.446C114.778 1043.44 1.29293 981.446 1.29293 981.446L0 0Z" fill="url(#paint0_linear_209_689)" />
                <defs>
                    <linearGradient id="paint0_linear_209_689" x1="960" y1="0" x2="960" y2="1009" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A99BFF" />
                        <stop offset="0.282403" stopColor="#7C6BED" stopOpacity="0.985381" />
                        <stop offset="0.615743" stopColor="#6966E9" />
                        <stop offset="1" stopColor="#4744CC" />
                    </linearGradient>
                </defs>
            </svg>

            <div className='stepsContent'>
                <div className='title'>Compará en 3 simples pasos</div>
                <div className='content'>Cotizá las prepagas para tu necesidad.<br />¡Ahorra tiempo y dinero ahora!</div>
                <div className='itemContainer'>
                    <StepItem
                        image='https://blinkimages.s3.amazonaws.com/home/stepOne.png'
                        orientation='left'
                        number='1'
                        title='Ingresá tu información' />

                    <StepItem
                        image='https://blinkimages.s3.amazonaws.com/home/stepTwo.png'
                        orientation='left'
                        number='2'
                        title='Compará los resultados' />

                    <StepItem
                        image='https://blinkimages.s3.amazonaws.com/home/stepThree.png'
                        orientation='right'
                        number='3'
                        title='Contratá una prepaga' />
                </div>

                <div className='buttonContainer'>
                    <button className='primaryButton'>
                        <Link to={'/comparador'}>
                            Comparar planes
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Steps