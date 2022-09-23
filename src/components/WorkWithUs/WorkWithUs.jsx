import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import FileUploader from '../FileUploader/FileUploader'
import { GlobalContext } from '../../context/GlobalStateContext'
import './WorkWithUs.css'
import { CircularProgress } from '@mui/material'
import { useEffect } from 'react'

const phoneRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const nameRegex = /^[a-zA-Z\s]*$/

const WorkWithUs = () => {
    
    const {uploadFile, postulant, setPostulant, selectedFile, isLoading} = useContext(GlobalContext)

    const [validName, setValidName] = useState(true)
    const [validPhone, setValidPhone] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    // const [validForm, setValidForm] = useState(true)

    const verifyFields = () =>{
        if(!isLoading){
            if(
                selectedFile !== null &&
                postulant.name !== '' &&
                postulant.phone !== '' &&
                postulant.email !== '' 
            ){
                if(validName && validPhone && validEmail) uploadFile()
                else{
                    Swal.fire(
                        'Formato incorrecto',
                        'Revise los campos e intente nuevamente',
                        'info'
                    )
                }
            }
            else{
                setValidName(postulant.name !== '')
                setValidPhone(postulant.phone !== '')
                setValidEmail(postulant.email !== '')
                Swal.fire(
                    'Intente nuevamente',
                    'Todos los campos son obligatorios',
                    'info'
                )
            }
        }
    }

    const handleInputChange = (e) =>{
        const { name, value } = e.target

        if(name === 'phone'){
            let auxPhone = value.match(/(\d+)/g)?.join('')
            setValidPhone(phoneRegex.test(auxPhone) && !/[a-zA-Z]/g.test(value))
        }else if (name === 'email'){
            setValidEmail(emailRegex.test(value.toLowerCase()))
        }else if (name === 'name'){
            setValidName(nameRegex.test(value) && value.match(nameRegex)?.join('').length > 1)
        }

        setPostulant({
            ...postulant,
            [name]: value
        })
    }

    useEffect(() => {
    }, [isLoading])

    return (
        <div className='workWithUs'>
            <div className='content'>
                <h3>Trabajá con nosotros</h3>
                <p>¡Si te gusta estar en contacto con los clientes y brindar un servicio personalizado, trabajá con nosotros!</p>
            </div>
            <div className='form'>
                <div className={validName ? 'formItem' : 'formItem errorInput'}>
                    <p>Nombre completo</p>
                    <input
                    autoComplete={'' + Math.random()}
                    placeholder='Nombres y apellidos'
                    value={postulant.name}
                    name='name'
                    onChange={handleInputChange}
                    type="text" />
                    <p className={validName ? 'errorLabel' : 'errorLabel visible'}>Nombre no válido</p>
                </div>
                <div className={validPhone ? 'formItem' : 'formItem errorInput'}>
                    <p>Celular</p>
                    <input
                    autoComplete={'' + Math.random()}
                    placeholder='Número de contacto'
                    value={postulant.phone}
                    name='phone'
                    onChange={handleInputChange}
                    type="text"/>
                    <p className={validPhone ? 'errorLabel' : 'errorLabel visible'}>Número no válido</p>
                </div>
                <div className={validEmail ? 'formItem' : 'formItem errorInput'}>
                    <p>Correo electrónico</p>
                    <input
                    autoComplete={'' + Math.random()}
                    placeholder='Correo de contacto'
                    value={postulant.email}
                    name='email'
                    onChange={handleInputChange}
                    type="email" />
                    <p className={validEmail ? 'errorLabel' : 'errorLabel visible'}>Correo no válido</p>
                </div>
                <FileUploader/>
                <div className='formItem'>
                    <button className='primaryButton sendButton' onClick={verifyFields}>
                        {isLoading ? (
                            <CircularProgress style={{color: '#4E29C8', width: '25px', height: '25px'}}/>
                        ):(
                            <>Subir</>
                        )}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default WorkWithUs