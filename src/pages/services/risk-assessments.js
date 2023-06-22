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
      <SEO title="Risk Assessments" slug="/services/risk-assessments" />

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              RISK ASSESSMENTS
            </h2>
            <p className="text-md text-white pb-4">
              Many businesses require risk assessments to be completed in order
              to identify security flaws, vulnerabilities, staff safety risks
              and risks to members of the public.
            </p>
            <p className="text-md text-white pb-4">
              We specialise in providing comprehensive and cost-effective risk
              assessments for businesses, private residences, individuals and
              events.
            </p>
            <p className="text-md text-white pb-4">
              Choosing to engage one of our qualified and experienced risk
              assessors means that the assessments and recommendations will
              always be compliant with relevant Australian Standards and the
              latest industry best practice.
            </p>
            <p className="text-md text-white pb-4">
              Our risk assessments provide not only thorough assessments of
              current concerns, but also recommendations that could be
              implemented to alleviate or reduce risks. We always provide a
              range of recommendations so that clients can make informed
              decisions based on business requirements and cost-efficiency.
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
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Event Risk Assessments
            </h3>
            <p className="text-md text-white pb-2">
              Our risk assessors have significant experience in the assessment,
              planning and execution of both small and large-scale events,
              including political, cultural and internationally significant
              events with unique security needs.
            </p>
            <p className="text-md text-white pb-2">
              We regularly liaise with police, counter-terrorism experts,
              emergency services, community safety groups and other stakeholders
              as part of our risk assessment and event security planning
              processes. This ensures that we are aware of any emerging issues
              and allows us to plan the security operation to work seamlessly
              with these services during the course of the event.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Regular Security Audits
            </h3>
            <p className="text-md text-white pb-2">
              Even when security systems and protocols are compliant with
              Australian standards and industry best practice, it is critical to
              regularly review their effectiveness and suitability. Staff
              complacency, changes to business practices and staff training
              issues can all lead to serious flaws within even the best security
              systems and protocols.
            </p>
            <p className="text-md text-white pb-2">
              To address these potential risks, we offer our clients a security
              audit service which can be provided on a regular basis once we
              have conducted an initial assessment and developed an audit matrix
              for ongoing compliance.
            </p>
            <p className="text-md text-white pb-2">
              These regular on-site audits or “spot-checks” can be conducted at
              times and intervals most suitable to your business needs, and will
              follow the initially developed audit matrix to identify and
              address security flaws and provide reliable data for assessing any
              ongoing trends and issues.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Internal Risks and Loss Prevention
            </h3>
            <p className="text-md text-white pb-2">
              Businesses can sometimes experience “internal” security issues,
              particularly where they engage high numbers of contracted or
              temporary workers. These issues are often difficult both to
              identify and mitigate.
            </p>
            <p className="text-md text-white pb-2">
              Our risk assessors are experienced in identifying, assessing and
              addressing internal risks, and can provide a comprehensive action
              plan which promotes trust and unity within workforces while also
              addressing and reducing the risk of serious internal security
              breaches and losses.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RiskAssessment;
