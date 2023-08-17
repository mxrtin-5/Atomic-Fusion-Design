import './WebDesign.css'


const WebDesign = () => {
    return (
        <section>
            <div className="plan-card">
                <h3>Wordpress o React</h3>
                <p>Ofrecemos servicios de creacion de paginas web, con Wordpress y con React</p>
                <ul>
                    <li>Creación de diseño web único y atractivo.</li>
                    <li>Optimización para una experiencia de usuario excepcional.</li>
                    <li>Integración de contenido multimedia y gráficos.</li>
                    <li>Responsive design para adaptarse a diferentes dispositivos.</li>
                    <li>Soporte técnico para resolver cualquier problema.</li>
                </ul>
            </div>

            <div className='wvsr'>
                <div className='wordpress'>
                    <h2>Wordpress</h2>
                    <h5>Ventajas</h5>
                    <p>Facilidad de uso: WordPress es conocido por su interfaz intuitiva y amigable que permite a usuarios con poca experiencia técnica crear y administrar sitios web fácilmente.</p>
                    <p>Gran comunidad y soporte: Debido a su popularidad, WordPress cuenta con una amplia comunidad de usuarios y desarrolladores, lo que significa que hay una gran cantidad de recursos, plugins y temas disponibles, así como soporte a través de foros y comunidades en línea.</p>
                    <p>Rápida implementación: Puedes crear un sitio funcional con WordPress en poco tiempo, lo que lo hace ideal para proyectos más sencillos o sitios web informativos.</p>
                    <p>Amplia gama de plugins y temas: Hay una gran variedad de plugins y temas disponibles para WordPress, lo que facilita la personalización y la adición de características específicas al sitio.</p>
                    <p>SEO amigable: WordPress tiene plugins populares de SEO que pueden ayudar a optimizar el sitio para los motores de búsqueda, lo que puede ser beneficioso para el tráfico orgánico.</p>
                    <p>Costo efectivo: En general, el costo de desarrollo y mantenimiento de un sitio en WordPress puede ser más bajo en comparación con soluciones más personalizadas.</p>

                    <h5>Desventajas</h5>
                    <p>Limitaciones de personalización: Aunque los temas y plugins ofrecen personalización, WordPress puede tener limitaciones en la creación de diseños y funciones altamente personalizados.</p>
                    <p>Rendimiento: En sitios altamente personalizados o con muchos plugins, el rendimiento puede verse afectado, lo que podría ralentizar la velocidad de carga del sitio.</p>
                    <p>Seguridad: Debido a su popularidad, WordPress puede ser un objetivo para ataques de seguridad si no se mantienen actualizados regularmente y no se toman medidas de seguridad adicionales.</p>
                </div>

                <div className='react'>
                    <h2>React</h2>
                    <h5>Ventajas</h5>
                    <p>Interfaz de usuario rica y dinámica: React es ideal para crear interfaces de usuario interactivas y dinámicas, lo que lo hace perfecto para aplicaciones web modernas.</p>
                    <p>Componentización: React utiliza componentes reutilizables, lo que facilita la creación, el mantenimiento y la escalabilidad de aplicaciones más grandes.</p>
                    <p>Rendimiento: React utiliza el concepto de "virtual DOM", lo que puede mejorar el rendimiento y la velocidad de carga de la aplicación al minimizar las actualizaciones en el DOM real.</p>
                    <p>Flexibilidad: React no está limitado a la creación de sitios web estáticos; también es ampliamente utilizado en el desarrollo de aplicaciones web y móviles.</p>
                    <p>Enfoque moderno: Si el cliente busca una solución más actualizada y moderna para su sitio web, React es una opción preferida debido a su popularidad y adopción en la industria.</p>

                    <h5>Desventajas</h5>
                    <p>Curva de aprendizaje: Para los principiantes, la curva de aprendizaje de React puede ser empinada, especialmente si no están familiarizados con conceptos como el JSX y el estado.</p>
                    <p>Complejidad: A medida que las aplicaciones crecen, la administración del estado y la gestión de componentes pueden volverse más complejas.</p>
                    <p>Requiere más desarrollo personalizado: A diferencia de WordPress, en React generalmente necesitas desarrollar más componentes y características desde cero, lo que puede llevar más tiempo.</p>

                </div>
            </div>
        </section>

    );
};

export default WebDesign