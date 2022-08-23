import React, { useId, useRef, useState } from "react";
import { motion, useInView, useMotionValue } from "framer-motion";
import dataRight from "../assets/images/data-right.png";
import dataLeft from "../assets/images/data-left.png";
import { StaticImage } from "gatsby-plugin-image";

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

const About = () => {

  return (
    <section className="relative overflow-hidden">
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
      <BackgroundIllustration className="absolute left-3/4 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
      <div className="grid grid-cols-1 px-4 lg:grid-cols-2 max-w-screen-2xl mx-auto py-24">
        <div className="col-span-1">
          <h3 className="text-kss-text text-semibold text-2xl">
            Kevlar Security Solutions is a proudly Tasmanian owned and operated
            company specialising in the provision of physical security services,
            including concierge, security patrol, alarm response, alarm system
            monitoring and static guard services.{" "}
          </h3>
          <div className="h-1 my-12 w-full bg-gradient-to-r from-[#0064a3] via-[#0064a3] to-[#001f32]"></div>
          <div className="">
            <p className="text-kss-text text-md pb-4">
              We have built a strong reputation as one of Tasmania’s most
              trusted security services providers – our services are widely
              recognised as being reliable, innovative, and customised to our
              clients’ needs.
            </p>
            <p className="text-kss-text text-md pb-4">
              We set ourselves apart by providing services which are responsive
              and flexible to our clients’ needs, and security personnel who are
              highly trained, reliable and skilled in a wide range of security
              and related roles.
            </p>
            <p className="text-kss-text text-md pb-4">
              Our business is able to attract and retain many of the best
              candidates within the security industry (both in security officer
              and management roles) as we have built a reputation as an employer
              of choice in the Tasmanian security industry – we offer
              flexibility, career development opportunities and an enterprise
              agreement with competitive rates and a variety of superior
              benefits.
            </p>
            <p className="text-kss-text text-md pb-4">
              Our industry-leading use of technology, including secure
              tablet-based information storage, GPS tracking, and our own
              customised technology systems, demonstrates our commitment to
              using the latest and best practice protocols in our operations and
              services, and in our advice and recommendations to our clients.
            </p>
          </div>
        </div>
        <div className="col-span-1 absolute right-24 bottom-0">
        {/* <StaticImage src="../assets/images/hero-lock.png" className="w-[800px]"/> */}
      </div>
      </div>

    </section>
  );
};

export default About;
