import React from 'react'
import FaqContainer from '../components/FaqContainer/FaqContainer'
import { motion } from 'framer-motion'

const PreguntasFrecuentes = () => {
  return (
    <motion.div
    className='preguntasFrecuentes'
    initial={{width: '0', transition: {duration: .2}}}
    animate={{width: '100%', transition: {duration: .2}}}
    exit={{x: window.innerWidth, transition: {duration: .2}}}>
        <FaqContainer/>
    </motion.div>
  )
}

export default PreguntasFrecuentes