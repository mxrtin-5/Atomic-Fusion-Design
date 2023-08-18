import { useState } from 'react';
import Menulist from './Menulist'
import './Menu.css'


const Menu = ({ showMenu, setShowMenu}) => {


    const handleToggle = () => {
        setShowMenu(!showMenu);
    }


    return (
        <div>
            <div className={showMenu ? 'menu' : 'menu-active'}>
                <div className={showMenu ? 'menulist menulist-active' : 'menulist'}>
                    <Menulist close={handleToggle} />
                </div>
            </div>

            
        </div>

    );
}

export default Menu;