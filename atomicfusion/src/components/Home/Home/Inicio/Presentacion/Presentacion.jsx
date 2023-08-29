import './Presentacion.css'


const Presentacion = () => {
    return (
        <section
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="home"
        >
            <div className="container-titulo">
                <h1 className="title">Diseño de Páginas Web</h1>
                <h2 className="subtitulo">
                    Si realmente deseas tener tu sitio en Internet
                    <br />
                    nuestra empresa es experta en la creación y mantenimiento de páginas web de alto impacto.
                </h2>
                <div className="img" />
            </div>
        </section>
    );
}

export default Presentacion;