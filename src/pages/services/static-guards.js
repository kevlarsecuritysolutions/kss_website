import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../../assets/svg/hero-angle2";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

const StaticGuards = () => {
  return (
    <Layout>
      <SEO title="Static Guards" slug="/services/static-guards" />

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              STATIC GUARDS
            </h2>
            <p className="text-md text-white pb-4">
              There are a wide range of reasons why businesses and individuals
              may need to hire static guards, whether on a regular basis or for
              fixed periods.
            </p>
            <p className="text-md text-white pb-4">
              We can provide static guards for almost any purpose.
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
          <div className="hidden lg:block relative">
            {" "}
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/1RRoRFQyNDMA2IzrwJjl2J/fc41d9d79f212ae7fc30e870191c1113/kss_website2022-135.jpg"
              className="absolute bottom-0"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/7KaNa4XRrd0DQaqrXcYL7c/df4cf6a9bd05d91d05962ff1f58b18ae/kss_website2022-59.jpg"
              className="object-cover absolute inset-0"
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <h3 className="text-white text-xl font-semibold pt-2 pb-2">
              Regular Concierge or visitor monitoring Services
            </h3>
            <p className="text-md text-white pb-2">
              We have extensive experience in providing concierge and reception
              security services.
            </p>
            <p className="text-md text-white pb-2">
              We believe that the key to providing exceptional security services
              is ensuring that all our security personnel have the right
              experience, skills and aptitude for the work that they do.
            </p>
            <p className="text-md text-white pb-2">
              Accordingly, we ensure that all our concierge staff hold
              monitoring room security licence endorsements so that they can
              operate CCTV and access control systems in association with their
              concierge duties.
            </p>
            <p className="text-md text-white pb-2">
              We also offer additional value-added services to our clients,
              including specialised duress and hold-up training (suitable for
              concierge and client-facing reception roles), welfare checks for
              overnight or high-risk work and security risk assessments.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Last Minute overnight property protection
            </h3>
            <p className="text-md text-white pb-2">
              For example, where windows or fencing is damaged, or alarm systems
              are malfunctioning and repairs cannot be arranged until the next
              business day
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Loss Prevention
            </h3>
            <p className="text-md text-white pb-2">
              An essential business function that helps companies minimise risk,
              prevent theft and increase the overall safety of the company.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Anti-social behaviour deterrence
            </h3>
            <p className="text-md text-white pb-2">
              Whilst we do prefer to receive notice of any planned static guard
              requirements, we know that unfortunate and unpredictable
              situations can arise for any business. Accordingly, we pride
              ourselves on being able to arrange for static guards to attend
              sites within the Hobart area and close suburbs in less than 1 hour
              after we receive notification of your static guard requirements.
            </p>
            <p className="text-md text-white pb-2">
              Our CEO and Operations Manager can provide advice and a quote for
              our static guard services to suit your needs.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StaticGuards;
