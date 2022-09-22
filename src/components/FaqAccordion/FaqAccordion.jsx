import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import './FaqAccordion.css'

const generalQuestions = [
    {
        question: `¿Qué es una prepaga?`,
        answer: `La ley 26.682 en su artículo 2, las describe así:
    “Se consideran empresas de medicina prepaga a toda persona física o jurídica, 
    cualquiera sea el tipo, figura jurídica y denominación que adopten cuyo objeto 
    consista en brindar prestaciones de prevención, protección, protección, 
    tratamiento y rehabilitación de la salud humana a los usuarios, 
    a través de una modalidad de asociación voluntaria mediante sistemas pagos de adhesión, 
    ya sea en efectores propios o a través de terceros vinculados o contratados al efecto, 
    sea por contratación individual o corporativa”.`},
    {
        question: `¿Cómo funciona el comparador?`,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper et ultricies sagittis eget nulla laoreet. 
    Sagittis, purus dictum enim interdum id velit. Orci, magna ultricies est sit euismod. 
    Cras volutpat id elementum aenean netus. Justo, ut arcu tempor sodales porttitor. 
    Dui sapien enim pharetra lacus. Tempor diam integer lacus imperdiet felis ut. Sed tempor, 
    morbi vitae lacinia varius risus ut sociis. Viverra imperdiet porttitor ipsum, feugiat quis erat. 
    Sollicitudin sit cras.`},
    {
        question: `¿Cómo funcionan las prepagas?`,
        answer: `Las prepagas se financian con las cuotas mensuales que aportan los afiliados adherentes de acuerdo con el plan elegido. 
    A mayores prestaciones médicas incluidas, mayor es el costo. Con este fondo “de ahorro”, estas empresas 
    hacen de intermediarias ante entidades y/o profesionales que prestan los servicios que sus afiliados requieren. 
    Algunas prepagas poseen sus propias instituciones y personal médico. La afiliación a las empresas de medicina prepaga 
    es voluntaria, caso que no ocurre con las obras sociales en las cuales es obligatoria. Por esta razón, invierten mucho 
    dinero en mercadeo y publicidad para atraer usuarios recurrentes a sus planes de aseguramiento en salud.`},
    {
        question: `¿Puedo cambiar de prepaga?`,
        answer: `Si sos afiliado particular, podés cambiar de prepaga cuando desees. En caso de que estés afiliado por derivación 
    de aportes, solo podrás realizarlo una vez por año. Cuando sos jubilado y accedes al beneficio de continuidad 
    en la prepaga que tenías cuando estabas en actividad, lo mejor es que te quedes en tu prepaga de siempre porque 
    si te cambias, perdés todos los beneficios que tenés y deberás acogerte a lo que te ofrezca la nueva prepaga.`},
]

const FaqAccordion = () => {
    return (
        <div className='faqAccordion'>
            <h1>Preguntas 1</h1>
            {generalQuestions.map((faq, index) => {
                return (
                    <Accordion style={{ margin: 0 }} key={`faq ${index}`} className='accordionItem'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ padding: '10px' }}
                        >
                            <h3>{faq.question}</h3>
                        </AccordionSummary>
                        <AccordionDetails className='accordionDetails'>
                            {faq.answer}
                        </AccordionDetails>
                    </Accordion>
                )
            })}

            <h1>Preguntas 2</h1>
            {generalQuestions.map((faq, index) => {
                return (
                    <Accordion style={{ margin: 0 }} key={`faq ${index}`} className='accordionItem'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ padding: '10px' }}
                        >
                            <h3>{faq.question}</h3>
                        </AccordionSummary>
                        <AccordionDetails className='accordionDetails'>
                            {faq.answer}
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    )
}

export default FaqAccordion