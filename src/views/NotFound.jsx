import React from 'react'
import NotFoundContainer from '../components/NotFoundContainer/NotFoundContainer'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <motion.div
    className='notFound'
    style={{paddingTop: '105px'}}
    initial={{width: '0', transition: {duration: .2}}}
    animate={{width: '100%', transition: {duration: .2}}}
    exit={{x: -1 * window.innerWidth, transition: {duration: .2}}}>
        <NotFoundContainer/>
    </motion.div>
  )
}

export default NotFound