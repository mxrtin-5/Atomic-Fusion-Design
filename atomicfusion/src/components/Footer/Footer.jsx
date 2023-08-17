import { Link } from'react-router-dom'
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import './Footer.css'



export const Footer = () =>{


    return(
        <footer className='footer'>
            <div className='categories'>
                    <h4>Categorias</h4>
                    <Link className='categorias' to={'/'}><p className='p-categorias'>Inicio</p></Link>
                    <Link className='categorias'><p className='p-categorias'>Planes</p></Link>
                    <Link className='categorias' to={'/contacto'}><p className='p-categorias'>Contacto</p></Link>
                    
                </div>

            <div className='contactanos'>
                <h4>Contactanos</h4>
                <div className='contenedor-contactanos'>
                    <p className='p-icono'><SiWhatsapp /> 548113917</p>
                    <p className='p-icono'> <BsTelephoneFill />548113917</p>
                    <p className='p-icono'> <BiLogoGmail />ejemplo@gmail.com</p>
                </div>
                
            </div>

            <div className='conectados'>
                <h4>Sigamos conectados</h4>
                <div className='contenedor-conectados'>
                    <div className='container-facebook'>
                        <Link className='iconos-facebook-ig' to={'https://www.facebook.com/Mxrt1n5/'}><FaFacebook/></Link>
                        <Link className='iconos-facebook-ig' to={'https://www.instagram.com/mxrtin_5._/?hl=es'}><BiLogoInstagram/></Link>
                    </div>
                </div>
            </div>

        </footer>
    )
}