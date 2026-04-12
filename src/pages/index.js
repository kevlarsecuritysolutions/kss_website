import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import EoM from "../components/EoM";
import Clients from "../components/Clients";
import NewClientsBar from "../components/NewClientsBar";

const Home = () => {
  return (
    <Layout>
      <SEO title="Kevlar Security Solutions Tasmania | Security Patrols & Systems" description="Protecting 3000+ Tasmanian sites with expert patrols, alarms, guards and technical security for businesses and government. Free assessment available." slug="/" />
      <HeroSection/>
      <NewClientsBar/>
      <Services />
      <EoM />
      <Clients/>
    </Layout>
  );
};

export default Home;
