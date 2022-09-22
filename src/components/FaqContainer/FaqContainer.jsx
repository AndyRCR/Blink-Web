import React from 'react'
import Banner from '../Banner/Banner'
import FaqAccordion from '../FaqAccordion/FaqAccordion'
import './FaqContainer.css'

const FaqContainer = () => {
  return (
    <div className='faqContainer'>
        <Banner section='faq' image='https://blinkimages.s3.amazonaws.com/faq/faq.webp'/>
        <div className='faqSection'>
            <svg className='bg1' width="1922" height="493" viewBox="0 0 1922 493" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1921.33 25.5391C1800.78 100.282 1411.18 205.428 992.038 175.994C572.892 146.56 220.122 -27.8852 0.000203411 3.83934V493H1921.33V25.5391Z" fill="url(#paint0_linear_205_249)"/>
                <defs>
                    <linearGradient id="paint0_linear_205_249" x1="981.507" y1="400.144" x2="981.507" y2="-26.1006" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5A00FE"/>
                    <stop offset="0.23" stopColor="#6F20FF"/>
                    <stop offset="0.48" stopColor="#7A31FF"/>
                    <stop offset="0.7" stopColor="#876AE8"/>
                    <stop offset="0.89" stopColor="#947AEB"/>
                    </linearGradient>
                </defs>
            </svg>
            <svg className='bg2' width="1922" height="470" viewBox="0 0 1922 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1921.33 0C1807.43 79.9369 1416.17 204.462 997.991 193.564C579.814 182.666 216.033 24.0182 0.000144958 65.3989V469.116H1921.33V0Z" fill="white"/>
            </svg>
            <div className='faqQuesContainer'>
                <FaqAccordion/>
            </div>
        </div> 
    </div>
  )
}

export default FaqContainer