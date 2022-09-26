import React from 'react'
import Filters from '../Filters/Filters'
import { results } from '../ResultsCarousel/ExampleResults'
import ResultsCarousel from '../ResultsCarousel/ResultsCarousel'
import './ResultsContainer.css'

const ResultsContainer = () => {
  return (
    <div className='resultsContainer'>
        <Filters/>
        <div className='carouselContainer'>
          <h3><span>{results.length}</span> resultados encontrados</h3>
            <ResultsCarousel/>
        </div>
    </div>
  )
}

export default ResultsContainer