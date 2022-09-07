import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import HeroAngle from "../assets/svg/hero-angle2";
import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";
import { Link } from "gatsby";

import { CheckIcon } from "@heroicons/react/outline";
import SEO from "../components/Seo";

const Company = () => {
  return (
    <Layout>
      <SEO title="Company Information" slug="/company"/>
      <section>
        <section class="relative hidden lg:block">
          <div class="absolute inset-x-0 bottom-0  bg-gray-100 "></div>
          <div class="mx-auto">
            <div class="relative overflow-hidden">
              <div className="lg:block absolute -bottom-1 -left-[400px] z-10 w-[2000px] h-auto">
                <HeroAngle className="w-full h-full" />
              </div>
              <div class="absolute inset-0 object-top z-1">
                <StaticImage
                  class="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1653614223023-c1f0cb18e2db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Company"
                />
                <div class="absolute inset-0 "></div>
              </div>
              <div className="pt-36 pb-24 px-24">
                <StaticImage
                  className="w-36 z-10"
                  src="../assets/images/company-about.png"
                  alt="Crowd Control"
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="bg-gradient-to-bl from-[#002034] to-black" id="environment">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 lg:pt-24 pb-8">
            <h2 className="text-white font-bold text-3xl pb-8">
              COMPANY PROFILE
            </h2>
            <p className="text-md text-white pb-4">
              Kevlar Security Solutions is a proudly Tasmanian owned and
              operated company specialising in the provision of physical
              security services, including concierge, security patrol, alarm
              response, alarm system monitoring and static guard services.
            </p>
            <p className="text-md text-white pb-4">
              We have built a strong reputation as one of Tasmania’s most
              trusted security services providers – our services are widely
              recognised as being reliable, innovative, and customised to our
              clients’ needs.
            </p>
            <p className="text-md text-white pb-4">
              We set ourselves apart by providing services which are responsive
              and flexible to our clients’ needs, and security personnel who are
              highly trained, reliable and skilled in a wide range of security
              and related roles.
            </p>
            <p className="text-md text-white pb-4">
              Our business is able to attract and retain many of the best
              candidates within the security industry (both in security officer
              and management roles) as we have built a reputation as an employer
              of choice in the Tasmanian security industry – we offer
              flexibility, career development opportunities and an enterprise
              agreement with competitive rates and a variety of superior
              benefits.
            </p>
            <p className="text-md text-white pb-4">
              Our industry-leading use of technology, including secure
              tablet-based information storage, GPS tracking, and our own
              customised technology systems, demonstrates our commitment to
              using the latest and best practice protocols in our operations and
              services, and in our advice and recommendations to our clients.
            </p>
          </div>
          <StaticImage src="../assets/images/prius.jpg" className="xs:hidden sm:hidden lg:block" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            {" "}
            <StaticImage src="../assets/images/Environment.png" className="" />
          </div>
          <div className="bg-gradient-to-bl from-[#A8CE00] to-[#03070A] px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              KEVLAR'S COMMITMENT TO THE ENVIRONMENT
            </h2>
            <p className="text-md text-white pb-4">
              Kevlar Security Solutions Pty Ltd is concerned about the damage
              caused to our environment and climate by carbon emissions.
            </p>
            <p className="text-md text-white pb-4">
              Carbon emissions are unfortunately difficult to avoid for security
              companies, particularly those providing vehicle-based security
              patrol and alarm response services.
            </p>
            <p className="text-md text-white pb-4">
              However, we are committed to reducing our impact on the
              environment and climate as much as possible, and have taken the
              following steps to achieve this:
            </p>
            <div className="max-w-xl mx-auto pt-4 px-4">
              <div className="relative border border-white py-8 pl-12 bg-[#516400]">
                <div className="bg-white rounded-full absolute w-12 bottom-4 -left-6"><CheckIcon className="text-[#8dc73f]"/></div>
                <p className="text-white text-md">All of our security patrol vehicles are completely carbon neutral.</p>
              </div>
              <div className="relative border border-white py-8 pl-12 bg-[#738e00]">
                <div className="bg-white rounded-full absolute w-12 bottom-8 -left-6"><CheckIcon className="text-[#8dc73f]"/></div>
                <p className="text-white text-md">Our offices utilise solar power and always aim to purchase biodiverse reforestation carbon offsets.</p>
              </div>
              <div className="relative border border-white py-8 pl-12 bg-[#516400]">
                <div className="bg-white rounded-full absolute w-12 bottom-8 -left-6"><CheckIcon className="text-[#8dc73f]"/></div>
                <p className="text-white text-md">We are developing electronic patrol sheets and alarm response dockets so our patrol vehivle operation will be completely paper-free.</p>
              </div>
              <div className="relative border border-white py-8 pl-12 bg-[#738e00]">
                <div className="bg-white rounded-full absolute w-12 bottom-8 -left-6"><CheckIcon className="text-[#8dc73f]"/></div>
                <p className="text-white text-md">Our offices endeavour to always use recycled products such as toner cartridges, coffee pods and textiles (e.g. old uniforms).</p>
              </div>
            </div>
            <div className="flex justify-center ">
            <Link
              to="/contact"
              className="flex gap-2 justify-center px-6 items-center bg-transparent hover:bg-white border-white border transition text-white mt-8 hover:text-black text-sm py-3"
            >
              {" "}
              Contact a Security Professional <ArrowRight className="hidden lg:block" />
            </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Company;
