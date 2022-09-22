import React from 'react'
import HomeContainer from '../components/HomeContainer/HomeContainer'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
    className='home'
    style={{paddingTop: '105px'}}
    initial={{width: '0', transition: {duration: .2}}}
    animate={{width: '100%', transition: {duration: .2}}}
    exit={{x: -1 * window.innerWidth, transition: {duration: .2}}}>
        <HomeContainer/>
    </motion.div>
  )
}

export default Home