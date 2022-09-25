import React from 'react'
import ArticuloTestContainer from '../components/ArticuloTestContainer/ArticuloTestContainer'
import { motion } from 'framer-motion'

const ArticuloTest = () => {
  return (
    <motion.div
    className='articuloTest'
    style={{paddingTop: '105px', backgroundColor: 'white'}}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <ArticuloTestContainer/>
    </motion.div>
  )
}

export default ArticuloTest