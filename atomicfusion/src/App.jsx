import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import ServiciosPage from './components/ServiciosPage/ServiciosPage';
import WebHosting from './components/WebHosting/WebHosting';
import WebDesign from './components/WebDesign/WebDesign';
import './App.css'
function App() {

  return (
    <div>
      <BrowserRouter>


        <Navbar />


        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/servicios' element={<ServiciosPage />}/>
          <Route path='/web-hosting' element={<WebHosting />} />
          <Route path='/web-design' element={<WebDesign />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
