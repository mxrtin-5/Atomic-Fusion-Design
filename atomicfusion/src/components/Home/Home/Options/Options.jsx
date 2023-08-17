import { MdWorkOutline } from 'react-icons/md'
import { AiFillCreditCard } from 'react-icons/ai'
import { AiOutlineShop } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import './Options.css'

const Options = () => {
    return (
        <section className='section-options'>
            <div className='div-container-opciones'>
                <div><MdWorkOutline /> <h3>LANDING PAGE</h3> <p>Una página web simple, intuitiva con una interfaz de usuario atractiva</p> </div>
                <div><AiFillCreditCard /> <h3>PÁGINAS WEB ECONÓMICAS</h3> <p>Páginas web responsive simples, mayormente utilizadas como presentaciones.</p></div>
                <div><AiOutlineShop /> <h3>PÁGINAS WEB E-COMMERCE</h3> <p>Páginas web que permitirán vender tus productos a una escala global.</p></div>
                <div><BsPerson /> <h3>PÁGINAS WEB PERSONALIZADAS</h3> <p>Desarrollaremos una web que cumplan con todas las necesidades que nos expreses.</p></div>
            </div>
        </section>
    );
}

export default Options;