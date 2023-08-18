import { Link } from "react-router-dom";
import  Menu  from "./Menu/Menu"
import './Navbar.css'
import Menulist from "./Menu/Menulist";
import { useEffect, useState } from "react";



const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1400);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <header className="header">
            <div className="header_container">
                <h2 className="title">
                    <Link className="title-content" to={'/'}>
                        <img className="img-logo" src='../../../public/20230814_105315_0000.png' alt="" />
                    </Link> 
                </h2>

                {isMobile ? <Menu /> : <Menulist />}

            </div>
        </header>
    );
}

export default Navbar;