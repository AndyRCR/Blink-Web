import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { Checkbox, FormControlLabel, FormGroup, ListItemText, MenuItem, Select } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useContext, useEffect } from 'react'
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

    const {
        filtersDisplayed, setFiltersDisplayed,
        results, clinics,
        clinicsFiltereds, setClinicsFiltereds,
        orderBy, setOrderBy,
        benefitsFiltereds, setBenefitsFiltereds,
        providersFiltereds, setProvidersFiltered,
        minBudget, setMinBudget,
        maxBudget, setMaxBudget,
        setFilteredResults, setPosition, filteredResults } = useContext(GlobalContext)

    const handleChange = (e) => {
        const { value } = e.target
        setClinicsFiltereds(typeof value === 'string' ? value.split(',') : value)
    }

    const handleBenefits = (e, benefit) => {
        if (e.target.checked) {
            setBenefitsFiltereds([...benefitsFiltereds, benefit])
        } else {
            setBenefitsFiltereds(benefitsFiltereds.filter(b => b !== benefit))
        }
    }

    const handleProviders = (e, provider) => {
        if (e.target.checked) {
            setProvidersFiltered([...providersFiltereds, provider])
        } else {
            setProvidersFiltered(providersFiltereds.filter(p => p !== provider))
        }
    }

    const remapPositions = (array) => {
        return array.map((el,index) => {
            return {
                ...el,
                pos: index
            }
        })
    }

    const filterClinics = array => {
        if(clinicsFiltereds.length > 0){
            return array.filter(res => {
                for(let clinic of clinicsFiltereds){
                    if(res.clinics.includes(clinic)){
                        return true
                    }
                    else{
                        return false
                    }
                }
            })
        }else{
            return array
        }
    }

    const filterMinPrices = array => {
        if(minBudget !== ''){
            return array.filter(res => minBudget <= parseFloat(res.price))
        }else{
            return array
        }
    }

    const filterMaxPrices = array => {
        if(maxBudget !== ''){
            return array.filter(res => parseFloat(res.price) <= maxBudget)
        }else{
            return array
        }
    }

    const filterOrder = (array) => {
        if(orderBy !== 'default'){
            return array.sort((a,b) => orderBy === 'min' ? parseFloat(a.price) - parseFloat(b.price) : parseFloat(b.price) - parseFloat(a.price))
        }else{
            return array
        }
    }

    const filterProviders = (array) => {
        if (providersFiltereds.length > 0) {
            return array.filter(res => providersFiltereds.includes(res.nameprovider.toLowerCase()))
        }else{
            return array
        }
    }

    const filterBenefits = (array) => {
        if(benefitsFiltereds.length > 0){
            return array.filter(res => {
                let boolArr = []
                for (let key of benefitsFiltereds) {
                    if (typeof res[key] === 'string' && res[key]?.toLowerCase() !== 'no') {
                        boolArr.push(true)
                    } else boolArr.push(false)
                }
                return !boolArr.includes(false)
            })
        }else{
            return array
        }
    }

    const handleFilters = () => {
        setPosition(0)
        let result = results
        result = filterBenefits(result)
        result = filterProviders(result)
        result = filterClinics(result)
        result = filterMinPrices(result)
        result = filterMaxPrices(result)
        result = filterOrder(result)
        setFilteredResults(remapPositions(result))
    }

    const cleanFilters = () => {
        setProvidersFiltered([])
        setBenefitsFiltereds([])
        setClinicsFiltereds([])
        setOrderBy("default")
        setMinBudget('')
        setMaxBudget('')
    }

    useEffect(() => {
        if(results !== null) setFilteredResults(results)
    }, [results])

    return (
        <div className='filters'>
            <div className="filter">
                <div className="filterItem">
                    <p>Clínicas y sanatorios</p>
                    <Select
                        multiple
                        value={clinicsFiltereds}
                        onChange={handleChange}
                        renderValue={(selected) => selected.join(', ')}
                        className={`customSelect ${classes.root}`}
                        MenuProps={MenuProps}
                    >
                        {clinics !== null && (
                            clinics.map((clinic, index) => {
                                return (
                                    <MenuItem value={clinic} key={`clinicCheckbox${index + 1}`}>
                                        <Checkbox checked={clinicsFiltereds.indexOf(clinic) > -1} />
                                        <ListItemText primary={clinic} />
                                    </MenuItem>
                                )
                            })
                        )}
                    </Select>
                </div>
                <div className="filterItem">
                    <p>Ordenar por</p>
                    <Select
                        value={orderBy}
                        onChange={(e) => setOrderBy(e.target.value)}
                        name='orderBy'
                        className={`customSelect ${classes.root}`}>
                        <MenuItem value="default">Más relevantes</MenuItem>
                        <MenuItem value="min">Menor precio</MenuItem>
                        <MenuItem value="max">Mayor precio</MenuItem>
                    </Select>
                </div>
            </div>
            <div className="filter">
                <div className="filterItem">
                    <p>Beneficios</p>
                    <FormGroup className={classes.root}>
                        <FormControlLabel
                            control={<Checkbox
                                checked={benefitsFiltereds.indexOf('copay') > -1}
                                onChange={(e) => handleBenefits(e, 'copay')} />}
                            label='Copagos' />
                        <FormControlLabel
                            control={<Checkbox
                                checked={benefitsFiltereds.indexOf('refund') > -1}
                                onChange={(e) => handleBenefits(e, 'refund')} />}
                            label='Reintegros' />
                        <FormControlLabel
                            control={<Checkbox
                                checked={benefitsFiltereds.indexOf('orthodontics') > -1}
                                onChange={(e) => handleBenefits(e, 'orthodontics')} />}
                            label='Ortodoncia' />
                        <FormControlLabel
                            control={<Checkbox
                                checked={benefitsFiltereds.indexOf('odontology') > -1}
                                onChange={(e) => handleBenefits(e, 'odontology')} />}
                            label='Odontología' />
                        <FormControlLabel
                            control={<Checkbox
                                checked={benefitsFiltereds.indexOf('internation') > -1}
                                onChange={(e) => handleBenefits(e, 'internation')} />}
                            label='Internación' />
                        <FormControlLabel
                            control={<Checkbox
                                checked={benefitsFiltereds.indexOf('doctorathome') > -1}
                                onChange={(e) => handleBenefits(e, 'doctorathome')} />}
                            label='Médico a domicilio' />
                        <FormControlLabel
                            control={<Checkbox
                                checked={benefitsFiltereds.indexOf('medicalguide') > -1}
                                onChange={(e) => handleBenefits(e, 'medicalguide')} />}
                            label='Guía médica' />
                    </FormGroup>
                </div>
            </div>
            <div className="filter">
                <div className="filterItem">
                    <p>Prepagas</p>
                    <FormGroup className={classes.root}>
                        {/* <FormControlLabel
                            control={<Checkbox />}
                            label='Todas' /> */}
                        <FormControlLabel
                            control={<Checkbox
                                checked={providersFiltereds.indexOf('doctored') > -1}
                                onChange={(e) => handleProviders(e, 'doctored')} />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-doctored.png' alt='' />} />
                        <FormControlLabel
                            control={<Checkbox
                                checked={providersFiltereds.indexOf('galeno') > -1}
                                onChange={(e) => handleProviders(e, 'galeno')} />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-galeno.png' alt='' />} />
                        <FormControlLabel
                            control={<Checkbox
                                checked={providersFiltereds.indexOf('omint') > -1}
                                onChange={(e) => handleProviders(e, 'omint')} />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-omint.png' alt='' />} />
                        <FormControlLabel
                            control={<Checkbox
                                checked={providersFiltereds.indexOf('premedic') > -1}
                                onChange={(e) => handleProviders(e, 'premedic')} />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-premedic.png' alt='' />} />
                        <FormControlLabel
                            control={<Checkbox
                                checked={providersFiltereds.indexOf('sarcor') > -1}
                                onChange={(e) => handleProviders(e, 'sarcor')} />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-sarcor.png' alt='' />} />
                        <FormControlLabel
                            control={<Checkbox
                                checked={providersFiltereds.indexOf('prevencionsalud') > -1}
                                onChange={(e) => handleProviders(e, 'prevencionsalud')} />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-ps.png' alt='' />} />
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
                            value={minBudget}
                            onChange={(e) => setMinBudget(e.target.value)}
                            min={1} />
                        <div className='divisor'>-</div>
                        <input
                            placeholder='Hasta'
                            name='max'
                            type="number"
                            value={maxBudget}
                            onChange={(e) => setMaxBudget(e.target.value)}
                            min={1} />
                    </div>
                </div>
                <div className='filterItem' style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <button
                        className='primaryButton sendButton'
                        onClick={cleanFilters}>
                        Limpiar filtros
                    </button>
                    <button
                        className='primaryButton sendButton'
                        onClick={handleFilters}>
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