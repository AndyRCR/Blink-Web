import React from 'react'
import ComparadorContainer from '../components/ComparadorContainer/ComparadorContainer'
import { motion } from 'framer-motion'

const Comparador = () => {
  return (
    <motion.div
    className='comparador'
    style={{paddingTop: '105px'}}
    initial={{width: '0', transition: {duration: .2}}}
    animate={{width: '100%', transition: {duration: .2}}}
    exit={{x: -1 * window.innerWidth, transition: {duration: .2}}}>
        <ComparadorContainer/>
    </motion.div>
  )
}

export default Comparador