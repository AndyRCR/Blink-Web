import React from 'react'
import Filters from '../Filters/Filters'
import ResultsCarousel from '../ResultsCarousel/ResultsCarousel'
import './ResultsContainer.css'

const ResultsContainer = () => {
  return (
    <div className='resultsContainer'>
        <Filters/>
        <ResultsCarousel/>
    </div>
  )
}

export default ResultsContainer