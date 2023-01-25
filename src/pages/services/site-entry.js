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
      <SEO title="Site Entry" slug="/services/site-entry" />
      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              SITE ENTRY / GATE HOUSE
            </h2>
            <p className="text-md text-white pb-4">
              Kevlar Security Solutions can provide stringent access control to
              your premises, whilst managing visitors efficiently, politely and
              with respect.
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
              src="https://images.ctfassets.net/lfrbwr0lmnkj/7F36QEDok9yBSQVkoTbAek/d39ebe2bc0ab2ad7374dccbefc09c932/kss_website2022-55.jpg"
              className="hidden lg:block absolute -bottom-60"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="mx-4 lg:mx-0 relative aspect-video lg:aspect-auto">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/fak4CdMb7aFraHvA4ogbw/6c54e62dee26beda24ad0c32f91e6d10/kss_website2022-96.jpg"
              className="object-cover absolute inset-0"
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 py-24 lg:py-36">
            <p className="text-md text-white pb-2">
              Tailored training to suit unique business objectives allows our
              officers to provide a customer service focused face for your
              business.
            </p>
            <p className="text-md text-white pb-2">
              Our officers are currently engaged in a variety of training
              courses including Certificate II in Medical Response, Drug and
              Alcohol Testing, and further security training. Additional courses
              can be obtained to better tailor the security service that we
              provide you.
            </p>
            <p className="text-md text-white pb-2">
              Our CEO and Operations Manager can provide advice and a quote for
              our site entry services to suit your needs.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SiteEntry;
