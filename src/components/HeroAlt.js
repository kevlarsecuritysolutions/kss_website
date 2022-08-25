import React, { useId, useRef, useState } from "react";
import { motion, useInView, useMotionValue } from "framer-motion";
import dataRight from "../assets/images/data-right.png";
import dataLeft from "../assets/images/data-left.png";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

function BackgroundIllustration(props) {
  let id = useId();

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

const HeroAlt = () => {
  return (
    <section className="relative overflow-hidden bg-[#f2f2f2]">
      {/* <div className="absolute left-0 top-48 opacity-25">
        <StaticImage src="../assets/images/data-left.png" />
      </div>
      <div className="absolute right-0 top-48 opacity-25">
        <StaticImage src="../assets/images/data-right.png" />
      </div>
      <div className="absolute right-96 top-48">
        <StaticImage src="../assets/images/fingerprint.png" />
      </div> */}
      {/* <div className="hidden lg:block absolute -right-44 top-3 opacity-40">
        <StaticImage src="../assets/images/home-main-graphic.png" />
      </div> */}
      <div className="relative grid grid-cols-1 px-4 lg:grid-cols-2 max-w-7xl mx-auto pt-60">
      <BackgroundIllustration className="absolute left-3/4 top-20 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-translate-x-1/2 lg:ml-12 xl:ml-0" />
        <div className="col-span-1 pr-24">
          <h1 class="text-left tracking-tight sm:text-6xl lg:text-7xl">
            <span class="block font-bold text-[#c3c9ce] uppercase font-heading text-5xl">
              PROTECTION
            </span>
            <span class="block text-kss-text font-heading uppercase text-5xl">
              AT EVERY ANGLE
            </span>
          </h1>
          <div className="h-1 my-12 w-full bg-gradient-to-r from-[#0064a3] via-[#0064a3] to-[#001f32]"></div>
          <h3 className="text-kss-text text-semibold text-xl">
            Kevlar Security Solutions is a proudly Tasmanian owned and operated
            company specialising in the provision of physical security services,
            including concierge, security patrol, alarm response, alarm system
            monitoring and static guard services.{" "}
          </h3>
          <div className="flex gap-8 mt-12">
            <AnchorLink
              to="/#services"
              className="flex gap-2 items-center bg-black hover:bg-opacity-80 border-black border transition text-white text-sm py-3 px-4 lg:px-10"
            >
              {" "}
              Our Services <ArrowRight className="hidden lg:block" />
            </AnchorLink>
            <AnchorLink
              to="/#contact"
              className="flex gap-2 items-center bg-transparent hover:bg-black border-black border transition text-black hover:text-white text-sm py-3 px-4 lg:px-10"
            >
              {" "}
              Contact a Professional <ArrowRight className="hidden lg:block" />
            </AnchorLink>
          </div>
        </div>
        <div className="col-span-1 pt-10 pl-12 -mb-24">
          <StaticImage src="../assets/images/hero-lock.png" className="w-[750px]"/>
        </div>
      </div>
    </section>
  );
};

export default HeroAlt;
