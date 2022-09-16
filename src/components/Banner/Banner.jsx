import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Banner.css'

const Banner = (props) => {
  return (
    <div className='banner'>
        <div className='sloganContainer'>
            <h2>
              {props.section === 'home' && (
                <>Compará<br/>las mejores<br/>opciones</>
              )}
              {props.section === 'faq' && (
                <>¿Tenés<br/>preguntas?</>
              )}
            </h2>
            <p>
              {props.section === 'home' && (
                <>Estás conectado y tu salud también,<br/>encontrá los mejores planes para vos</>
              )
              }
              {props.section === 'faq' && (
                <>Blink te despeja todas tus dudas</>
              )
              }
            </p>
            {props.section === 'home' && (
              <button className='bannerButton primaryButton'>
                Comparar planes
                <FontAwesomeIcon icon={faChevronRight}/>
              </button>
            )}
        </div>
        <div className='imageContainer'>
            <img src={props.image} alt={`blink ${props.section}`} />
        </div>
    </div>
  )
}

export default Banner