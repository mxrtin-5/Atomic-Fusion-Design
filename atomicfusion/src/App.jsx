import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import ServiciosPage from './components/ServiciosPage/ServiciosPage';
import WebHosting from './components/WebHosting/WebHosting';
import WebDesign from './components/WebDesign/WebDesign';
import './App.css'
import Mantenimiento from './components/Mantenimiento/Mantenimiento';
import Posicionamiento from './components/Posicionamiento/Posicionamiento';
import Autoadministrable from './components/Autoadministrable/Autoadministrable';
import Newsletter from './components/Newsletter/Newsletter';
import { useState } from 'react';
import Contacto from './components/Contacto/Contacto';



function App() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <BrowserRouter>


        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />


        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/servicios' element={<ServiciosPage />}/>
          <Route path='/web-hosting' element={<WebHosting />} />
          <Route path='/web-design' element={<WebDesign />} />
          <Route path='/mantenimiento' element={<Mantenimiento />} />
          <Route path='/posicionamiento' element={<Posicionamiento />} />
          <Route path='/autoadministrable' element={<Autoadministrable />} />
          <Route path='/newsletter' element={<Newsletter />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
