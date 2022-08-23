import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navigation from "./Navigation";
import BackToTopBtn from "./BackToTopBtn";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation/>
      <main>{children}</main>
      <BackToTopBtn/>
      <Footer />
    </>
  );
};

export default Layout;
