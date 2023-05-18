import * as React from "react";
import "../Styles/galeria.css"
import img1 from "../images/nosotros.jpeg"
import img2 from "../images/mejor.jpg"
import img3 from "../images/reparto.jpeg"


const Galeria = () =>{
    return (
   
    <div className="galeria">
    <div className="item">
      <img className="firstimg" src={img1} alt="Imagen 1"/>
      <div className="overlay">
        <h3>TRASLADOS</h3>
       <p>Trasladamos todo tipo de cosas.
        Trabajamos por Mar del Plata y alrededores.
       </p>
      </div>
    </div>
    <div className="item">
      <img className="secondimg" src={img2} alt="Imagen 2"/>
      <div className="overlay">
        <h3>PEQUEÑAS MUDANZAS</h3>
        <p>Tambien realizamos pequeñas mudanzas, consulte cuantas cosas desea trasladar y el tamaño y le pasamos un presupuesto sin problema.</p>
       
      </div>
    </div>
    <div className="item">
      <img className="thirstimg" src={img3} alt="Imagen 3"/>
      <div className="overlay">
        <h3>REPARTOS</h3>
       <p>Realizamos repartos de todo tipo, los repartos solo son dentro de Mar del plata.
        Consulte nuestros precios.
       </p>
      </div>
    </div>
  </div>
  )
}

export default Galeria