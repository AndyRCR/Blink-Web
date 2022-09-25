import React from 'react'
import './Switch.css'

const Switch = ({state, onClick}) => {
  return (
    <div className={state ? 'switch on' : 'switch off'} onClick={onClick}>
        <div className={state ? 'button on' : 'button off'}>
        </div>
    </div>
  )
}

export default Switch