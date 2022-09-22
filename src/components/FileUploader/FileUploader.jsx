import React, { useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import { GlobalContext } from '../../context/GlobalStateContext'
import './FileUploader.css'

const FileUploader = () => {

    const {selectedFile, setSelectedFile, fileUploaded, setFileUploaded } = useContext(GlobalContext)

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0])
        setFileUploaded(true)

        let labelVal = $(".title").text();
        let oldfileName = $(this).val();
        let fileName = e.target.value.split('\\').pop();

        if (oldfileName === fileName) { return false; }
        let extension = fileName.split('.').pop();

        if (fileName) {
            $(".filelabel .title").text(fileName.slice(0, 8) + '...' + extension);
            if (fileName.length > 10) {
            }
            else {
                $(".filelabel .title").text(fileName);
            }
        }
        else {
            $(".filelabel .title").text(labelVal);
        }
    }

    useEffect(() => {
    }, [fileUploaded, selectedFile])

    return (
        <div>
            <p style={{ visibility: 'hidden' }}>Adjuntá tu cv</p>
            <label className='formitem filelabel'>
                {!fileUploaded ? (
                    <FontAwesomeIcon className='fileIcon' icon={faCloudArrowUp} />
                ) : (
                    <FontAwesomeIcon className='fileIcon' icon={faFilePdf} />
                )}
                <span className="title">
                    Cargá tu CV (.pdf)
                </span>
                <input
                    className='fileUpload'
                    id='fileInput'
                    name='booking_attachment'
                    type="file"
                    accept='application/pdf'
                    onChange={handleFileChange} />
            </label>
        </div>
    )
}

export default FileUploader