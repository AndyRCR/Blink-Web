import React from 'react'
import FaqContainer from '../components/FaqContainer/FaqContainer'
import { motion } from 'framer-motion'

const PreguntasFrecuentes = () => {
  return (
    <motion.div
    className='preguntasFrecuentes'
    style={{paddingTop: '105px'}}
    initial={{width: '0', transition: {duration: .2}}}
    animate={{width: '100%', transition: {duration: .2}}}
    exit={{x: -1 * window.innerWidth, transition: {duration: .2}}}>
        <FaqContainer/>
    </motion.div>
  )
}

export default PreguntasFrecuentes