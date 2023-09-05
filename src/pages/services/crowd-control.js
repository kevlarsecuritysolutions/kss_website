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
          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 xl:pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              CROWD CONTROL / EVENT SECURITY
            </h2>
            <p className="text-md text-white">
              We have a highly experienced team of crowd control and event
              security officers, supervisors and managers who specialise in
              providing security services at a range of events and venues. Our
              team regularly works with law enforcement, government agencies and
              event managers to provide advice and expertise in the planning and
              execution of large scale multi-day public events, high profile and
              high risk events, and concerts and sporting events.
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
              alt="crowd control"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/1hva8STcoKuWTQQbIBw0FQ/e661534513ec9b61eca1d75b69dfed84/kss22-11.jpg"
              className="!object-cover !absolute !inset-0"
              alt="crowd control"
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <p className="text-md text-white pb-4">
              In the planning stage of your event, our management team can
              advise and assist you with the preparation of event security plans
              and provide a formal risk assessment where required. This includes
              conducting site visits, advising on various health and safety
              matters and co-ordinating the involvement of emergency management
              and other relevant agencies.
            </p>
            <p className="text-md text-white pb-4">
              On the day of your event, we can provide a team of highly skilled
              staff members including security officers, first aid officers,
              traffic control officers and supervisory staff as needed.
            </p>
            <p className="text-md text-white pb-4">
              Our dedicated crowd control team completes regular in-house
              training sessions to ensure that critical skillsets are developed
              and maintained. Some of these skillsets include:
            </p>
            <ul className="text-md pb-4 text-white list-disc pl-4">
              <li>Verbal de-escalation techniques</li>
              <li>
                Best practice physical response techniques, including
                determining when a physical response is necessary, the
                appropriate type of physical response and risk associated with
                physical responses such as positional asphyxia
              </li>
              <li>
                Awareness, identification and management of situations involving
                people with different needs and circumstances, including
                language barriers, disabilities, medical conditions and cultural
                differences.{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CrowdControl;
