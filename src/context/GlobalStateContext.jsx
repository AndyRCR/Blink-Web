import React, { createContext, useState } from "react";
import axios from 'axios'
import emailjs from 'emailjs-com'
import $ from 'jquery'
import Swal from 'sweetalert2'

export const GlobalContext = createContext()

const GlobalStateContext = ({ children }) => {

    emailjs.init("LgMjYTa-xV42Eb5OY")

    const [selectedFile, setSelectedFile] = useState(null)
    const [fileUploaded, setFileUploaded] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [articles, setArticles] = useState([
      {title: 'Articulo novedoso 1', starred: false},
      {title: 'Articulo novedoso 2', starred: false},
      {title: 'Articulo novedoso 3', starred: false},
      {title: 'Articulo novedoso 4', starred: true},
      {title: 'Articulo novedoso 5', starred: false},
      {title: 'Articulo novedoso 6', starred: false},
      {title: 'Articulo novedoso 7', starred: false},
      {title: 'Articulo novedoso 8', starred: false},
      {title: 'Articulo novedoso 9', starred: true},
      {title: 'Articulo novedoso 10', starred: false},
      {title: 'Articulo novedoso 11', starred: false},
      {title: 'Articulo novedoso 12', starred: false},
      {title: 'Articulo novedoso 13', starred: false},
      {title: 'Articulo novedoso 14', starred: false},
      {title: 'Articulo novedoso 15', starred: false},
      {title: 'Articulo novedoso 16', starred: true},
      {title: 'Articulo novedoso 17', starred: false},
      {title: 'Articulo novedoso 18', starred: false}
    ])
    const [postulant, setPostulant] = useState({
      name: '',
      phone: '',
      email: '',
      path: ''
    })

    const clearPostulantForm = () =>{
      setPostulant({
        name: '',
        phone: '',
        email: '',
        path: ''
      })
      setSelectedFile(null)
      setFileUploaded(false)
      $(".filelabel .title").text('Cargá tu CV')
    }

    const uploadFile = async () => {
        try {
            setIsLoading(true)

            let formData = new FormData()

            formData.append('file', selectedFile)

            axios.post("https://blink-files.onrender.com/uploadfile", formData, { headers: { 'Content-Type': 'multipart/form-data' } })
                .then( res => {
                  emailjs.send('service_94nx1uu', 'template_r8rpyj8', {
                    ...postulant,
                    path: res.data.Location
                  })
                  .then(() => {
                    Swal.fire(
                      'Gracias por su interés en Blink!',
                      'Lo contactaremos lo más pronto posible',
                      'success'
                    )
                    clearPostulantForm()
                  })
                  .catch(err => {
                    Swal.fire(
                      'Error 😕',
                      'Ocurrió un error en el servidor, intente nuevamente mas tarde',
                      'error'
                    )
                  })
                  .finally(() => setIsLoading(false))
                })
                .catch(err => {
                  Swal.fire(
                    'Error 😕',
                    'Ocurrió un error en el servidor, intente nuevamente mas tarde',
                    'error'
                  )
                })

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <GlobalContext.Provider
      value={{
        selectedFile,
        setSelectedFile,
        uploadFile,
        articles,
        setArticles,
        postulant,
        setPostulant,
        fileUploaded,
        setFileUploaded,
        isLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateContext;