import React from 'react'
import ComparadorContainer from '../components/ComparadorContainer/ComparadorContainer'
import { motion } from 'framer-motion'

const Comparador = () => {
  return (
    <motion.div
    initial={{width: '0', transition: {duration: .2}}}
    animate={{width: '100%', transition: {duration: .2}}}
    exit={{x: window.innerWidth, transition: {duration: .2}}}>
        <ComparadorContainer/>
    </motion.div>
  )
}

export default Comparador