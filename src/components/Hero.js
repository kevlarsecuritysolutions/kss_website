import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../assets/svg/hero-angle";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

const Hero = () => {
  return (
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0  bg-gray-100 "></div>
      <div class="mx-auto">
        <div class="relative overflow-hidden">
            <div className="lg:block absolute bottom-0 -left-3 z-10 w-[2000px] h-auto">
           <HeroAngle className="w-full h-full"/>
            </div>
          <div class="absolute inset-0 lg:bottom-0 lg:inset-x-0 z-1">
            <StaticImage
              class="h-full w-full object-cover"
              src="../assets/images/kss-hero-purple.png"
              alt="Crystals"
            />
            <div class="absolute inset-0 "></div>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 max-w-screen-2xl mx-auto px-4 py-12">
            <div class="relative lg:mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:py-24 lg:px-8 z-[11]">
              <h1 class="text-left tracking-tight sm:text-6xl lg:text-7xl">
                <span class="block font-bold text-[#c3c9ce] uppercase font-heading text-5xl">
                  PROTECTION
                </span>
                <span class="block text-white font-heading uppercase text-5xl">
                  AT EVERY ANGLE
                </span>
              </h1>
              <div class="mt-8 max-w-sm sm:max-w-none sm:flex">
                <div class="flex gap-8">
                  <AnchorLink
                    to="/#services"
                    className="flex gap-2 items-center bg-transparent hover:bg-white hover:text-black border-white border transition text-white text-sm py-3 px-4 lg:px-10"
                  >
                    {" "}
                    Our Services{" "}
                    <ArrowRight className="hidden lg:block"/>
                  </AnchorLink>
                  <Link
                    to="/catalogue"
                    className="flex gap-2 items-center bg-transparent hover:bg-white hover:text-black border-white border transition text-white text-sm py-3 px-4 lg:px-10"
                  >
                    {" "}
                    Talk to a Professional{" "}
                    <ArrowRight className="hidden lg:block"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative col-span-1 flex justify-center sm:mt-32">
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
