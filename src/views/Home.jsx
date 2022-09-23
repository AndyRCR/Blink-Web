import React from 'react'
import HomeContainer from '../components/HomeContainer/HomeContainer'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
    className='home'
    style={{paddingTop: '105px'}}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <HomeContainer/>
    </motion.div>
  )
}

export default Home