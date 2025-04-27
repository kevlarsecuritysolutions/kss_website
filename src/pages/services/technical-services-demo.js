import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import HeroAngle from "../../assets/svg/hero-angle2";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import { useForm } from "@formspree/react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TechnicalServices = () => {
  const [state, handleSubmit] = useForm("mnqynzap");
  const [agreed, setAgreed] = useState(false);

  return (
    <Layout>
      <SEO title="Technical Services" slug="/services/technical-services" />

      <section className="relative py-12 xl:pt-32 xl:pb-0 shadow-xl overflow-hidden">
        <div className="hidden xl:block absolute -bottom-48 left-12 z-10 w-[2500px] h-auto opacity-50">
          {/* <HeroAngle className="w-full h-full" /> */}
        </div>
        <div className="absolute h-[1500px] w-[1500px] top-0 -left-[500px]  bg-gradient-to-b from-[#001a2f40] to-black/60 z-[10] rotate-[45deg]">
          h
        </div>
        <div className="absolute inset-0 xl:-bottom-36 xl:top-auto">
          <StaticImage
            className="!h-full !w-full !object-cover"
            src="https://images.ctfassets.net/lfrbwr0lmnkj/5qUBREtADDhinVjjNYgEW/5ef4274ff9149c1198e5cadd4545e583/kss_website2022-113.jpg"
            alt="Kevlar Security Solutions"
          />
          <div className="absolute inset-0 bg-black/50 lg:bg-black/0 lg:bg-gradient-to-tr lg:from-black/60  lg:to-black/20 mix-blend-multiply" />
        </div>
        <div className="max-w-screen-2xl px-4 mx-auto relative pt-12 pb-6 lg:pt-36 lg:pb-24 z-[20]">
          <div className="hidden sm:mb-10 sm:flex">
            <div className="relative -mb-4 rounded-none px-3 py-1 text-sm/6 text-gray-200 ring-1 ring-gray-100/40 hover:ring-gray-100/20">
              Trusted by businesses, government and individuals across
              Tasmania{" "}
            </div>
          </div>
          <h1 className=" text-4xl xl:text-5xl font-bold tracking-tight">
            <span className="block text-white uppercase xl:max-w-xl">
              Expert Technical Security Solutions
            </span>
          </h1>

          <p className=" mt-6 max-w-lg  text-xl text-white sm:max-w-xl">
            <strong>Kevlar Security Solutions</strong> offers innovative,
            tailored security systems incorporating the latest technology and
            best-practice design, delivery, and maintenance services.
          </p>
          <div className="flex flex-col lg:flex-row mt-12">
            <AnchorLink
              to="/services/technical-services-demo/#services"
              className="flex gap-2 items-center bg-transparent hover:bg-white border-white border-2 transition text-white hover:text-black text-sm font-semibold py-3 px-6 lg:px-10"
            >
              {" "}
              Our Technical Services <ArrowRight className="h-5 w-5" />
            </AnchorLink>
            <Link
              to="/services/technical-services-demo/#contact"
              className="flex gap-2 items-center bg-transparent transition text-white text-sm font-semibold py-6 lg:py-3 lg:px-10 hover:underline"
            >
              {" "}
              Contact a Security Professional <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
        {/* <div className="absolute bottom-6 left-4  lg:left-auto lg:right-60 w-3 h-3 bg-white/40 rounded-full"></div>
        <div className="absolute bottom-6 left-4  lg:left-auto lg:right-60 w-3 h-3 bg-white/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-6 left-10  lg:left-auto lg:right-52 w-3 h-3 bg-white/30 hover:bg-white/40 rounded-full"></div>
        <div className="absolute bottom-6 left-16  lg:left-auto lg:right-44 w-3 h-3 bg-white/30 hover:bg-white/40 rounded-full"></div> */}
      </section>

      <main className="bg-gradient-to-bl from-[#002034] to-black">
        {/* SERVICES OVERVIEW SECTION */}
        <div id="services" className="max-w-7xl mx-auto py-24 px-6">
          <h2 className="uppercase mx-auto text-center text-white font-bold text-3xl pb-8">
            Comprehensive Technical Security Services
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
            We provide end-to-end security technology solutions designed to
            protect what matters most to you, using the latest technological
            advancements and best-practice system design.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-blue-900/30 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Alarm Systems & Monitoring
              </h3>
              <p className="text-gray-400">
                Advanced security alarms with 24/7 monitoring from our ASIAL
                accredited A Grade control room.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-blue-900/30 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                CCTV Surveillance
              </h3>
              <p className="text-gray-400">
                State-of-the-art CCTV systems with remote viewing and AI
                capabilities for comprehensive monitoring.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-blue-900/30 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Electronic Access Control
              </h3>
              <p className="text-gray-400">
                Secure entry management with time-based restrictions, audit
                reports, and biometric options.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-blue-900/30 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Site Cameras & CCTV Poles
              </h3>
              <p className="text-gray-400">
                Solar-powered and wireless solutions for remote sites, events,
                and construction projects.
              </p>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div className="bg-[#001525] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="uppercase mx-auto text-center text-white font-bold text-3xl pb-8">
              Why Choose Kevlar Security Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start p-6 bg-gradient-to-br from-blue-900/30 to-transparent rounded-lg">
                <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                  <Checkmark className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-medium mb-2">
                    Brand Expertise
                  </h3>
                  <p className="text-gray-400">
                    Experience with all major security brands and systems
                    including Hills, Bosch, Paradox, Honeywell, Axis, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-gradient-to-br from-blue-900/30 to-transparent rounded-lg">
                <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                  <Checkmark className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-medium mb-2">
                    Accredited Monitoring
                  </h3>
                  <p className="text-gray-400">
                    ASIAL accredited A Grade control room with the latest
                    monitoring technology and dual redundancy power systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-gradient-to-br from-blue-900/30 to-transparent rounded-lg">
                <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                  <Checkmark className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-medium mb-2">
                    AI Integration
                  </h3>
                  <p className="text-gray-400">
                    Advanced artificial intelligence capabilities for identity
                    recognition, vehicle detection, and smart security analysis.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-gradient-to-br from-blue-900/30 to-transparent rounded-lg">
                <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                  <Checkmark className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-medium mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-gray-400">
                    Tailored security systems designed specifically for your
                    home or business needs and environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-gradient-to-br from-blue-900/30 to-transparent rounded-lg">
                <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                  <Checkmark className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-medium mb-2">
                    Local Expertise
                  </h3>
                  <p className="text-gray-400">
                    Tasmania-based team providing fast response times and
                    understanding of local security challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-gradient-to-br from-blue-900/30 to-transparent rounded-lg">
                <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                  <Checkmark className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-medium mb-2">
                    Seamless Integration
                  </h3>
                  <p className="text-gray-400">
                    Ability to integrate with and upgrade your existing security
                    infrastructure for optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ALARM SYSTEMS SECTION */}
        <div id="services" className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 lg:pt-24 pb-24">
            <div>
              <h2 className="text-3xl uppercase font-bold text-white mb-6">
                Advanced Alarm Systems & 24/7 Monitoring
              </h2>
              <p className="text-gray-300 mb-6">
                Security Alarm systems are an essential tool for detecting and
                preventing criminal activity in both commercial and residential
                properties.
              </p>
              <p className="text-gray-300 mb-6">
                Our experienced security technicians have studied, installed,
                used and reviewed the latest updates for all major brands of
                both commercial and residential alarm systems, ensuring that we
                can recommend the best possible alarm system for every one of
                our clients.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    Expertise with Hills, Bosch, Paradox and more
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    24/7 monitoring via ASIAL accredited A Grade control room
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    Dual redundancy power failure protocol for continuous
                    protection
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    Custom reporting and image verification capabilities
                  </p>
                </div>
              </div>
              <AnchorLink
                to="/services/technical-services-demo/#contact"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white border-white border-2 transition text-white hover:text-black text-sm font-semibold py-3 px-6 "
              >
                {" "}
                Learn More About Our Alarm Solutions{" "}
                <ArrowRight className="h-5 w-5" />
              </AnchorLink>
            </div>
          </div>
          <div className="hidden lg:block relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/2OWoROBuRIIKwaU6iI0zEZ/db84de4add52f57194241377f0802125/KSS_websitereshoots_nov24-7.jpg"
              className="!object-cover !absolute !inset-0"
              alt="technical services"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/3BqPhuHBaN9ou5KlKAGk2k/5dbc1481b0aebd399c497a8d939d56c0/KSS_websitereshoots_nov24-46.jpg"
              className="!object-cover !absolute !inset-0"
              alt="technical services"
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl uppercase font-bold text-white mb-6">
                State-of-the-Art CCTV Surveillance
              </h2>
              <p className="text-gray-300 mb-6">
                CCTV systems are a powerful security tool, providing the
                opportunity for immediate assessment of on-site issues,
                accountability for staff, and a strong deterrent against
                unauthorised access.
              </p>
              <p className="text-gray-300 mb-6">
                Our security technicians have extensive knowledge and experience
                in working with a range of CCTV solutions, and can provide
                advice on the most appropriate CCTV options for homes or
                businesses by taking into account factors such as lighting,
                remote access needs, budget and integration options for existing
                security infrastructure.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    Systems from Honeywell, Axis, Hanwha Wisenet and more
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    Remote viewing via mobile devices and computers
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    Permanent and temporary solutions available
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    System upgrades, training and troubleshooting available
                  </p>
                </div>
              </div>
              <AnchorLink
                to="/services/technical-services-demo/#contact"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white border-white border-2 transition text-white hover:text-black text-sm font-semibold py-3 px-6 "
              >
                {" "}
                Explore CCTV Solutions <ArrowRight className="h-5 w-5" />
              </AnchorLink>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 lg:pt-24 pb-24">
            <div>
              <h2 className="text-3xl uppercase font-bold text-white mb-6">
                Secure Access Control Systems
              </h2>
              <p className="text-gray-300 mb-6">
                Access control systems are a critical component in any business
                security system, allowing businesses to manage entry and access
                permissions, and providing internal and external accountability
                and control for secure areas.
              </p>
              <p className="text-gray-300 mb-6">
                We have the expertise to install and maintain a range of access
                control systems, including from trusted brands such as Tecom,
                Integriti and Inception. The access control systems we install
                can include a variety of standard or add-on features customised
                to your needs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    Time-based access restrictions and permissions
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    Audit and muster reports for accountability
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    Biometric authentication and NFC technologies
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    Video intercom solutions for building entry
                  </p>
                </div>
              </div>
              <AnchorLink
                to="/services/technical-services-demo/#contact"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white border-white border-2 transition text-white hover:text-black text-sm font-semibold py-3 px-6 "
              >
                {" "}
                Discover Access Control Options{" "}
                <ArrowRight className="h-5 w-5" />
              </AnchorLink>
            </div>
          </div>
          <div className="hidden lg:block relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/9sF22iYVBY1tJqhLBlZww/5209e4273c32f1fc1a6234cc336b3ce4/KSS_websitereshoots_nov24-11.jpg"
              className="!object-cover !absolute !inset-0"
              alt="technical services"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/350p6I7PC8Py0JbODTqBK5/c64250aac446e857705dd01192cc32a9/KSS_websitereshoots_nov24-48.jpg"
              className="!object-cover !absolute !inset-0"
              alt="technical services"
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl uppercase font-bold text-white mb-6">
                Advanced Site Cameras & CCTV Poles
              </h2>
              <p className="text-gray-300 mb-6">
                Kevlar Security Solutions offers cutting-edge surveillance
                solutions tailored to various security needs. Our Site Cameras
                integrate with leading brands like Hikvision, Dahua, Axis,
                Hanwha (Wisenet), Avigilon, and Idis, ensuring top-tier
                performance and reliability.
              </p>
              <p className="text-gray-300 mb-6">
                Our solar/wireless security camera systems deliver 24/7
                visibility, reducing theft and crime risk. Ideal for events,
                construction sites, and temporary security needs with
                comprehensive coverage and easy relocation options.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    Remote viewing via mobile devices and computers
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    AI-powered analysis for people counting and traffic patterns
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    Facial recognition and vehicle registration detection
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1">
                    <Checkmark className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">
                    Solar-powered and wireless for maximum flexibility
                  </p>
                </div>
              </div>
              <AnchorLink
                to="/services/technical-services-demo/#contact"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white border-white border-2 transition text-white hover:text-black text-sm font-semibold py-3 px-6 "
              >
                {" "}
                Learn About Site Camera Solutions{" "}
                <ArrowRight className="h-5 w-5" />
              </AnchorLink>
            </div>
          </div>
        </div>

        {/* TESTIMONIALS SECTION */}
        <div className="max-w-7xl mx-auto py-24 px-6">
          <h2 className="uppercase text-4xl font-bold text-white text-center mb-16">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-transparent p-8 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Kevlar installed a comprehensive CCTV system for our retail
                business. The quality of the equipment and installation was
                excellent, and the team was professional throughout the process.
                We now feel much more secure."
              </p>
              <div className="text-white font-medium">
                - James Wilson, Business Owner
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-transparent p-8 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "The access control system Kevlar implemented has transformed
                how we manage our building security. Their technical knowledge
                is impressive, and they provided excellent training for our
                staff."
              </p>
              <div className="text-white font-medium">
                - Sarah Thompson, Property Manager
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-transparent p-8 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "We needed temporary security for our construction site, and
                Kevlar provided the perfect solar-powered camera solution. Setup
                was quick, and the mobile app made monitoring easy. Would
                definitely use them again."
              </p>
              <div className="text-white font-medium">
                - Michael Roberts, Construction Manager
              </div>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="bg-[#001525] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold uppercase text-white text-center mb-16">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-900/30 to-transparent p-6 rounded-lg">
                <h3 className="text-white text-xl font-medium mb-3">
                  How quickly can you install a new security system?
                </h3>
                <p className="text-gray-300">
                  Our installation timeframes vary depending on the complexity
                  of the system and our current schedule. For standard
                  installations, we can typically complete the work within 1-2
                  weeks from approval. For emergency situations, we stock common
                  alarm systems and components for rapid deployment.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-transparent p-6 rounded-lg">
                <h3 className="text-white text-xl font-medium mb-3">
                  Can you integrate with my existing security infrastructure?
                </h3>
                <p className="text-gray-300">
                  Yes, we specialise in integrating new security components with
                  existing systems. Our technicians are familiar with most major
                  brands and can develop solutions that enhance your current
                  setup while minimising replacement costs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-transparent p-6 rounded-lg">
                <h3 className="text-white text-xl font-medium mb-3">
                  What areas of Tasmania do you service?
                </h3>
                <p className="text-gray-300">
                  We provide our technical security services throughout all of
                  Tasmania, including Hobart, Launceston, Devonport, Burnie, and
                  surrounding areas. Our team is strategically located to ensure
                  timely service across the state.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-transparent p-6 rounded-lg">
                <h3 className="text-white text-xl font-medium mb-3">
                  How does your monitoring service work?
                </h3>
                <p className="text-gray-300">
                  Our monitoring service operates through an ASIAL accredited A
                  Grade control room, which is staffed 24/7. When an alarm is
                  triggered, the control room immediately assesses the
                  situation, verifies the alarm through image verification when
                  available, and follows your predetermined response protocol,
                  which may include contacting you, nominated keyholders, or
                  emergency services.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-transparent p-6 rounded-lg">
                <h3 className="text-white text-xl font-medium mb-3">
                  Do you offer maintenance plans?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer regular maintenance plans to ensure your
                  security systems continue to function optimally. These plans
                  typically include scheduled inspections, testing, software
                  updates, and priority response for any issues that may arise
                  in accordance with the relevant Australian standards.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-transparent p-6 rounded-lg">
                <h3 className="text-white text-xl font-medium mb-3">
                  How much does a security system typically cost?
                </h3>
                <p className="text-gray-300">
                  Security system costs vary widely depending on your specific
                  needs, property sise, and the level of security required. We
                  offer free site assessments and quotes to provide accurate
                  pricing based on your unique situation. We work with clients
                  to find solutions that meet both security needs and budget
                  constraints.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM SECTION */}
        <div id="contact" className="max-w-7xl mx-auto py-24 px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="uppercase text-4xl font-bold tracking-tight text-white ">
              Get in Touch
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Contact our technical security experts to discuss your security
              needs and receive a customised solution.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 max-w-4xl mx-auto"
          >
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-300"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-300"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-300"
              >
                Company
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organisation"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-300"
              >
                Phone number
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                  placeholder=""
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Brief description of your security needs
              </label>
              <div className="mt-1">
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? "bg-blue-500" : "bg-gray-700",
                      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900",
                    )}
                    name="agreed-terms"
                    value={agreed}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? "translate-x-5" : "translate-x-0",
                        "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-300">
                    By submitting this form, you agree to the terms outlined in
                    our{" "}
                    <Link
                      to="/privacy-policy"
                      target="blank"
                      className="font-medium text-blue-400 hover:text-blue-300 underline"
                    >
                      Privacy Policy.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              {state.submitting ? (
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-white transition text-white bg-transparent hover:bg-white hover:text-black text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900"
                  >
                    <svg
                      className="fill-white animate-spin mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z" />
                    </svg>{" "}
                    Submitting...
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    disabled={agreed === false}
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-white transition text-white bg-transparent hover:bg-white hover:text-black text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Talk to a Security Professional
                  </button>
                </div>
              )}
              {state.succeeded ? (
                <div className="w-full">
                  <div className="w-full mt-6 bg-gradient-to-r from-blue-900/50 to-transparent border border-blue-500/30 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Checkmark
                          className="h-5 w-5 text-blue-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-white">
                          Your submission has been received. We'll be in touch
                          shortly.
                        </p>
                      </div>
                      <div className="ml-auto pl-3">
                        <div className="-mx-1.5 -my-1.5">
                          <button
                            type="button"
                            onClick={() => window.location.reload(false)}
                            className="inline-flex p-1.5 text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
                          >
                            <span className="sr-only">Dismiss</span>
                            <Close className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default TechnicalServices;
