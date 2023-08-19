import { Link } from 'react-router-dom'
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import './Footer.css'



export const Footer = () => {


    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='categories'>
                    <h4>Categorias</h4>
                    <Link className="categorias" to="/">Inicio</Link>
                    <Link className="categorias" to="/servicios">Servicios</Link>
                    <Link className="categorias" to="/web-hosting">Web Hosting</Link>
                    <Link className="categorias" to="/web-design">Diseño Web</Link>
                    <Link className="categorias" to="/mantenimiento">Mantenimiento</Link>
                    <Link className="categorias" to="/posicionamiento">SEO</Link>
                    <Link className="categorias" to="/autoadministrable">Webs Autoadministrables</Link>
                    <Link className="categorias" to="/newsletter">Newsletter</Link>
                    <Link className="categorias" to="/contacto">Contacto</Link>

                </div>

                <div className='contactanos'>
                    <h4>Contactanos</h4>
                    <div className='contenedor-contactanos'>
                        <p><SiWhatsapp className='p-icono' /> 548113917</p>
                        <p> <BsTelephoneFill className='p-icono' />548113917</p>
                        <p> <BiLogoGmail className='p-icono' />ejemplo@gmail.com</p>
                    </div>

                </div>

                <div className='conectados'>
                    <h4>Sigamos conectados</h4>
                    <div className='contenedor-conectados'>
                        <div className='container-facebook'>
                            <Link className='iconos-facebook-ig' to={'https://www.facebook.com/Mxrt1n5/'}><FaFacebook /></Link>
                            <Link className='iconos-facebook-ig' to={'https://www.instagram.com/mxrtin_5._/?hl=es'}><BiLogoInstagram /></Link>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}