import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../../assets/svg/hero-angle";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";

const SecurityPatrols = () => {
  return (
    <Layout>
      <section class="relative hidden lg:block">
        <div class="absolute inset-x-0 bottom-0  bg-gray-100 "></div>
        <div class="mx-auto">
          <div class="relative overflow-hidden">
            <div className="lg:block absolute bottom-0 -left-[600px] z-10 w-[2000px] h-auto">
              <HeroAngle className="w-full h-full" />
            </div>
            <div class="absolute inset-0 object-top z-1">
              <StaticImage
                class="h-full w-full object-cover"
                src="../../assets/images/hero-services.png"
                alt=""
              />
              <div class="absolute inset-0 "></div>
            </div>
            <div className="pt-60 pb-24 px-24">
              <StaticImage
                className="h-48 w-48 z-10"
                src="../../assets/images/security-patrols.png"
                alt="Crowd Control"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-8">
            <h2 className="text-white font-bold text-3xl pb-8">
              SECURITY PATROLS
            </h2>
            <p className="text-md text-white">
              We specialise in providing vehicle-based security patrols and have
              the largest security patrol car operation in Tasmania. These
              patrols are conducted our carbon neutral, high visibility patrol
              vehicles. The specific security patrol services that we offer to
              our clients are extremely flexible and customised to each
              individual client’s security needs.
            </p>
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
            <h2 className="text-white font-bold text-2xl pb-8 pt-8">
              Our team can manage all aspects of your security and safety needs
              including:
            </h2>
            <div className="flex flex-col lg:flex-row gap-12 px-4 lg:px-0 py-8">
              <StaticImage
                src="../../assets/images/key-points-check.png"
                className="h-32 w-32"
              />
              <ul className="text-white list-disc">
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

export default SecurityPatrols;
