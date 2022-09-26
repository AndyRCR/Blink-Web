import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from 'react'
import ResultItem from '../ResultItem/ResultItem'
import { results } from './ExampleResults'
import './ResultsCarousel.css'

const ResultsCarousel = () => {

  const [position, setPosition] = useState(0)
  const [newResults, setResults] = useState(results.map((el,index) => {return {...el, pos: index}}))

  const pixelToInt = (pixels) => {
    return parseInt(pixels.slice(0, pixels.indexOf('p')))
  }

  const moveRight = () => {
    if(position > 0){
      setResults(newResults.map(el => {
        return {
          ...el,
          pos: el.pos + 1}}
        ))
    }

    const style = window.getComputedStyle(document.querySelector('.carousel .result'))
    const width = style.getPropertyValue('width')

    setPosition(position < 1 ? position : position - 1)
    document.querySelectorAll('.carousel .result').forEach(item => {
      item.style.transform = position <= 0
      ? `translateX(${pixelToInt(width) * Math.abs(position) + 16 * Math.abs(position)}px)`
      : `translateX(${pixelToInt(width) * position + 16 * position}px)`
    })
  }

  const moveLeft = () => {
    if(position < results.length - 1){
      setResults(newResults.map(el => {
        return {
          ...el,
          pos: el.pos - 1
        }}
      ))
    }

    const style = window.getComputedStyle(document.querySelector('.carousel .result'))
    const width = style.getPropertyValue('width')

    setPosition(position > results.length - 2 ? position : position + 1)
    document.querySelectorAll('.carousel .result').forEach(item => {
      item.style.transform = `translateX(-${pixelToInt(width) * position + 16 * position}px)`
    })
  }

  useEffect(() => {
    const carousel = document.querySelector('.carousel')
    const style = window.getComputedStyle(document.querySelector('.carousel .result'))
    const width = style.getPropertyValue('width')

    carousel.style.width = `${pixelToInt(width) * 4 + 16 * 4}px`

    document.querySelectorAll('.carousel .result').forEach(item => {
      item.style.transform = `translateX(-${pixelToInt(width) * position + 16 * position}px)`
    })

    document.querySelectorAll('.carousel .pinFix.visible').forEach(item => {
      item.style.transform = `translateX(-${pixelToInt(width) * position + 16 * position}px)`
    })
  }, [position])

  return (
    <div className='resultsCarousel'>
      <h3><span>{results.length}</span> resultados encontrados</h3>
      <div className='carouselContainer'>
        <div className='scrollButton' onClick={moveRight}>
          <FontAwesomeIcon className='scrollIcon' icon={faAngleLeft} />
        </div>
        <div className='carousel'>
          {newResults.map((res, i) => {
            return (
              <ResultItem res={res} i={i} pos={res.pos} key={`result ${i}`} />
            )
          })}
        </div>
        <div className='scrollButton' onClick={moveLeft}>
          <FontAwesomeIcon className='scrollIcon' icon={faAngleRight} />
        </div>
      </div>
    </div>
  )
}

export default ResultsCarousel