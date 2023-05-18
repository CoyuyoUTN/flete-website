import * as React from "react";
import "../Styles/tarjeta.css";
import Galeria from "./Galeria";


const Tarjeta = () =>{
    return(
        <div id="services" >        
        <div className="body-cards">
        <ol>
        <li className="wow animate__animated animate__rotateIn" >
            <div className="icon"><i class="fa-sharp fa-solid fa-truck-fast"></i></div>
            <div className="title">Traslados</div>
            <div className="descr">Trasladamos todo tipo de objetos.</div>
        </li>
        <li className="wow animate__animated animate__rotateIn"  >
            <div className="icon"><i class="fa-sharp fa-solid fa-people-carry-box"></i></div>
            <div className="title">Pequeñas mudanzas</div>
            <div className="descr">Realizamos pequeñas mudanzas.</div>
        </li>
        <li className="wow animate__animated animate__rotateIn"  >
            <div className="icon"><i class="fa-solid fa-truck"></i></div>
            <div className="title">Repartos</div>
            <div className="descr">Hacemos repartos en toda la ciudad.</div>
        </li>
        
    </ol>
    </div>
    <Galeria />
    <p className="p-gallery">Tambien realizamos traslados de corta y larga distancia - Consulte presupuesto.</p>
        </div>)
}

export default Tarjeta;