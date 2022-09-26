import './App.css'
import GlobalStateContext from './context/GlobalStateContext'
import Rutas from './routes/Rutas'
import AOS from 'aos'
import { useEffect, useState } from 'react'
import Loader from './components/Loader/Loader'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  const handleLoading = () => {
    setTimeout(() => setIsLoading(false), 1800)
  }

  useEffect(() => {
    AOS.init()

    window.addEventListener('load', handleLoading)
    return () => window.removeEventListener('load', handleLoading)
  }, [])

  return isLoading ? <Loader/> : (
    <GlobalStateContext>
      <Rutas/>
    </GlobalStateContext>
  );
}

export default App;
