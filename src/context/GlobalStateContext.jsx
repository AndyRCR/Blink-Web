import React, { createContext, useState } from "react";
import axios from 'axios'
import emailjs from 'emailjs-com'
import $ from 'jquery'
import Swal from 'sweetalert2'

export const GlobalContext = createContext()

const images = [
  "https://blinkimages.s3.amazonaws.com/novedades/articulo1.jpeg",
  "https://blinkimages.s3.amazonaws.com/novedades/articulo2.jpeg",
  "https://blinkimages.s3.amazonaws.com/novedades/articulo3.jpeg",
  "https://blinkimages.s3.amazonaws.com/novedades/articulo4.jpeg",
  "https://blinkimages.s3.amazonaws.com/novedades/articulo5.jpeg",
  "https://blinkimages.s3.amazonaws.com/novedades/articulo6.jpeg"
]

const GlobalStateContext = ({ children }) => {
  
  //Mail service init
  emailjs.init("LgMjYTa-xV42Eb5OY")

  /**
   * Blogs
   */
  const [articles, setArticles] = useState([
    {title: 'Articulo novedoso 1', starred: false, image: images[0]},
    {title: 'Articulo novedoso 2', starred: false, image: images[1]},
    {title: 'Articulo novedoso 3', starred: false, image: images[2]},
    {title: 'Articulo novedoso 4', starred: true, image: images[3]},
    {title: 'Articulo novedoso 5', starred: false, image: images[4]},
    {title: 'Articulo novedoso 6', starred: false, image: images[5]},
    {title: 'Articulo novedoso 7', starred: false, image: images[2]},
    {title: 'Articulo novedoso 8', starred: false, image: images[4]},
    {title: 'Articulo novedoso 9', starred: true, image: images[5]},
    {title: 'Articulo novedoso 10', starred: false, image: images[3]},
    {title: 'Articulo novedoso 11', starred: false, image: images[0]},
    {title: 'Articulo novedoso 12', starred: false, image: images[1]},
    {title: 'Articulo novedoso 13', starred: false, image: images[2]},
    {title: 'Articulo novedoso 14', starred: false, image: images[5]},
    {title: 'Articulo novedoso 15', starred: false, image: images[0]},
    {title: 'Articulo novedoso 16', starred: true, image: images[4]},
    {title: 'Articulo novedoso 17', starred: false, image: images[1]},
    {title: 'Articulo novedoso 18', starred: false, image: images[3]}
  ])
  
  /**
   * Form states/functions
   */
  const [selectedFile, setSelectedFile] = useState(null)
  const [fileUploaded, setFileUploaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const [partnerSwitch, setPartnerSwitch] = useState(false)
  const [childrenSwitch, setChildrenSwitch] = useState(false)

  const [postulant, setPostulant] = useState({
    name: '',
    phone: '',
    email: '',
    path: ''
  })

  const [user, setUser] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    zone: 'CABA',
    situation: 'Monotributista',
    partnerAge: '',
    childrens: ''
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
        isLoading,
        user,
        setUser,
        partnerSwitch,
        setPartnerSwitch,
        childrenSwitch,
        setChildrenSwitch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateContext;