import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../../assets/svg/hero-angle2";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

const ConciergeGuards = () => {
  return (
    <Layout>
      <SEO title="Concierge Guards" slug="/services/concierge-guards" />

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 xl:pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              CONCIERGE GUARDS
            </h2>
            <p className="text-md text-white pb-4">
              Concierge security officers are assigned to give support to the
              guests and visitors, whilst providing the company an additional
              level of protection.
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
              className="!absolute !bottom-0"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/7KaNa4XRrd0DQaqrXcYL7c/df4cf6a9bd05d91d05962ff1f58b18ae/kss_website2022-59.jpg"
              className="!object-cover !absolute !inset-0"
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <p className="text-md text-white pb-2">
              Our officers are trained to the highest security standard and are
              continually updating their qualifications to remain security
              industry compliant providing high-level administrative skills and
              exceptional front-facing customer service in conjunction with
              security for your facility.
            </p>
            <p className="text-md text-white pb-2">
              Our officers are adaptable to software programs, we employ
              technical experts who will immerse themselves in your systems to
              train our officers.
            </p>
            <p className="text-md text-white pb-2">
              We will provide uniforms suitable for your business environment
              and will work to ensure that we operate within your companies’
              policies and procedures.
            </p>
            <p className="text-md text-white pb-2">
              Time on site and length of shift is adaptable to business
              requirements.
            </p>
            <p className="text-md text-white pb-2">
              Please contact us for a confidential discussion on how we can
              provide solutions for your business needs
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ConciergeGuards;
