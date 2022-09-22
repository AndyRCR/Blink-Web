import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Banner.css'
import BlastText from '../BlastText/BlastText'
import { Link } from 'react-router-dom'

const Banner = (props) => {
  return (
    <div className='banner'>
      <div className='sloganContainer principal'>

        <div className="page">
          <div className="container home-page-1">
            <div className="text-zone">
              {props.section === 'home' && (
                <BlastText text="home" className="blast-root" />
              )
              }
              {props.section === 'comparador' && (
                <BlastText text="comparador" className="blast-root" />
              )}
              {props.section === 'about' && (
                <BlastText text="about" className="blast-root" />
              )}
              {props.section === 'novedades' && (
                <BlastText text="novedades" className="blast-root" />
              )}
              {props.section === 'faq' && (
                <BlastText text="faq" className="blast-root" />
              )
              }
            </div>
          </div>
        </div>

        <p
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="1000">
          {props.section === 'home' && (
            <>Estás conectado y tu salud también,<br />encontrá los mejores planes para vos</>
          )
          }
          {props.section === 'comparador' && (
            <>Elegí la prepaga que mejor<br />se adapte a tus necesidades</>
          )}
          {props.section === 'about' && (
            <>Conocé un poco más de Blink</>
          )}
          {props.section === 'novedades' && (
            <>¡Entérate de lo nuevo referido a la salud!</>
          )}
          {props.section === 'faq' && (
            <>Blink te despeja todas tus dudas</>
          )
          }
        </p>
        {props.section === 'home' && (
          <button className='bannerButton primaryButton'>
            <Link to={'/comparador'}>
              Comparar planes
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </button>
        )}
      </div>
      <div className='imageContainer'>
        <img
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="1000"
        src={props.image}
        alt={`blink ${props.section}`} />
      </div>
    </div>
  )
}

export default Banner