import React from 'react'
import NovedadesContainer from '../components/NovedadesContainer/NovedadesContainer'
import { motion } from 'framer-motion'

const Novedades = () => {
  return (
    <motion.div
    className='novedades'
    initial={{width: '0', transition: {duration: .2}}}
    animate={{width: '100%', transition: {duration: .2}}}
    exit={{x: window.innerWidth, transition: {duration: .2}}}>
        <NovedadesContainer/>
    </motion.div>
  )
}

export default Novedades