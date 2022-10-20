import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Filters from '../Filters/Filters'
import ResultsCarousel from '../ResultsCarousel/ResultsCarousel'
import './ResultsContainer.css'

const ResultsContainer = () => {

  const {filtersDisplayed, results} = useContext(GlobalContext)

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
          {results !== null ? (
            <>
              <h3><span>{results.length}</span> resultados encontrados</h3>
              <ResultsCarousel/>
            </>
          ):(
            <h1>Cargando...</h1>
          )}
        </div>
    </div>
  )
}

export default ResultsContainer