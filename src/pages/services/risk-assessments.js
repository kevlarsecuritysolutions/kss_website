import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../../assets/svg/hero-angle2";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

const RiskAssessment = () => {
  return (
    <Layout>
      <SEO
        title="Risk Assessments & Analysis"
        slug="/services/risk-assessments"
      />

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              RISK ASSESSMENTS & ANALYSIS
            </h2>
            <p className="text-md text-white pb-4">
              Many businesses require risk assessments to be completed in order
              to identify security flows, vulnerabilities, staff safety risks
              and risks to members of the public. We specialise in providing
              comprehensive and cost-effective risk assessments for businesses,
              private residences, individuals, and events.
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
              src="https://images.ctfassets.net/lfrbwr0lmnkj/1BL7qAM43cETZpyL1rwp5m/d69112dcac48093094bb31d0d9a41b5e/kss_website2022-187.jpg"
              className="!absolute !bottom-0"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/3XMf968JXrYhnAHmvvkI0q/ca1384e267d431e923273fe56b411b5a/kss_website2022-50.jpg"
              className="!object-cover !absolute !inset-0"
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <p className="text-md text-white pb-2">
              Using Australian Standards and Industry Specific requirements we
              can tailor and develop risk assessment and analysis to provide a
              report in line with your business objectives.
            </p>
            <p className="text-md text-white pb-2">
              Our engagement with ASIAL to understand the current counter
              terrorism guidelines will ensure that an objective view of your
              site-specific security requirements is analysed and
              recommendations for improvement or mitigation of risks are
              documented.
            </p>
            <p className="text-md text-white pb-2">
              In the areas of risk assessment and analysis we can provide
              comprehensive security risk analysis, development of a risk
              matrix, a risk report based on current standard operation
              procedures and recommendations for the mitigation of liability
            </p>
            <p className="text-md text-white pb-2">
              Please use our contact page if you are interested in seeking out
              more information about the services we can deliver.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RiskAssessment;
