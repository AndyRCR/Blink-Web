import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Filters from '../Filters/Filters'
import { results } from '../ResultsCarousel/ExampleResults'
import ResultsCarousel from '../ResultsCarousel/ResultsCarousel'
import './ResultsContainer.css'

const ResultsContainer = () => {

  const {filtersDisplayed} = useContext(GlobalContext)

  return (
    <div className={filtersDisplayed ? 'resultsContainer displayed' : 'resultsContainer'}>
        <Filters/>
        <div className='carouselContainer'>
          <h3><span>{results.length}</span> resultados encontrados</h3>
            <ResultsCarousel/>
        </div>
    </div>
  )
}

export default ResultsContainer