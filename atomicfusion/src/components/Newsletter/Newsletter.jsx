import './Newsletter.css'



const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="div-newsletter">
                <h2>Únete a Nuestro Newsletter</h2>
                <p>Mantente actualizado con las últimas noticias, consejos y novedades de AtomicFusionDesign. Suscríbete a nuestro boletín informativo y únete a nuestra comunidad en línea.</p>

                <h3>Por qué Suscribirse</h3>
                <p>Nuestro boletín informativo está diseñado para brindarte contenido valioso directamente en tu bandeja de entrada. Al suscribirte, disfrutarás de los siguientes beneficios:</p>
                <ul>
                    <li><strong>Consejos y Tendencias:</strong> Mantente al día con las últimas tendencias en diseño web, desarrollo, SEO y más.</li>
                    <li><strong>Recursos Gratuitos:</strong> Acceso exclusivo a guías, plantillas y recursos que te ayudarán a mejorar tu presencia en línea.</li>
                    <li><strong>Ofertas Especiales:</strong> Sé el primero en enterarte de promociones y descuentos en nuestros servicios.</li>
                    <li><strong>Actualizaciones de la Empresa:</strong> Conoce los logros, proyectos y eventos más recientes de AtomicFusionDesign.</li>
                </ul>

                <h3>Cómo Suscribirse</h3>
                <p>¡Unirse a nuestro boletín es rápido y sencillo! Simplemente ingresa tu dirección de correo electrónico en el formulario de suscripción a continuación y estarás listo para recibir contenido de calidad directamente en tu bandeja de entrada.</p>

                {/* Formulario de Suscripción  */}
                <form action="url_de_tu_proveedor_de_email" method="post">
                    <input type="email" name="email" placeholder="Tu dirección de correo electrónico" required />
                    <button type="submit">Suscribirse</button>
                </form>

                <p>No te pierdas la oportunidad de estar conectado con AtomicFusionDesign y aprender más sobre el mundo digital. ¡Suscríbete hoy mismo!</p>

                <p><strong>Nota:</strong> Respetamos tu privacidad. Tu dirección de correo electrónico será utilizada únicamente para enviar nuestro boletín informativo y no será compartida con terceros.</p>
            </div>
        </section>

    );
}

export default Newsletter;