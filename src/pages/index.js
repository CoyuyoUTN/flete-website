import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarResponsive from "../Components/NavbarResponsive";
import Main from "../Components/Main";
import Tarjeta from "../Components/Tarjeta";
import ContactBanner from "../Components/ContactBanner";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import "../Styles/general.css";
import "animate.css";

const IndexPage = () => {
  return (
    <div className="container-general">
      <NavbarResponsive />
      <Main />
      <Tarjeta />
      <ContactBanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default IndexPage;
