import Inicio from "./Home/Inicio/Inicio";
import Presentacion from "./Home/Inicio/Presentacion/Presentacion";
import './Home.css'
import Servicios from "./Home/Servicios/Servicios";
import Trabajo from "./Home/Trabajo/Trabajo";
import Options from "./Home/Options/Options";



const Home = () => {
    return (
        <section className="seccion-home">
            <Presentacion />
            <Inicio />
            <Trabajo />
            <Servicios />
            <Options />
        </section>
    );
}

export default Home;