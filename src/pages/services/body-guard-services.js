import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../../assets/svg/hero-angle2";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

const BodyGuard = () => {
  return (
    <Layout>
      <SEO title="Bodyguard Services" slug="/services/body-guard-services" />

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              BODYGUARD SERVICES
            </h2>
            <p className="text-md text-white pb-4">
              Our close personal protection services are provided only by our
              most experienced professional security officers who can quickly
              adapt and overcome unexpected issues using sound professional
              judgement. We ensure that our bodyguarding and close personal
              protection services are meticulously planned, discreet and
              designed to accommodate for the individual needs of our clients.
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 z-10"></div>
            {" "}
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/1JX6LQAEqp0YkkGwoRwNEn/604a6eeef7e481b490b60982dd89dbe9/AdobeStock_171861728.jpeg"
              className="!absolute !bottom-0"
              objectPosition="50% 40%"
              alt="Bodyguard services"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/20v3Z6lC8rcBPGqigcImby/da423907d8e62f618e9f50ddee219fc5/kss_website2022-109.jpg"
              className="!object-cover !absolute !inset-0"
              alt="Bodyguard services"
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            {/* <h3 className="text-white text-xl font-semibold pt-2 pb-2">
              Personal Protection
            </h3>
            <p className="text-md text-white pb-2">
              Close personal protection is a critical area that requires
              meticulous planning and delicate execution. Our guards will
              exercise professionalism and judgement to ensure that the
              individual is as safe as practical in the environment.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Asset Protection
            </h3>
            <p className="text-md text-white pb-2">
              We will travel with your asset, develop risk assessments for
              travel routes and manifest developed to ensure that your asset is
              taken from and given to the right people.
            </p>
            <p className="text-md text-white pb-2">
              Please use our contact page if you are interested in seeking out
              more information about the services we can deliver.
            </p> */}
            <p className="text-md text-white pb-4">
              Our close personal protection services are frequently utilised by
              insurance, property management and legal industry professionals
              when attending meetings or site visits as part of contentious and
              emotionally charged cases.
            </p>
            <p className="text-md text-white pb-4">
              In addition to providing physical protection where required, our
              experienced close personal protection officers have exceptional
              verbal de-escalation skills which can be used to substantially
              reduce the likelihood of a physical altercation.
            </p>
            <p className="text-md text-white pb-4">
              Our security officers can also provide comprehensive incident
              reports and witness statements for use in legal proceedings where
              required.
            </p>
            <p className="text-md text-white pb-4">
              We can also provide chauffeur and personal protection services for
              political figures and company executives encountering protesters,
              in-home service providers such as medical professionals, and
              celebrities or dignitaries who may encounter over-enthusiastic
              fans.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BodyGuard;
