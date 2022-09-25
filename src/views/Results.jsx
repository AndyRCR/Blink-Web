import React, { useEffect } from 'react'
import ResultsContainer from '../components/ResultsContainer/ResultsContainer'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Results = () => {

    let navigate = useNavigate()

    useEffect(() => {
      if(localStorage.getItem('parameters') === 'no') navigate('/comparador')
    })

    return (
        <motion.div
        className='results'
        style={{paddingTop: '105px'}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <ResultsContainer/>
        </motion.div>
    )
}

export default Results