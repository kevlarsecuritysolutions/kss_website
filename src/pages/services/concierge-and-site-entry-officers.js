import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../../assets/svg/hero-angle2";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

const SiteEntry = () => {
  return (
    <Layout>
      <SEO title="Concierge and Site Entry Officers" slug="/services/concierge-and-site-entry-officers" />
      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              CONCIERGE & SITE ENTRY OFFICERS
            </h2>
            <p className="text-md text-white pb-4">
              We provide tailored concierge and site entry security services to
              accommodate for a range of site-specific requirements including
              issuing and updating site access cards, greeting and
              assisting important guests, conducting drug and alcohol testing,
              and comprehensive record-keeping administration within proprietary
              IT systems.
            </p>
            <p className="text-md text-white pb-4">
              Our concierge and site entry officers are well presented, highly
              trained, and have the ability to perform a variety of
              complementary tasks, providing our clients with an all-in-one
              solution for point of entry services.
            </p>
            <p className="text-md text-white pb-4">
              Some of the specific skills and services that our concierge and
              site entry officers can assist with include:
            </p>
            <ul className="text-md text-white list-disc pl-4 pb-4">
              <li>
                <p>Customer Service</p>
              </li>
              <li>
                <p>Technology / IT Skills</p>
              </li>
              <li>
                <p>Mining / Site Entry & Access Control (SEAC)</p>
              </li>
              <li>
                <p>Complementary Skills</p>
              </li>
            </ul>
            <p className="text-md text-white pb-4">
              Learn more about our concierge and site entry services below or
              contact us to find out which of our services would best suit your
              security needs.
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 z-10"></div>
            {" "}
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/2LIsUFugKAMq1hx6T9kUum/b5e6435f27f000b8184da1be3650ac75/kss_website2022-184.jpg"
              className="!object-cover !absolute !inset-0"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="mx-4 lg:mx-0 relative aspect-video lg:aspect-auto">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/1BL7qAM43cETZpyL1rwp5m/d69112dcac48093094bb31d0d9a41b5e/kss_website2022-187.jpg"
              className="!object-cover !absolute !inset-0"
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 py-24 lg:py-36">
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Customer Service
            </h3>
            <p className="text-md text-white pb-2">
              Concierge security officers are often positioned at the front
              entrance of client sites, meaning that our concierge officer is
              responsible for ensuring that clients and important visitors
              receive an outstanding first impression.
            </p>
            <p className="text-md text-white pb-2">
              As a result, we select and train our concierge security officers
              carefully to ensure that they are well-presented and have
              exceptional front-facing customer service and communication
              skills.
            </p>
            <p className="text-md text-white pb-2">
              We have a range of uniform options to suit each individual
              business, or our staff can wear your business’ uniform so that
              they seamlessly integrate with the rest of your team.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Technology / IT Skills
            </h3>
            <p className="text-md text-white pb-2">
              Our concierge and site security officers all have advanced level
              computer skills, ensuring that they can quickly learn and master
              your proprietary and industry specific software packages to
              perform required duties.
            </p>
            <p className="text-md text-white pb-2">
              We also ensure that all concierge and site security officers have
              a thorough understanding of security-specific software packages
              including Titan, Gallagher and Honeywell. This enables our
              security officers to problem solve and address security issues,
              set up security access for authorised persons and provide on-site
              expertise to authorised users.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Mining / Site Entry & Access Control (SEAC)
            </h3>
            <p className="text-md text-white pb-2">
              We have a dedicated team of SEAC officers who are trained and
              experienced in providing site entry security services at mining
              and other high-risk industry sites, including specialised site
              induction and site entry procedures.
            </p>
            <p className="text-md text-white pb-2">
              Our SEAC officer team members receive extensive specialised
              training allowing them to perform various critical duties
              associated with site entry security, including additional training
              in drug and alcohol testing, emergency first aid, workplace health
              and safety and risk identification and escalation.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Complementary Skills
            </h3>
            <p className="text-md text-white pb-2">
              Our concierge and site entry officers have a variety of additional
              skills which can be incorporated into their daily duties to
              provide additional business support and value for money for our
              clients. Some of the additional duties and skills that our
              concierge and site entry officers provide include:
            </p>
            <ul className="text-md pb-2 text-white list-disc pl-4">
              <li>
                <p>Tracking incoming / outgoing deliveries</p>
              </li>
              <li>
                <p>Access and incident record-keeping</p>
              </li>
              <li>
                <p>
                  Maintaining security related SOPs, instructions and databases
                </p>
              </li>
              <li>
                <p>General administrative duties</p>
              </li>
            </ul>
            <p className="text-md text-white pb-2">
              We understand that every business is different and may benefit
              from a different set of complementary skills within a concierge or
              site entry role.
            </p>
            <p className="text-md text-white pb-2">
              Two of the critical attributes which we require from our concierge
              and site entry security officers are an ability to adapt to
              different roles and a passion for ongoing learning and
              professional development.
            </p>
            <p className="text-md text-white pb-2">
              Accordingly, we are keen to work with clients to identify
              additional complementary skills and associated training
              opportunities which would be of value to both our clients and our
              security officers.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SiteEntry;
