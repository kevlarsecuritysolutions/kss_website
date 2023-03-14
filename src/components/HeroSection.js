import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";
import { StaticImage } from "gatsby-plugin-image";

const HeroSection = () => {
  return (
    <section className="relative pt-12 pb-44 shadow-xl overflow-hidden">
      <div className="absolute inset-0 xl:-bottom-36 xl:top-auto">
        <StaticImage
          className="!h-full !w-full !object-cover"
          src="https://images.ctfassets.net/lfrbwr0lmnkj/5qUBREtADDhinVjjNYgEW/5ef4274ff9149c1198e5cadd4545e583/kss_website2022-113.jpg"
          alt="Kevlar Security Solutions Fleet"
        />
        <div className="absolute inset-0 bg-black/50 lg:bg-black/40 mix-blend-multiply" />
      </div>
      <div className="max-w-screen-2xl px-4 mx-auto relative pt-24 pb-6 lg:py-36">
        <div className="h-1 my-4 bg-white w-12"></div>
        <h1 className=" text-4xl font-bold tracking-tight">
          <span className="block text-white uppercase">
            Protection at every angle
          </span>
        </h1>
        <p className=" mt-6 max-w-lg  text-xl text-white sm:max-w-xl">
          <strong>Kevlar Security Solutions</strong> is a proudly Tasmanian
          owned and operated company specialising in the provision of physical
          security services, including concierge, security patrol, alarm
          response, alarm system monitoring and static guard services.{" "}
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
            className="flex gap-2 items-center bg-transparent transition text-white text-sm font-semibold py-3 px-6 lg:px-10 hover:underline"
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
      {/* <div className="absolute bottom-6 right-36 w-2 h-2 bg-white/60 rounded-full animate-ping"></div> */}
    </section>
  );
};

export default HeroSection;
