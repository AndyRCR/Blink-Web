import React, { createContext, useState } from "react"
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
   * Responsive navbar
   */
  const [isDisplayed, setIsDisplayed] = useState(false)
  const [filtersDisplayed, setFiltersDisplayed] = useState(false)

  /**
   * Carousel
   */
  const [results, setResults] = useState(null)
  const [clinics, setClinics] = useState(null)
  const [itemCheckeds, setItemCheckeds] = useState(0)
  const [position, setPosition] = useState(0)

  /**
   *  Filters
   */
  const [filteredResults, setFilteredResults] = useState(null)
  const [clinicsFiltereds, setClinicsFiltereds] = useState([])
  const [benefitsFiltereds, setBenefitsFiltereds] = useState([])
  const [providersFiltereds, setProvidersFiltered] = useState([])
  const [minBudget, setMinBudget] = useState('')
  const [maxBudget, setMaxBudget] = useState('')
  const [orderBy, setOrderBy] = useState('default')

  /**
   * Blogs
   */
  const [articles, setArticles] = useState([
    { title: 'Articulo novedoso 1', starred: false, image: images[0] },
    { title: 'Articulo novedoso 2', starred: false, image: images[1] },
    { title: 'Articulo novedoso 3', starred: false, image: images[2] },
    { title: 'Articulo novedoso 4', starred: true, image: images[3] },
    { title: 'Articulo novedoso 5', starred: false, image: images[4] },
    { title: 'Articulo novedoso 6', starred: false, image: images[5] },
    { title: 'Articulo novedoso 7', starred: false, image: images[2] },
    { title: 'Articulo novedoso 8', starred: false, image: images[4] },
    { title: 'Articulo novedoso 9', starred: true, image: images[5] },
    { title: 'Articulo novedoso 10', starred: false, image: images[3] },
    { title: 'Articulo novedoso 11', starred: false, image: images[0] },
    { title: 'Articulo novedoso 12', starred: false, image: images[1] },
    { title: 'Articulo novedoso 13', starred: false, image: images[2] },
    { title: 'Articulo novedoso 14', starred: false, image: images[5] },
    { title: 'Articulo novedoso 15', starred: false, image: images[0] },
    { title: 'Articulo novedoso 16', starred: true, image: images[4] },
    { title: 'Articulo novedoso 17', starred: false, image: images[1] },
    { title: 'Articulo novedoso 18', starred: false, image: images[3] }
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

  const stringFormatter = x => {
    return x
      .replaceAll('Ã³', 'o')
      .replaceAll('ã‘', 'ñ')
      .replaceAll('ã�', 'i')
  }

  const formatClinics = clinicList => {
    return clinicList === null
      ? []
      : clinicList
        .trim()
        .replaceAll('\u00cc\ufffd', '')
        .replaceAll('\u00cc\u0192', '')
        .replaceAll('\u00c3\u2018', 'Ñ')
        .replaceAll(', ', '-')
        .replaceAll('\r\n\r\n', '-')
        .replaceAll('\r\n', '-')
        .split('-')
        .map(el => {
          return el.trim().split(" ").length === 1 && el.trim().length < 6
            ? el.trim().toUpperCase()
            : stringFormatter(el.trim().toLowerCase()).replace(/\b\w/g, letra => letra.toUpperCase())
        })
  }

  const obtainResults = () => {
    let idZone = user.zone === 'CABA'
      ? 1
      : user.zone === 'GBA Norte'
        ? 2
        : user.zone === 'GBA Sur'
          ? 3
          : 4

    let idSituation = user.situation === 'Monotributista'
      ? 1
      : user.situation === 'Relación en dependencia'
        ? 2
        : 3

    fetch(`http://www.blinksalud.com/apiquoter/index.php/quoters/quotation?age=${user.age}&employ=${idSituation}&couple=${user.partnerAge === '' ? 0 : 1}&coupleage=${user.partnerAge === '' ? 0 : user.partnerAge}&sons=${user.childrens === '' ? 0 : user.childrens}&location=${idZone}`)
      .then(res => res.json())
      .then(data => {
        let resultArr = []
        let clinicArr = []

        data.forEach(arr => arr.forEach(el => resultArr.push(el)))
        let newArr = resultArr.map((el, index) => { return { ...el, clinics: formatClinics(el.clinics), pos: index } })
        setResults(newArr)

        newArr.forEach(el => el.clinics.forEach(clinic => clinicArr.push(clinic)))
        setClinics(Array.from(new Set(clinicArr)).sort())
      })
  }

  const clearPostulantForm = () => {
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
        .then(res => {
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
        clinics,
        isLoading,
        uploadFile,
        obtainResults,
        selectedFile, setSelectedFile,
        articles, setArticles,
        postulant, setPostulant,
        fileUploaded, setFileUploaded,
        user, setUser,
        partnerSwitch, setPartnerSwitch,
        childrenSwitch, setChildrenSwitch,
        itemCheckeds, setItemCheckeds,
        results, setResults,
        position, setPosition,
        isDisplayed, setIsDisplayed,
        filtersDisplayed, setFiltersDisplayed,
        clinicsFiltereds, setClinicsFiltereds,
        orderBy, setOrderBy,
        benefitsFiltereds, setBenefitsFiltereds,
        providersFiltereds, setProvidersFiltered,
        minBudget, setMinBudget,
        maxBudget, setMaxBudget,
        filteredResults, setFilteredResults
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateContext;