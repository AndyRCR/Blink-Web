import React from 'react'
import NotFoundContainer from '../components/NotFoundContainer/NotFoundContainer'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <motion.div
    className='notFound'
    style={{paddingTop: '105px', backgroundColor: 'white'}}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <NotFoundContainer/>
    </motion.div>
  )
}

export default NotFound