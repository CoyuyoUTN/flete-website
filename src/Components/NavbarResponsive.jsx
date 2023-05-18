import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsWhatsapp } from "react-icons/bs";
import "../Styles/navbar.css"

const NavbarResponsive =()=> {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 fixed-top" >
          <Container fluid>
            <Navbar.Brand href="#" id="logo">Mini Fletes Tio Yuyo</Navbar.Brand>
           <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="nav-escondido-logo">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Mini Fletes Tio Yuyo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="nav-escondido-links">
                <Nav className="justify-content-center flex-grow-1 pe-3 ">
                  <Nav.Link className="links" href="#Nosotros">Inicio</Nav.Link>
                  <Nav.Link className="links" href="#Nosotros">Nosotros</Nav.Link>
                  <Nav.Link className="links" href="#services">Nuestros servicios</Nav.Link>
                  <Nav.Link className="links" href="#precio">Pida presupuesto</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          <a
        href="https://api.whatsapp.com/send?phone=5492235044992"
        id="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <BsWhatsapp id="whatsapp-icon" />
      </a>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarResponsive;
