import React from 'react'
import ArticuloTestContainer from '../components/ArticuloTestContainer/ArticuloTestContainer'
import { motion } from 'framer-motion'

const ArticuloTest = () => {
  return (
    <motion.div
    className='articuloTest'
    initial={{width: '0', transition: {duration: .2}}}
    animate={{width: '100%', transition: {duration: .2}}}
    exit={{x: window.innerWidth, transition: {duration: .2}}}>
        <ArticuloTestContainer/>
    </motion.div>
  )
}

export default ArticuloTest