import './App.css'
import GlobalStateContext from './context/GlobalStateContext'
import Rutas from './routes/Rutas'
import AOS from 'aos'
import { useEffect, useState } from 'react'
import Loader from './components/Loader/Loader'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    AOS.init()
    setTimeout(() => setIsLoading(false), 1800)
  }, [isLoading])

  return isLoading ? <Loader/> : (
    <GlobalStateContext>
      <Rutas/>
    </GlobalStateContext>
  );
}

export default App;
