import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../../assets/svg/hero-angle2";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

const CrowdControl = () => {
  return (
    <Layout>
      <SEO title= "Crowd Control" slug="/services/crowd-control"/>
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
                src="https://images.pexels.com/photos/4799242/pexels-photo-4799242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Crystals"
              />
              <div class="absolute inset-0 "></div>
            </div>
            <div className="pt-36 pb-24 px-24">
              <StaticImage
                className="h-48 w-48 z-10"
                src="../../assets/images/crowd-control.png"
                alt="Crowd Control"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 lg:pt-24 pb-8">
            <h2 className="text-white font-bold text-3xl pb-8">
              CROWD CONTROL / EVENT SECURITY
            </h2>
            <p className="text-md text-white">
              We have significant experience in providing crowd control and
              related security services for a wide range of events and venues
              including large scale multi-day public events, high profile and
              high risk events, concerts and sporting events, events at pubs and
              clubs and private functions.
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
            src="../../assets/images/right-column-security.png"
            className=""
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <StaticImage
            src="../../assets/images/left-column-security.png"
            className="hidden lg:block object-cover"
          />
          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <p className="text-md text-white pb-2">
              Our experienced team can assist you with every stage of your next
              event.
            </p>
            <p className="text-md text-white pb-2">
              In the planning stage of your event, our management team can
              advise and assist you with the preparation of event security plans
              and provide a formal risk assessment where required. This includes
              conducting site visits, advising on various health and safety
              matters and co-ordinating the involvement of emergency management
              and other relevant agencies.
            </p>
            <p className="text-md text-white pb-2">
              On the day of your event, we can provide a team of highly skilled
              staff members including security officers, first aid officers,
              traffic control officers and supervisory staff as needed.
            </p>
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
                <li>guest list management</li>
                <li>providing advice and direction to patrons</li>
                <li>providing first aid assessment and response</li>
                <li>monitor and identifying behaviour of concern</li>
                <li>
                  quickly responding to unexpected situations, disturbances or
                  aggressive anti-social behaviour
                </li>
              </ul>
            </div>
            <p className="text-md text-white pb-2">
              Our CEO and Operations Manager can provide advice and a quote for
              our crowd control services to suit your needs.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CrowdControl;
