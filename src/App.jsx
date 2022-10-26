import { Routes,Route } from 'react-router-dom'
import LayoutComponent from './components/LayoutComponent'
import Habilidades from './pages/Habilidades'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'
import Inicio from './pages/Inicio'
import Frontend from './components/menu/Frontend'
import Lenguajes from './components/menu/Lenguajes'
import Backend from './components/menu/Backend'

function App() {

  return (
    <div>
        <Routes>
            <Route path="/" element={<LayoutComponent />}>
              <Route index  element={<Inicio />} />
              <Route path="habilidades" element={<Habilidades />}>
                <Route index element={<Lenguajes/>} />
                <Route path="frontend" element={<Frontend />} />
                <Route path="backend" element={<Backend />} />
              </Route> 
              <Route path="proyectos" element={<Proyectos />} />
              <Route path="contacto" element={<Contacto />} /> 
            </Route>
        </Routes>     
    </div>
  )
}

export default App
