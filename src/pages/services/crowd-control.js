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
      <SEO title="Crowd Control" slug="/services/crowd-control" />

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              CROWD CONTROL / EVENT SECURITY
            </h2>
            <p className="text-md text-white">
              The requirement for negotiation-based crowd controllers has never
              been higher. We train and educate our staff to develop their
              conflict resolutions skills to be able to provide venues, events,
              and individuals with a safe environment using conflict mitigation
              techniques to minimise physical altercations, ensuring the use of
              an appropriate level of force in accordance with legislative
              requirements, if required.
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
          <div className="hidden lg:block relative overflow-hidden">
            {" "}
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/3i8PYnvufHA6hNJEyfL236/e7c047f41a4af559e0367716441ba6a7/kss22-12.jpg"
              className="!absolute !bottom-0 !object-cover !w-full !h-full"
              objectPosition="50% 75%"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/1hva8STcoKuWTQQbIBw0FQ/e661534513ec9b61eca1d75b69dfed84/kss22-11.jpg"
              className="!object-cover !absolute !inset-0"
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <h3 className="text-white text-xl font-semibold pt-2 pb-2">
              Licensed Venues
            </h3>
            <p className="text-md text-white pb-2">
              The key to successfully operating a licenced venue relies on the
              cohesion of the security team and the communication of the
              security team and venue staff. We have considerable experience in
              providing crowd control and related security service at pubs,
              clubs, and private functions.
            </p>
            <h3 className="text-white text-xl font-semibold pt-2 pb-2">
              Events
            </h3>
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
            <div className="flex flex-col lg:flex-row items-center gap-12 px-4 lg:px-0 py-8">
              <div className="w-32 h-32 hidden lg:block relative flex items-center justify-center">
                <StaticImage
                  src="../../assets/images/key-points-check.png"
                  className="!w-28 !h-28 !absolute !inset-0"
                />
              </div>
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
