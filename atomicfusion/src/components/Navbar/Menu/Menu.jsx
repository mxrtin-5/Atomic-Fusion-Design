import { useState } from 'react';
import  Menulist  from './Menulist'
import '../Navbar.css'
import './Menu.css'


const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggle = () => {
        setShowMenu(!showMenu);
    }

    const handleClose = () => {
        setShowMenu(false);
    }

    return ( 
        <div className={showMenu ? 'menu menu-active' : 'menu'}>
            <div className={showMenu ? 'menulist menulist-active' : 'menulist'}>
                <Menulist close={handleClose} />
            </div>
        </div>
    );
}

export default Menu;