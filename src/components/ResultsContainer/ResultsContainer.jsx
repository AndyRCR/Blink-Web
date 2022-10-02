import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Filters from '../Filters/Filters'
import { results } from '../ResultsCarousel/ExampleResults'
import ResultsCarousel from '../ResultsCarousel/ResultsCarousel'
import './ResultsContainer.css'

const ResultsContainer = () => {

  const {filtersDisplayed} = useContext(GlobalContext)

  const [resize, setResize] = useState(window.innerWidth < 900)

  const handleResize = () => setResize(window.innerWidth < 900)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [resize])
  

  return (
    <div className={filtersDisplayed ? 'resultsContainer displayed' : 'resultsContainer'}>
        <Filters/>
        <div className='carouselContainer' style={{overflowX: resize ? 'scroll' : 'hidden'}}>
          <h3><span>{results.length}</span> resultados encontrados</h3>
          <ResultsCarousel/>
        </div>
    </div>
  )
}

export default ResultsContainer