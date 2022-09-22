import React from 'react'
import NovedadesContainer from '../components/NovedadesContainer/NovedadesContainer'
import { motion } from 'framer-motion'

const Novedades = () => {
  return (
    <motion.div
    className='novedades'
    style={{paddingTop: '105px'}}
    initial={{width: '0', transition: {duration: .2}}}
    animate={{width: '100%', transition: {duration: .2}}}
    exit={{x: -1 * window.innerWidth, transition: {duration: .2}}}>
        <NovedadesContainer/>
    </motion.div>
  )
}

export default Novedades