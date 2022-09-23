import React from 'react'
import AboutContainer from '../components/AboutContainer/AboutContainer'
import { motion } from 'framer-motion'

const Nosotros = () => {
  return (
    <motion.div
    className='nosotros'
    style={{paddingTop: '105px'}}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <AboutContainer/>
    </motion.div>
  )
}

export default Nosotros