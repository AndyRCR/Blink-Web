import React from 'react'
import NovedadesContainer from '../components/NovedadesContainer/NovedadesContainer'
import { motion } from 'framer-motion'

const Novedades = () => {
  return (
    <motion.div
    className='novedades'
    style={{paddingTop: '105px', backgroundColor: 'white'}}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <NovedadesContainer/>
    </motion.div>
  )
}

export default Novedades