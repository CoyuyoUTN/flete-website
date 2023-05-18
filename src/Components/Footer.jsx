import * as React from "react";
import "../Styles/footer.css"
import { TfiLocationPin } from "react-icons/tfi";
import { BsCalendarCheck } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../images/map.jpg"
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer class="footer">
      <div className="footerUbication-container">
        <div className="ubication-container">
          <p>
            <TfiLocationPin /> Ubicación
          </p>
          <a href="https://www.google.com/maps/place/Mini+Fletes+T%C3%ADo+Yuyo/@-38.0227548,-57.5299651,15z/data=!4m2!3m1!1s0x0:0xa9710f82dbe56a1c?sa=X&ved=2ahUKEwj2ho6os_D-AhUmq5UCHYjgAAQQ_BJ6BAhMEAk">
            <img src={img} alt="" />
          </a>
        </div>
        <div className="horary-container">
          <p>
            <BsCalendarCheck /> Horarios
          </p>
          <Container>
          <Row className="justify-content-md-center">
            <Col>
              Lunes a Sabado 
            
            </Col>
            <Col>  8:00-19:00 </Col>
         
          </Row>
          <Row className="justify-content-md-center">
              <Col>
                Domingo
              </Col>
              <Col>
                13:00-19:00
              </Col>
          </Row>
   
           
           
          </Container>
        </div>
      </div>
      <div className="dataCommerce-footer">
        <p>
          <BsWhatsapp /> Tel: 223-5044992
        </p>
      </div>
    </footer>
  );
};

export default Footer;
