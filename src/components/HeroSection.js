import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";
import { StaticImage } from "gatsby-plugin-image";
import HeroAngle from "../assets/svg/hero-angle";

const HeroSection = () => {
  return (
    <section className="relative py-12 xl:pt-32 xl:pb-0 shadow-xl overflow-hidden">
      <div className="hidden xl:block absolute -bottom-48 left-12 z-10 w-[2500px] h-auto opacity-50">
        {/* <HeroAngle className="w-full h-full" /> */}
        
      </div>
      <div className="absolute h-[1500px] w-[1500px] top-0 -left-[500px]  bg-gradient-to-b from-[#001a2f40] to-black/60 z-[10] rotate-[45deg]">h</div>
      <div className="absolute inset-0 xl:-bottom-36 xl:top-auto">
        <StaticImage
          className="!h-full !w-full !object-cover"
          src="https://images.ctfassets.net/lfrbwr0lmnkj/5qUBREtADDhinVjjNYgEW/5ef4274ff9149c1198e5cadd4545e583/kss_website2022-113.jpg"
          alt="Kevlar Security Solutions"
        />
        <div className="absolute inset-0 bg-black/50 lg:bg-black/0 lg:bg-gradient-to-tr lg:from-black/60  lg:to-black/20 mix-blend-multiply" />
      </div>
      <div className="max-w-screen-2xl px-4 mx-auto relative pt-24 pb-6 lg:pt-36 lg:pb-24 z-[20]">
        <div className="h-1 my-4 bg-white w-12"></div>
        <h1 className=" text-4xl xl:text-5xl font-bold tracking-tight">
          <span className="block text-white uppercase xl:max-w-xl">
            Protection at every angle
          </span>
        </h1>
        <p className=" mt-6 max-w-lg  text-xl text-white sm:max-w-xl">
          <strong>Kevlar Security Solutions</strong> is a proudly Tasmanian owned
          and operated company specialising in the provision of physical and
          technical security services including vehicle-based patrol and alarm
          response, static and event security officers, and technical
          installations for homes and large multi-site enterprises.
        </p>
        <div className="flex flex-col lg:flex-row mt-12">
          <AnchorLink
            to="/#services"
            className="flex gap-2 items-center bg-transparent hover:bg-white border-white border-2 transition text-white hover:text-black text-sm font-semibold py-3 px-6 lg:px-10"
          >
            {" "}
            Our Services <ArrowRight className="h-5 w-5" />
          </AnchorLink>
          <Link
            to="/contact"
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
  );
};

export default HeroSection;
