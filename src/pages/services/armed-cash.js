import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../../assets/svg/hero-angle2";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";

const ArmedCash = () => {
  return (
    <Layout>
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
                src="../../assets/images/prius.jpg"
                alt=""
              />
              <div class="absolute inset-0 "></div>
            </div>
            <div className="pt-36 pb-24 px-24">
              <StaticImage
                className="h-48 w-48 z-10"
                src="../../assets/images/armed-cash-in-transit.png"
                alt="Crowd Control"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 lg:pt-24 pb-12 lg:pb-8">
            <h2 className="text-white font-bold text-3xl pb-8">
              ARMED CASH IN TRANSIT
            </h2>
            <p className="text-md text-white pb-4">
              Many businesses, both large and small, are required to transport
              cash to and from their banking institution. Unfortunately, staff
              members transporting cash to and from a business are at risk of
              both targeted attacks or random opportunistic thefts and violence.
              Our armed cash-in-transit service provides business owners with
              peace of mind, both for the welfare of their staff, and the
              protection of their hard-earned money.
            </p>
            <div className="flex">
              <Link
                to="/contact"
                className="flex gap-2 justify-center px-6 items-center bg-transparent hover:bg-white border-white border transition text-white mt-8 hover:text-black text-sm py-3"
              >
                {" "}
                Contact a Security Professional <ArrowRight className="" />
              </Link>
            </div>
          </div>
          <StaticImage
            src="../../assets/images/snow.jpg"
            className="hidden lg:block"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <StaticImage
            src="https://cdn.pixabay.com/photo/2015/09/26/19/16/alarm-959592_960_720.jpg"
            className="object-cover"
          />
          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <h2 className="text-white font-bold text-2xl pb-2 lg:pb-8 pt-8">
              Our team can manage all aspects of your security and safety needs
              including:
            </h2>
            <div className="flex flex-col lg:flex-row gap-12 px-4 lg:px-0 py-8">
              <StaticImage
                src="../../assets/images/key-points-check.png"
                className="h-32 w-32 hidden lg:block"
              />
              <ul className="text-white list-disc pl-4">
                <li>
                  Transport of end of day or end of week cash deposits to your
                  financial institution
                </li>
                <li>
                  Pick up daily or weekly change floats from your financial
                  institution, or provide a return service
                </li>
                <li>
                  Provide ad-hoc cash-in-transit services for events or
                  businesses with variable cash-in-transit needs
                </li>
              </ul>
            </div>
            <p className="text-md text-white pb-2">
              Our CEO and Operations Manager can provide advice and a quote for
              cash-in-transit service to suit your needs.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArmedCash;
