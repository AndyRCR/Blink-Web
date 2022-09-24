import React, { useContext, useEffect, useState } from 'react'
import { CircularProgress, MenuItem, Select } from '@mui/material'
import Swal from 'sweetalert2'
import { GlobalContext } from '../../context/GlobalStateContext'
import { makeStyles } from '@mui/styles'
import './ComparadorForm.css'

const phoneRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const nameRegex = /^[a-zA-Z\s]*$/

const useStyles = makeStyles({
    root: {
        '&': {
            fontFamily: "'Poppins', sans-serif !important",
            color: '#757575 !important',
            fontSize: '14px !important'
        },
        '& #mui-component-select-zone': {
            paddingLeft: '0 !important'
        },
        "&.Mui-focused": {
            border: "2px solid #4744CC !important"
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none !important"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none !important"
        }
    }
})

const ComparadorForm = ({ state }) => {

    const classes = useStyles()
    const { user, setUser, isLoading } = useContext(GlobalContext)

    const [validName, setValidName] = useState(true)
    const [validPhone, setValidPhone] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [validAge, setValidAge] = useState(true)

    const verifyFields = () => {
        if (!isLoading) {
            if (
                user.name !== '' &&
                user.phone !== '' &&
                user.email !== '' &&
                user.age !== ''
            ) {
                if (validName && validPhone && validEmail && validAge) alert('ga')
                else {
                    Swal.fire(
                        'Formato incorrecto',
                        'Revise los campos e intente nuevamente',
                        'info'
                    )
                }
            }
            else {
                setValidName(user.name !== '')
                setValidPhone(user.phone !== '')
                setValidEmail(user.email !== '')
                setValidAge(user.age !== '')
                Swal.fire(
                    'Intente nuevamente',
                    'Todos los campos son obligatorios',
                    'info'
                )
            }
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target

        if (name === 'phone') {
            let auxPhone = value.match(/(\d+)/g)?.join('')
            setValidPhone(phoneRegex.test(auxPhone) && !/[a-zA-Z]/g.test(value))
        } else if (name === 'email') {
            setValidEmail(emailRegex.test(value.toLowerCase()))
        } else if (name === 'name') {
            setValidName(nameRegex.test(value) && value.match(nameRegex)?.join('').length > 1)
        } else if (name === 'age') {
            setValidAge(
                value > 17 &&
                value - parseInt(value) === 0 &&
                !/[a-zA-Z]/g.test(value) &&
                value.indexOf('.') === -1
            )
        }

        setUser({
            ...user,
            [name]: value
        })
    }

    useEffect(() => {
    }, [isLoading])

    return (
        <div className='comparadorForm'>
            <div className='form'>
                <div className="subForm">
                    <div className={validName ? 'formItem' : 'formItem errorInput'}>
                        <p>Nombre completo</p>
                        <input
                            placeholder='Nombres y apellidos'
                            value={user.name}
                            name='name'
                            onChange={handleInputChange}
                            type="text" />
                        <p className={validName ? 'errorLabel' : 'errorLabel visible'}>
                            {user.name === '' ? 'Campo obligatorio' : 'Nombre no válido'}
                        </p>
                    </div>
                    <div className={validAge ? 'formItem' : 'formItem errorInput'}>
                        <p>Edad</p>
                        <input
                            placeholder='Edad'
                            value={user.age}
                            name='age'
                            onChange={handleInputChange}
                            type="number" />
                        <p className={validAge ? 'errorLabel' : 'errorLabel visible'}>
                            {user.age === '' ? 'Campo obligatorio' : 'Edad no válida'}
                        </p>
                    </div>
                    <div className={validEmail ? 'formItem' : 'formItem errorInput'}>
                        <p>Correo electrónico</p>
                        <input
                            placeholder='Correo de contacto'
                            value={user.email}
                            name='email'
                            onChange={handleInputChange}
                            type="email" />
                        <p className={validEmail ? 'errorLabel' : 'errorLabel visible'}>
                            {user.email === '' ? 'Campo obligatorio' : 'Correo no válido'}
                        </p>
                    </div>
                    <div className={validPhone ? 'formItem' : 'formItem errorInput'}>
                        <p>Celular</p>
                        <input
                            placeholder='Número de contacto'
                            value={user.phone}
                            name='phone'
                            onChange={handleInputChange}
                            type="text" />
                        <p className={validPhone ? 'errorLabel' : 'errorLabel visible'}>
                            {user.phone === '' ? 'Campo obligatorio' : 'Número no válido'}
                        </p>
                    </div>
                    <div className='formItem'>
                        <p>Zona</p>
                        <Select
                            name='zone'
                            value={user.zone}
                            onChange={handleInputChange}
                            inputProps={{ 'aria-label': 'Without label' }}
                            className={`customSelect ${classes.root}`}
                        >
                            <MenuItem value="CABA">CABA</MenuItem>
                            <MenuItem value="GBA Norte">GBA Norte</MenuItem>
                            <MenuItem value="GBA Sur">GBA Sur</MenuItem>
                            <MenuItem value="GBA Oeste">GBA Oeste</MenuItem>
                        </Select>
                        <p className='errorLabel'>
                            Campo obligatorio
                        </p>
                    </div>
                </div>
                <div className="subForm">
                    <div className='formItem'>
                        <button className='primaryButton sendButton' onClick={verifyFields}>
                            {isLoading ? (
                                <CircularProgress style={{ color: '#4E29C8', width: '25px', height: '25px' }} />
                            ) : (
                                <>Subir</>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComparadorForm