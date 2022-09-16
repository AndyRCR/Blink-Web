import React from 'react'
import Banner from '../Banner/Banner'
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
            <div className='faqContainerOne'>
                <h1>¿Qué es una prepaga?</h1>
                <p>La ley 26.682 en su artículo 2, las describe así:
                    “Se consideran empresas de medicina prepaga a toda persona física o jurídica, 
                    cualquiera sea el tipo, figura jurídica y denominación que adopten cuyo objeto 
                    consista en brindar prestaciones de prevención, protección, protección, 
                    tratamiento y rehabilitación de la salud humana a los usuarios, 
                    a través de una modalidad de asociación voluntaria mediante sistemas pagos de adhesión, 
                    ya sea en efectores propios o a través de terceros vinculados o contratados al efecto, 
                    sea por contratación individual o corporativa”.</p>
            </div>
            <div className='faqContainerTwo'>
                <h1>¿Cómo funciona el comparador?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper et ultricies sagittis eget nulla laoreet. 
                    Sagittis, purus dictum enim interdum id velit. Orci, magna ultricies est sit euismod. 
                    Cras volutpat id elementum aenean netus. Justo, ut arcu tempor sodales porttitor. 
                    Dui sapien enim pharetra lacus. Tempor diam integer lacus imperdiet felis ut. Sed tempor, 
                    morbi vitae lacinia varius risus ut sociis. Viverra imperdiet porttitor ipsum, feugiat quis erat. 
                    Sollicitudin sit cras.</p>
            </div>
            <div className='faqContainerTree'>
                <h1>¿Cómo funcionan las prepagas?</h1>
                <p>Las prepagas se financian con las cuotas mensuales que aportan los afiliados adherentes de acuerdo con el plan elegido. 
                    A mayores prestaciones médicas incluidas, mayor es el costo. Con este fondo “de ahorro”, estas empresas 
                    hacen de intermediarias ante entidades y/o profesionales que prestan los servicios que sus afiliados requieren. 
                    Algunas prepagas poseen sus propias instituciones y personal médico. La afiliación a las empresas de medicina prepaga 
                    es voluntaria, caso que no ocurre con las obras sociales en las cuales es obligatoria. Por esta razón, invierten mucho 
                    dinero en mercadeo y publicidad para atraer usuarios recurrentes a sus planes de aseguramiento en salud.</p>
            </div>
            <div className='faqContainerFour'>
                <h1>¿Puedo cambiar de prepaga?</h1>
                <p>Si sos afiliado particular, podés cambiar de prepaga cuando desees. En caso de que estés afiliado por derivación 
                    de aportes, solo podrás realizarlo una vez por año. Cuando sos jubilado y accedes al beneficio de continuidad 
                    en la prepaga que tenías cuando estabas en actividad, lo mejor es que te quedes en tu prepaga de siempre porque 
                    si te cambias, perdés todos los beneficios que tenés y deberás acogerte a lo que te ofrezca la nueva prepaga.</p>
            </div>
            </div>
        </div> 
    </div>
  )
}

export default FaqContainer