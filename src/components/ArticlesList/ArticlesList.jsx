import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { withStyles } from '@mui/material/styles'
import './ArticlesList.css'

// const CssInput = withStyles({
//   root: {
//     "& .MuiOutlinedInput-notchedOutline": {
//       borderColor: "blue"
//     },
//     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//       borderColor: "red"
//     }
//   }
// })(OutlinedInput);

const ArticlesList = () => {

  return (
    <div className='articlesList'>
      <div className='filter'>
        <h3>Conocé más novedades:</h3>
        <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={
            <InputAdornment position="end">
              <FontAwesomeIcon style={{color: '#4E29C8'}} icon={faSearch}/>
            </InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
          />
      </div>
    </div>
  )
}

export default ArticlesList