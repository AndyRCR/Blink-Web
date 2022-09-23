import React from 'react'
import ComparadorContainer from '../components/ComparadorContainer/ComparadorContainer'
import { motion } from 'framer-motion'

const Comparador = () => {
  return (
    <motion.div
    className='comparador'
    style={{paddingTop: '105px'}}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <ComparadorContainer/>
    </motion.div>
  )
}

export default Comparador