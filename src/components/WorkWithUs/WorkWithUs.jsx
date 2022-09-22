import React, { useContext } from 'react'
import Swal from 'sweetalert2'
import FileUploader from '../FileUploader/FileUploader'
import { GlobalContext } from '../../context/GlobalStateContext'
import './WorkWithUs.css'
import { CircularProgress } from '@mui/material'
import { useEffect } from 'react'

const WorkWithUs = () => {
    
    const {uploadFile, postulant, setPostulant, selectedFile, isLoading} = useContext(GlobalContext)

    const verifyFields = () =>{
        if(!isLoading){
            if(
                selectedFile !== null &&
                postulant.name !== '' &&
                postulant.phone !== '' &&
                postulant.email !== ''
            ) uploadFile()
            else{
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
                <div className="formItem">
                    <p>Nombre completo</p>
                    <input
                    placeholder='Nombres y apellidos'
                    value={postulant.name}
                    name='name'
                    onChange={handleInputChange}
                    type="text" />
                </div>
                <div className="formItem">
                    <p>Celular</p>
                    <input
                    placeholder='Número de contacto'
                    value={postulant.phone}
                    name='phone'
                    onChange={handleInputChange}
                    type="tel" />
                </div>
                <div className="formItem">
                    <p>Correo electrónico</p>
                    <input
                    placeholder='Correo de contacto'
                    value={postulant.email}
                    name='email'
                    onChange={handleInputChange}
                    type="email" />
                </div>
                <FileUploader/>
                <div className='formItem'>
                    <button className='sendButton' onClick={verifyFields}>
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