import React, { useContext } from 'react'
import './WorkWithUs.css'
import FileUploader from '../FileUploader/FileUploader'
import { GlobalContext } from '../../context/GlobalStateContext'

const WorkWithUs = () => {
    
    const {uploadFile, postulant, setPostulant, selectedFile} = useContext(GlobalContext)

    const verifyFields = () =>{
        if(
            selectedFile !== null &&
            postulant.name !== '' &&
            postulant.phone !== '' &&
            postulant.email !== ''
        ) uploadFile()
        else alert('Todos los campos son obligatorios')
    }

    const handleInputChange = (e) =>{
        const { name, value } = e.target
        setPostulant({
            ...postulant,
            [name]: value
        })
    }

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
                    value={postulant.name}
                    name='name'
                    onChange={handleInputChange}
                    type="text" />
                </div>
                <div className="formItem">
                    <p>Celular</p>
                    <input
                    value={postulant.phone}
                    name='phone'
                    onChange={handleInputChange}
                    type="tel" />
                </div>
                <div className="formItem">
                    <p>Correo electrónico</p>
                    <input
                    value={postulant.email}
                    name='email'
                    onChange={handleInputChange}
                    type="email" />
                </div>
                <FileUploader/>
                <div className='formItem'>
                    <button className='sendButton' onClick={verifyFields}>Subir</button>
                </div>
            </div>

        </div>
    )
}

export default WorkWithUs