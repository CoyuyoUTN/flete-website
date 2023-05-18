import * as React from "react";
import "../Styles/main.css"
import { Col, Container, Row } from "react-bootstrap";




const Main = () =>{
    return (
<Container fluid className="componente" id="Nosotros">
   <Col className="wow animate__animated animate__fadeInDown">
    <Row>
        <h2 className="titulo">Nosotros</h2>
    </Row>
    <Row className="descripcion">
    <p style={{  wordBreak: 'break-word' }}>"En Fletes Tio Yuyo nos especializamos en brindar soluciones de traslado de productos para pequeñas 
    empresas y particulares. Nos encargamos de hacer llegar tus productos a su destino de manera rápida, segura y eficiente,
        cuidando cada detalle del proceso. Ofrecemos un servicio personalizado, adaptándonos a las necesidades de
        cada cliente y garantizando la satisfacción total en cada traslado. Nos comprometemos a ofrecer un servicio de calidad y confianza, 
        siempre pensando en la tranquilidad y comodidad de nuestros clientes."</p>
    </Row>
 </Col>
</Container>
 )
}


export default Main;