import React from "react";
import {Link} from 'gatsby'
import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";
import { CircleBackground } from "./CircleBackground";
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-bl from-[#03070a] to-black py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Contact A Professional
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            It takes 30 seconds to sign up. Download the app and create an
            account today and we’ll send you a tip guaranteed to double your
            first investment.
          </p>
          <div className="mt-8 flex sm:justify-center">
            <Link
              to="/contact"
              className="flex gap-2 items-center bg-transparent hover:bg-white border-white border transition text-white hover:text-black text-sm py-3 px-4 lg:px-10"
            >
              {" "}
              Get in Touch <ArrowRight className="hidden lg:block" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
