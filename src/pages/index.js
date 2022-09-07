import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import HeroAlt from "../components/HeroAlt";
import ContactSection from "../components/ContactSection";
import SEO from "../components/Seo";
const Home = () => {
  return (
    <Layout>
      <SEO title="Protection at every Angle" slug="/" />
      {/* <Hero/> */}
      <HeroAlt />
      {/* <About/> */}
      <Services />
    </Layout>
  );
};

export default Home;
