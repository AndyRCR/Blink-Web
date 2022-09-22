import React, { createContext, useState } from "react";
import axios from 'axios'
import emailjs from 'emailjs-com'

export const GlobalContext = createContext()

const GlobalStateContext = ({ children }) => {

    emailjs.init("LgMjYTa-xV42Eb5OY")

    const [selectedFile, setSelectedFile] = useState(null)
    const [articles, setArticles] = useState([
      {title: 'Articulo novedoso 1'},
      {title: 'Articulo novedoso 2'},
      {title: 'Articulo novedoso 3'},
      {title: 'Articulo novedoso 4'},
      {title: 'Articulo novedoso 5'},
      {title: 'Articulo novedoso 6'},
      {title: 'Articulo novedoso 7'},
      {title: 'Articulo novedoso 8'},
      {title: 'Articulo novedoso 9'},
      {title: 'Articulo novedoso 10'},
      {title: 'Articulo novedoso 11'},
      {title: 'Articulo novedoso 12'},
      {title: 'Articulo novedoso 13'},
      {title: 'Articulo novedoso 14'},
      {title: 'Articulo novedoso 15'},
      {title: 'Articulo novedoso 16'},
      {title: 'Articulo novedoso 17'},
      {title: 'Articulo novedoso 18'}
    ])

    const uploadFile = async () => {
        try {
            let formData = new FormData()

            formData.append('file', selectedFile)

            axios.post("http://localhost:3306/uploadfile", formData, { headers: { 'Content-Type': 'multipart/form-data' } })
                .then(async (res) => {
                    emailjs.send('service_94nx1uu', 'template_r8rpyj8', { path: res.data.Location })
                        .then(() => alert('Registro exitoso'))
                })
                .catch(err => console.log(err))

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
        setArticles
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateContext;