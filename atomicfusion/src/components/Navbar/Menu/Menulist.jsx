import { useRef} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import './Menu.css'


const Menulist = ({ close }) => {


    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const handleCloseMenu = () => {
        navRef.current.classList.remove("responsive_nav");
        close()
    };


    return (
        <div className="nav-container">

            <nav ref={navRef} onClick={handleCloseMenu} className='menulist'>
                <Link onClick={showNavbar} className="menulist__link active" to="/">Inicio</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/servicios">Servicios</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/web-hosting">Web Hosting</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/web-design">Diseño Web</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/mantenimiento">Mantenimiento</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/posicionamiento">SEO</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/autoadministrable">Webs Autoadministrables</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/newsletter">Newsletter</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/contacto">Contacto</Link>

                <button className="nav-btn nav-close-btn" onClick={handleCloseMenu}>
                    <AiOutlineClose />
                </button>

            </nav>




        </div>
    );
}

export default Menulist;