import React from 'react'
import './StepItem.css'

const StepItem = (props) => {
  return (
    <div className='stepItem'>
        <div className='image'>
            <img src={props.image} alt="step blink" />
            <div className={props.orientation === 'left' ?  'stepCircle left' : 'stepCircle right'}>
                {props.number}
            </div>
        </div>
        <div className='title'>
            {props.title}
        </div>
        <div className='description'>
            {props.number === '1' && (
                <>Escribí tu info para<br/>
                comparar las opciones<br/>
                que se adapten a vos.</>
            )}
            {props.number === '2' && (
                <>Mirá las propuestas<br/>
                que corresponden<br/>
                a tus necesidades.</>
            )}
            {props.number === '3' && (
                <>¡Listo!<br/>
                te contactaremos<br/>
                al toque para finalizar.</>
            )}
        </div>
    </div>
  )
}

export default StepItem