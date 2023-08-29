import { Link } from 'react-router-dom';
import './Trabajo.css'


const Trabajo = () => {
    return (
        <section className="section-trabajo">
            <div className="container-trabajo">
                <h2 data-aos="zoom-out-down"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false" className='h2-trabajo'>Nuestro trabajo</h2>
                <p data-aos="zoom-out-down"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false" className='p-trabajo'>Realizamos proyectos web a medida, fruto de un exhaustivo análisis previo de necesidades. Sin plantillas predefinidas y aportando todos nuestros conocimientos en cuanto a usabilidad, posicionamiento orgánico (SEO), tendencias en diseño de interfaces gráficos, adaptabilidad contenidos a distintos dispositivos (PC, tablets, smartphones, …) con diseños líquidos (responsive).</p>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='trabajo-container-cajas'>
                    <Link to={'/web-hosting'} className='link-container'>
                        <div className="caja-servicios">
                            <p>WEB HOSTING</p>
                        </div>
                    </Link>

                    <Link to={'/web-design'} className='link-container'>
                        <div className="caja-servicios">
                            <p>DISEÑO DE SITIOS WEB</p>
                        </div>
                    </Link>

                    <Link to={'/mantenimiento'} className='link-container'>
                        <div className="caja-servicios">
                            <p>MANTENIMIENTO WEB</p>
                        </div>
                    </Link>

                    <Link to={'/posicionamiento'} className='link-container'>
                        <div className="caja-servicios">
                            <p>POSICIONAMIENTO EN BUSCADORES</p>
                        </div>
                    </Link>

                    <Link to={'/autoadministrable'} className='link-container'>
                        <div className="caja-servicios">
                            <p>WEBS AUTOADMINISTRABLES</p>
                        </div>
                    </Link>

                    <Link to={'/newsletter'} className='link-container'>
                        <div className="caja-servicios">
                            <p>NEWSLETTERS Y COMMUNITY MANAGER</p>
                        </div>
                    </Link>

                </div>


            </div>
        </section>
    );
}

export default Trabajo;