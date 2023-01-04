import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-gradient-to-b from-[#002034] to-[#03070a] overflow-x-hidden">
      <div className="grid grid-cols-1 px-4 lg:grid-cols-4 gap-12 max-w-7xl mx-auto py-8">
        <Link to="/" className="flex gap-2 justify-center lg:justify-start">
          <StaticImage
            src="../assets/images/kss-logo-white.png"
            className="w-10 h-12"
          />
          <div className="flex flex-col justify-start">
            <p className="text-2xl text-white">KEVLAR</p>
            <p className="text-sm text-white -mt-2">SECURITY SOLUTIONS</p>
          </div>
        </Link>
        <div className="hidden lg:grid grid grid-cols-2">
          <div className="flex flex-col">
            <Link to="/" className="text-kss-text-dark hover:text-white text-sm pb-2">
              Home
            </Link>
            <AnchorLink to="/#services" className="text-kss-text-dark hover:text-white text-sm pb-2">
              Services
            </AnchorLink>
            <AnchorLink to="/#clients" className="text-kss-text-dark hover:text-white text-sm pb-2">
              Clients
            </AnchorLink>
          </div>
          <div className="flex flex-col">
            <Link to="/employment/information" className="text-kss-text-dark hover:text-white text-sm pb-2">
              Careers
            </Link>
            <Link to="/contact" className="text-kss-text-dark hover:text-white text-sm pb-2">
              Contact
            </Link>
            <a target="blank" href="https://assets.ctfassets.net/lfrbwr0lmnkj/3m0WHtRL8hkn1smxmlVSUP/61e35e80c092c5b877c66bdfbb5c0ee6/terms.pdf" className="text-kss-text-dark hover:text-white text-sm pb-2">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <StaticImage src="../assets/images/accreditations-color.png" className="w-60 h-10"/>
        </div>
        <div className="hidden lg:flex flex flex-col">
          <Link className="text-kss-text-dark hover:text-white text-sm pb-2">
            GPO Box 5550, HOBART 7001
          </Link>
          <Link className="text-kss-text-dark hover:text-white text-sm pb-2">
            Phone: 0408 303 603
          </Link>
          <Link className="text-kss-text-dark hover:text-white text-sm pb-2">
            Email: info@kevlarsecuritysolutions.com.au
          </Link>
        </div>
      </div>
      <div className=" flex items-center mx-4 lg:mx-auto max-w-7xl mx-auto border-t border-gray-50/40 ">
        <div class="mt-2 md:mt-0 md:order-1">
          <p class="text-xs py-2 tracking-tight text-kss-text-dark">
            &copy; 2022 Kevlar Security Services. All rights reserved. | Master
            Licence No. 19859
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
