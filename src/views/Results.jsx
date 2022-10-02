import React, { useContext, useEffect } from 'react'
import ResultsContainer from '../components/ResultsContainer/ResultsContainer'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalStateContext'

const Results = () => {

    let navigate = useNavigate()

    const {filtersDisplayed} = useContext(GlobalContext)

    useEffect(() => {
      if(localStorage.getItem('parameters') === 'no') navigate('/comparador')
    })

    return (
        <motion.div
        className={filtersDisplayed ? 'results displayed' : 'results'}
        style={{backgroundColor: 'white'}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <ResultsContainer/>
        </motion.div>
    )
}

export default Results