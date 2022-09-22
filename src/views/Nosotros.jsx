import React from 'react'
import AboutContainer from '../components/AboutContainer/AboutContainer'
import { motion } from 'framer-motion'

const Nosotros = () => {
  return (
    <motion.div
    className='nosotros'
    initial={{width: '0', transition: {duration: .2}}}
    animate={{width: '100%', transition: {duration: .2}}}
    exit={{x: window.innerWidth, transition: {duration: .2}}}>
        <AboutContainer/>
    </motion.div>
  )
}

export default Nosotros