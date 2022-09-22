import React, { useContext } from 'react'
import './WorkWithUs.css'
import FileUploader from '../FileUploader/FileUploader'
import { GlobalContext } from '../../context/GlobalStateContext'

const WorkWithUs = () => {
    
    const {uploadFile} = useContext(GlobalContext)

    return (
        <div className='workWithUs'>
            <div className='content'>
                <h3>Trabajá con nosotros</h3>
                <p>¡Si te gusta estar en contacto con los clientes y brindar un servicio personalizado, trabajá con nosotros!</p>
            </div>
            <div className='form'>
                <div className="formItem">
                    <p>Nombre completo</p>
                    <input type="text" />
                </div>
                <div className="formItem">
                    <p>Celular</p>
                    <input type="tel" />
                </div>
                <div className="formItem">
                    <p>Correo electrónico</p>
                    <input type="email" />
                </div>
                <FileUploader/>
                <div className='formItem'>
                    <button className='sendButton' onClick={uploadFile}>Subir</button>
                </div>
            </div>

        </div>
    )
}

export default WorkWithUs