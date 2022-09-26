import './App.css'
import GlobalStateContext from './context/GlobalStateContext'
import Rutas from './routes/Rutas'
import AOS from 'aos'
import { useEffect } from 'react'
function App() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <GlobalStateContext>
      <Rutas/>
    </GlobalStateContext>
  );
}

export default App;
