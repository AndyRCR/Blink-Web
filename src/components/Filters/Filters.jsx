import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { Checkbox, FormControlLabel, FormGroup, ListItemText, ListSubheader, MenuItem, Select } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import { useState } from 'react'
import './Filters.css'
import { GlobalContext } from '../../context/GlobalStateContext'

const useStyles = makeStyles({
    root: {
        '&': {
            fontFamily: "'Poppins', sans-serif !important",
            color: '#757575 !important',
            fontSize: '14px !important'
        },
        "&.Mui-focused": {
            border: "2px solid #4744CC !important"
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none !important"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none !important"
        },
        '& .MuiFormControlLabel-label': {
            fontFamily: "'Poppins', sans-serif !important",
            fontSize: '15px'
        },
        '& .PrivateSwitchBase-input': {
            width: '0 !important'
        }
    }
})

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

const Filters = () => {

    const classes = useStyles()

    const {filtersDisplayed, setFiltersDisplayed} = useContext(GlobalContext)

    const [order, setOrder] = useState("1")
    const [clinicas, setClinicas] = useState([])

    const handleChange = (e) => {
        const { value } = e.target
        setClinicas(typeof value === 'string' ? value.split(',') : value)
    }

    return (
        <div className='filters'>
            <div className="filter">
                <div className="filterItem">
                    <p>Clínicas y sanatorios</p>
                    <Select
                        multiple
                        value={clinicas}
                        onChange={handleChange}
                        renderValue={(selected) => selected.join(', ')}
                        className={`customSelect ${classes.root}`}
                        MenuProps={MenuProps}
                    >
                        <ListSubheader>Capital federal</ListSubheader>
                        <MenuItem value='CEMIC'>
                            <Checkbox checked={clinicas.indexOf('CEMIC') > -1} />
                            <ListItemText primary='CEMIC' />
                        </MenuItem>
                        <MenuItem value='Clínica San Camilo'>
                            <Checkbox checked={clinicas.indexOf('Clínica San Camilo') > -1} />
                            <ListItemText primary='Clínica San Camilo' />
                        </MenuItem>
                        <MenuItem value='Clínica Sagrada Familia'>
                            <Checkbox checked={clinicas.indexOf('Clínica Sagrada Familia') > -1} />
                            <ListItemText primary='Clínica Sagrada Familia' />
                        </MenuItem>
                        <MenuItem value='Clínica Baztarrica'>
                            <Checkbox checked={clinicas.indexOf('Clínica Baztarrica') > -1} />
                            <ListItemText primary='Clínica Baztarrica' />
                        </MenuItem>

                        <ListSubheader>Ciudad 2</ListSubheader>
                        <MenuItem value='Clínica 1'>
                            <Checkbox checked={clinicas.indexOf('Clínica 1') > -1} />
                            <ListItemText primary='Clínica 1' />
                        </MenuItem>
                        <MenuItem value='Clínica 2'>
                            <Checkbox checked={clinicas.indexOf('Clínica 2') > -1} />
                            <ListItemText primary='Clínica 2' />
                        </MenuItem>
                        <MenuItem value='Clínica 3'>
                            <Checkbox checked={clinicas.indexOf('Clínica 3') > -1} />
                            <ListItemText primary='Clínica 3' />
                        </MenuItem>
                    </Select>
                </div>
                <div className="filterItem">
                    <p>Ordenar por</p>
                    <Select
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}
                        name='order'
                        className={`customSelect ${classes.root}`}>
                        <MenuItem value="1">Más relevantes</MenuItem>
                        <MenuItem value="2">Menor precio</MenuItem>
                        <MenuItem value="3">Mayor precio</MenuItem>
                    </Select>
                </div>
            </div>
            <div className="filter">
                <div className="filterItem">
                    <p>Beneficios</p>
                    <FormGroup className={classes.root}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Copagos' />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Reintegros' />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Ortodoncia' />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Cirugía estética' />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Habitación individual' />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Clínicas y sanatorios propios' />
                    </FormGroup>
                </div>
            </div>
            <div className="filter">
                <div className="filterItem">
                    <p>Prepagas</p>
                    <FormGroup className={classes.root}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Todas' />
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-doctored.png' alt=''/>} />
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-galeno.png' alt=''/>} />
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-omint.png' alt=''/>} />
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-premedic.png' alt=''/>} />
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-sarcor.png' alt=''/>} />
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-ps.png' alt=''/>} />
                    </FormGroup>
                </div>
            </div>
            <div className="filter last">
                <div className='filterItem'>
                    <p>Presupuesto</p>
                    <div className='filterPrice'>
                        <input
                        placeholder='Desde'
                        name='min'
                        type="number"
                        min={1}/>
                        <div className='divisor'>-</div>
                        <input
                        placeholder='Hasta'
                        name='max'
                        type="number"
                        min={1} />
                    </div>
                </div>
                <div className='filterItem'>
                    <button className='primaryButton sendButton'>
                        Aplicar
                    </button>
                </div>
            </div>
            <div className='showFilter'>
                <p onClick={() => setFiltersDisplayed(!filtersDisplayed)}>
                    {filtersDisplayed ? 'Ocultar filtros' : 'Mostrar filtros'}
                </p>
                <FontAwesomeIcon
                onClick={() => setFiltersDisplayed(!filtersDisplayed)}
                className={filtersDisplayed ? 'showFilterIcon pressed' : 'showFilterIcon'}
                icon={filtersDisplayed ? faAnglesUp : faAnglesDown} />
            </div>
        </div>
    )
}

export default Filters