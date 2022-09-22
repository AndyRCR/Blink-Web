import React, { useContext, useEffect, useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Pagination from '@mui/material/Pagination'
import { withStyles, makeStyles } from '@mui/styles'
import { GlobalContext } from '../../context/GlobalStateContext'
import './ArticlesList.css'
import { Link } from 'react-router-dom'

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

const useStyles = makeStyles({
  root: {
      '& ul > li:not(:first-child):not(:last-child) > button.Mui-selected': {
        backgroundColor: '#4E29C8',
        color:'#fff',
        fontWeight: 'bold'
      },
      '& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)': {
        fontWeight: 'bold'
      }
  }
})

const ArticlesList = () => {

  const classes = useStyles()

  const { articles } = useContext(GlobalContext)

  const [page, setPage] = useState(1)

  useEffect(() => {
  }, [page])
  
  return (
    <div className='articlesList'>
      <div className='filter'>
        <h3>Conocé más novedades:</h3>
        <CssInput
            style={{border: '1px solid #4E29C8', borderRadius: '12px'}}
            id="outlined-adornment-weight"
            placeholder='Buscar artículo'
            endAdornment={
            <InputAdornment position="end">
              <FontAwesomeIcon style={{color: '#4E29C8'}} icon={faSearch}/>
            </InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
          />
      </div>
      <div className='articles'>
        <div className='articlesGrid'>
            {[...articles].slice((page-1)*6, (page-1)*6+6).map((article,index)=>{
              return (
                <div className='articleItem' key={`article ${index}`}>
                  <div className='image'>
                    <img src="https://programacion.net/files/article/20161110041116_image-not-found.png" alt={`blink ${article.title}`} />
                  </div>
                  <div className='info'>
                    <h4>{article.title}</h4>
                    <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
                    <div className='button'>
                      <button className='secondaryButton'>
                        <Link to={'/articuloTest'}>Ver más</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
        <div className="articlesPagination">
          <Pagination
          className={classes.root} 
          onChange={(e,pageNumber) => setPage(pageNumber)}
          count={Math.round(articles.length/6)}
          shape="rounded" />
        </div>
      </div>
    </div>
  )
}

export default ArticlesList