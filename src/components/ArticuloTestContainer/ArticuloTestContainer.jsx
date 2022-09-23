import React, { useContext } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { withStyles } from '@mui/styles'
import { GlobalContext } from '../../context/GlobalStateContext'
import { Link } from 'react-router-dom'
import './ArticuloTestContainer.css'

const CssInput = withStyles({
  root: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: 'none'
    },
    "&.Mui-focused": {
      border: "none"
    }
  }
})(OutlinedInput);

const ArticuloTestContainer = () => {

  const { articles } = useContext(GlobalContext)

  return (
    <div className='articleTestContainer'>
      <div className='articleContent'>
        <p>SEP 21, 2022</p>
        <h1>Qué alimentos consumir para combatir el cansancio</h1>
        <div className='articleImage'>
          <img src='https://blinkimages.s3.amazonaws.com/bostezo.jpg' alt='articulo blink' />
        </div>
        <div className='articleText'>
          Uno de los posibles orígenes del cansancio radica en una mala alimentación. Además de estar siempre hidratado, comer ciertos alimentos puede ayudar a combatir la sensación de fatiga.
          <br />
          <br />
          Para tener más energía hay que incrementar el consumo de alimentos que contengan más aminoácidos esenciales, que son elementos que no puede producir el organismo pero que son necesarios para la elaboración de ciertos neurotransmisores como la serotonina, endorfinas las cuales generan mayor impulsos nerviosos y por ende aportan más ánimo y energía.
          Entre los alimentos con mayor aporte de aminoácidos esenciales están las frutas rojas, como cerezas y frutillas; los frutos secos, como las nueces y almendras; vegetales, como el brócoli, la palta y chauchas; leguminosas, como la quinoa, garbanzos y lentejas, y productos con de alto valor biológico, es decir con mucha proteína, como pescado, huevo y derivados lácteos.
          <br />
          <br />
          RUTINA Y EJERCICIO
          Hay que recordar también la importancia de mantener horarios y rutinas tanto para la alimentación como para el sueño y vigilia. Incorporar actividad física rutinaria que también generará mayor secreción de endorfinas y serotonina, esta actividad puede ser desde bailar o seguir alguna clase virtual.
        </div>
      </div>

      <div className='articlesList'>
        <div className='filter'>
          <h3>Conocé más novedades:</h3>
          <CssInput
            style={{ border: '1px solid #4744CC', borderRadius: '12px' }}
            id="outlined-adornment-weight"
            placeholder='Buscar artículo'
            endAdornment={
              <InputAdornment position="end">
                <FontAwesomeIcon style={{ color: '#4744CC' }} icon={faSearch} />
              </InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
          />
        </div>
        <div className='articles'>
          <div className='articlesGrid'>
            {articles.filter(article => article.starred).map((article, index) => {
              return (
                <div className='articleItem' key={`article ${index}`}>
                  <div className='image'>
                    <img src={article.image} alt={`blink ${article.title}`} />
                  </div>
                  <div className='info'>
                    <h4>{article.title}</h4>
                    <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
                    <div className='button'>
                      <button className='primaryButton'>
                        <Link to={'/articuloTest'}>Ver más</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticuloTestContainer