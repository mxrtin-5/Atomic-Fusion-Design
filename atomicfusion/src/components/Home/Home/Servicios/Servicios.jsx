import { Link } from 'react-router-dom'
import './Servicios.css'



const Servicios = () => {
    return (
        <section className="section-servicios">
            <div>
                <div className="servicio-box">
                    <h2 className='titulo-servicio'>PRO</h2>
                    <h5 className='precio-servicio'>ARS $89.990</h5>
                    <p className='pago-servicio'>Pago unico</p>
                    <div className='descripcion-servicio'>
                        <p>SITIO SEGURO - CERTIFICADO SSL</p>
                        <p>PÁGINA WEB DE 8 SECCIONES</p>
                        <p>OPTIMIZADO GOOGLE ADWORDS</p>
                        <p>BANNERS ANIMADOS</p>
                        <p>MAPA INTERACTIVO</p>
                        <p>ADAPTABLE A DISPOSITIVOS</p>
                        <p>MAILS ILIMITADOS</p>
                        <p>45 IMAGENES</p>
                        <p>ALTA EN GOOGLE</p>
                        <p>FORMULARIO DE CONTACTO</p>
                        <p>LINK A REDES SOCIALES</p>
                    </div>

                    <button className='solicitud-btn'><Link className='link-solicitud'>SOLICITAR PLAN PRO</Link></button>
                </div>
                <div className="servicio-box">
                    <h2 className='titulo-servicio'>PREMIUM</h2>
                    <h5 className='precio-servicio'>ARS $109.990</h5>
                    <p className='pago-servicio'>Pago unico</p>
                    <div className='descripcion-servicio'>
                        <p>SITIO SEGURO - CERTIFICADO SSL</p>
                        <p>TIENDA ONLINE O INSTITUCIONAL</p>
                        <p>PÁGINA WEB DE 15 SECCIONES</p>
                        <p>CARRITO DE COMPRAS</p>
                        <p>COBROS ONLINE</p>
                        <p>HASTA 20 PRODUCTOS</p>
                        <p>BANNERS ANIMADOS</p>
                        <p>VIDEO DE FONDO</p>
                        <p>MAPA INTERACTIVO</p>
                        <p>ADAPTABLE A DISPOSITIVOS</p>
                        <p>MAILS ILIMITADOS</p>
                        <p>150 IMAGENES</p>
                        <p>ALTA EN GOOGLE</p>
                        <p>FORMULARIO DE CONTACTO</p>
                        <p>LINK A REDES SOCIALES</p>
                    </div>

                    <button className='solicitud-btn'><Link className='link-solicitud'>SOLICITAR PLAN PREMIUM</Link></button>
                </div>
                <div className="servicio-box">
                    <h2 className='titulo-servicio'>EMPRESAS</h2>
                    <h5 className='precio-servicio'>ARS $129.990</h5>
                    <p className='pago-servicio'>Pago unico</p>
                    <div className='descripcion-servicio'>
                        <p>SISTEMA AUTOADMINISTRABLE</p>
                        <p>INSTRUCTIVO DE USO</p>
                        <p>SITIO SEGURO - CERTIFICADO SSL</p>
                        <p>TIENDA ONLINE O SITIO CORPORATIVO</p>
                        <p>PÁGINA WEB DE 25 SECCIONES</p>
                        <p>CHAT ONLINE</p>
                        <p>DOMINIO.COM</p>
                        <p>VIDEOS MULTIMEDIA</p>
                        <p>CARRITO DE COMPRAS</p>
                        <p>COBROS ONLINE</p>
                        <p>SIN LIMITE DE PRODUCTOS</p>
                        <p>BANNERS ANIMADOS</p>
                        <p>VIDEO DE FONDO</p>
                        <p>MAPA INTERACTIVO</p>
                        <p>ADAPTABLE A DISPOSITIVOS</p>
                        <p>MAILS ILIMITADOS</p>
                        <p>250 IMAGENES</p>
                        <p>ALTA EN GOOGLE</p>
                        <p>FORMULARIO DE CONTACTO</p>
                        <p>LINK A REDES SOCIALES</p>
                    </div>

                    <button className='solicitud-btn'><Link className='link-solicitud'>SOLICITAR PLAN CORP EMPRESAS</Link> </button>
                </div>
            </div>

        </section>
    );
}

export default Servicios;