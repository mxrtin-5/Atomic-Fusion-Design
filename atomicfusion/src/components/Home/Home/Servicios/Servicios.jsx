import { Link } from 'react-router-dom'
import './Servicios.css'



const Servicios = () => {
    return (
        <section className="section-servicios">
            <div>
                <div className="servicio-box">
                    <h2 className="titulo-servicio">Plan PRO</h2>
                    <h5 className="precio-servicio">ARS $89.990</h5>
                    <p className="pago-servicio">Pago único</p>
                    <div className="descripcion-servicio">
                        <p>Sitio Seguro con Certificado SSL</p>
                        <p>Página Web de 8 Secciones</p>
                        <p>Optimización para Google AdWords</p>
                        <p>Banners Animados</p>
                        <p>Mapa Interactivo</p>
                        <p>Diseño Adaptable a Dispositivos</p>
                        <p>Mails Ilimitados</p>
                        <p>45 Imágenes</p>
                        <p>Alta en Google</p>
                        <p>Formulario de Contacto</p>
                        <p>Enlace a Redes Sociales</p>
                    </div>
                    <button className="solicitud-btn">
                        <Link to="/plan-pro" className="link-solicitud">
                            Solicitar Plan PRO
                        </Link>
                    </button>
                </div>
                <div className="servicio-box">
                    <h2 className="titulo-servicio">Plan Premium</h2>
                    <h5 className="precio-servicio">ARS $109.990</h5>
                    <p className="pago-servicio">Pago único</p>
                    <div className="descripcion-servicio">
                        <p>Sitio Seguro con Certificado SSL</p>
                        <p>Tienda Online o Institucional</p>
                        <p>Página Web de 15 Secciones</p>
                        <p>Carrito de Compras</p>
                        <p>Cobros en Línea</p>
                        <p>Banners Animados</p>
                        <p>Video de Fondo</p>
                        <p>Mapa Interactivo</p>
                        <p>Diseño Adaptable a Dispositivos</p>
                        <p>Mails Ilimitados</p>
                        <p>150 Imágenes</p>
                        <p>Alta en Google</p>
                        <p>Formulario de Contacto</p>
                        <p>Enlace a Redes Sociales</p>
                    </div>
                    <button className="solicitud-btn">
                        <Link to="/plan-premium" className="link-solicitud">
                            Solicitar Plan Premium
                        </Link>
                    </button>
                </div>
                <div className="servicio-box">
                    <h2 className="titulo-servicio">Plan Empresas</h2>
                    <h5 className="precio-servicio">ARS $129.990</h5>
                    <p className="pago-servicio">Pago único</p>
                    <div className="descripcion-servicio">
                        <p>Sitio Seguro con Certificado SSL</p>
                        <p>Tienda Online o Sitio Corporativo</p>
                        <p>Página Web de 25 Secciones</p>
                        <p>Dominio .com</p>
                        <p>Videos Multimedia</p>
                        <p>Carrito de Compras</p>
                        <p>Cobros en Línea</p>
                        <p>Diseño Adaptable a Dispositivos</p>
                        <p>Mails Ilimitados</p>
                        <p>Sin Límite de Productos</p>
                        <p>Banners Animados</p>
                        <p>Video de Fondo</p>
                        <p>Mapa Interactivo</p>
                        <p>Alta en Google</p>
                        <p>Formulario de Contacto</p>
                        <p>Enlace a Redes Sociales</p>
                    </div>
                    <button className="solicitud-btn">
                        <Link to="/plan-empresas" className="link-solicitud">
                            Solicitar Plan Empresas
                        </Link>{" "}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Servicios;