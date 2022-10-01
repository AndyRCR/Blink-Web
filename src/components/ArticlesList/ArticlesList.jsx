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
    "&.Mui-focused.cssInput": {
      border: "1px solid #4744CC"
    },
    "& .searchIcon": {
      color: '#383838',
      transition: '.3s'
    },
    "&.Mui-focused .searchIcon": {
      color: "#4744CC"
    }
  }
})(OutlinedInput);

const useStyles = makeStyles({
  root: {
      '& ul > li:not(:first-child):not(:last-child) > button.Mui-selected': {
        backgroundColor: '#4744CC',
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
        <h3>Conocé más novedades</h3>
        <CssInput
        className='cssInput'
        id="outlined-adornment-weight"
        placeholder='Buscar artículo'
        startAdornment={
          <InputAdornment position="start">
            <FontAwesomeIcon className='searchIcon' icon={faSearch}/>
          </InputAdornment>}
        aria-describedby="outlined-weight-helper-text"/>
      </div>
      <div className='articles'>
        <div className='articlesGrid'>
            {[...articles].slice((page-1)*6, (page-1)*6+6).map((article,index)=>{
              return (
                <div className='articleItem' key={`article ${index}`}>
                  <div className='image'>
                    <img src={article.image} alt={`blink ${article.title}`} />
                  </div>
                  <div className='info'>
                    <h4>{article.title}</h4>
                    <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira...</p>
                    <div className='button'>
                      <button className='primaryButton'>
                        <Link to={'/articuloTest'}>Leer más</Link>
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