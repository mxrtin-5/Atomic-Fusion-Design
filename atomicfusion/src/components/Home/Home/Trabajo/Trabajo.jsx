import { Link } from 'react-router-dom';
import './Trabajo.css'


const Trabajo = () => {
    return (
        <section className="section-trabajo">
            <div className="container-trabajo">
                <h2
                    data-aos="zoom-out-down"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    className="h2-trabajo"
                >
                    Nuestro Trabajo y Servicios
                </h2>
                <p
                    data-aos="zoom-out-down"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    className="p-trabajo"
                >
                    Transformamos ideas en proyectos web a medida. Analizamos tus necesidades y creamos soluciones únicas y adaptadas. Nuestro enfoque abarca usabilidad, SEO, diseño a la vanguardia y compatibilidad con múltiples dispositivos.
                </p>

                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="trabajo-container-cajas"
                >
                    <Link to={'/web-hosting'} className="link-container">
                        <div className="caja-servicios">
                            <p>Servicio de Hosting Web</p>
                        </div>
                    </Link>

                    <Link to={'/web-design'} className="link-container">
                        <div className="caja-servicios">
                            <p>Diseño de Sitios Web</p>
                        </div>
                    </Link>

                    <Link to={'/mantenimiento'} className="link-container">
                        <div className="caja-servicios">
                            <p>Mantenimiento Web</p>
                        </div>
                    </Link>

                    <Link to={'/posicionamiento'} className="link-container">
                        <div className="caja-servicios">
                            <p>Posicionamiento en Buscadores</p>
                        </div>
                    </Link>

                    <Link to={'/autoadministrable'} className="link-container">
                        <div className="caja-servicios">
                            <p>Webs Autoadministrables</p>
                        </div>
                    </Link>

                    <Link to={'/newsletter'} className="link-container">
                        <div className="caja-servicios">
                            <p>Newsletters y Community Manager</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Trabajo;