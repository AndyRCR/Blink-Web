import React from 'react'
import FaqContainer from '../components/FaqContainer/FaqContainer'
import { motion } from 'framer-motion'

const PreguntasFrecuentes = () => {
  return (
    <motion.div
    className='preguntasFrecuentes'
    style={{paddingTop: '105px', backgroundColor: 'white'}}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <FaqContainer/>
    </motion.div>
  )
}

export default PreguntasFrecuentes