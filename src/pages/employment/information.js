import React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import HeroAngle from "../../assets/svg/hero-angle2";
import { Link } from "gatsby";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";
import SEO from "../../components/Seo";

const EmploymentInformation = () => {
  return (
    <Layout>
      <SEO title="Careers with KSS" slug="/employment/information"/>

      <section
        className="bg-gradient-to-bl from-[#002034] to-black"
        id="environment"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              CAREERS WITH KSS
            </h2>
            <p className="text-md text-white pb-4">
              We believe that the key to providing exceptional security services
              is ensuring that all our security personnel have the right
              experience, skills and aptitude for the work that they do, and are
              supported to excel in both their professional and personal lives.
            </p>
            <p className="text-md text-white pb-4">
              Accordingly, we have built our reputation as a leading employer in
              the Tasmanian security industry, offering flexibility, career
              development opportunities and an enterprise agreement with a
              variety of benefits.
            </p>
            <p className="text-md text-white pb-4">
              All security personnel at Kevlar Security Solutions have completed
              training from a combination of the Certificate II and Certificate
              III in Security Operations, and all permanent security personnel
              hold at least a full Certificate III in Security Operations. Many
              of our security personnel also hold traffic control
              qualifications, advanced first aid qualifications, white cards and
              Certificate IV or Diploma level qualifications in security, risk
              assessment and training.
            </p>
            <p className="text-md text-white pb-4">
              We actively seek out and offer opportunities for ongoing training
              and development to all security personnel. This ensures that our
              high-quality security personnel remain challenged and engaged with
              their work and enables us to regularly adapt and improve our
              services to meet and exceed ever-changing security industry
              standards. The study and training benefit provided within our
              Enterprise Agreement demonstrates our commitment to training and
              our employees’ desire to engage in ongoing training and
              professional development.
            </p>
          </div>
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 z-10"></div>
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/1jASCyhnGjgyOmdOBYSh1H/ebbf2fb4d4b39a61f742369e00c83610/kss_website2022-115.jpg"
              className="!object-cover !absolute !inset-0"
              alt="Careers with KSS"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mx-4 lg:mx-0 hidden lg:block relative aspect-video lg:aspect-auto overflow-hidden">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/ssPbjgLfUggiWKkgUNRae/cd9b8b15397e2d0dd6f77ed17d34621e/kss_website2022-65.jpg"
              className="!absolute !-bottom-12"
              alt="Careers with KSS"
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-8">
            <h2 className="text-white font-bold text-3xl pb-8">
              INTERESTED IN JOINING OUR TEAM?
            </h2>
            <p className="text-md text-white pb-4">
              Use the link below to search available positions and to register
              your interest in joining the KSS team.
            </p>
            <div className="flex items-center max-w-lg pt-20 items-center">
              <Link to="/employment/expression-of-interest" className="w-24">
                <StaticImage src="../../assets/images/employment-icon.png" className="object-fit"/>
              </Link>
              <div className="!h-36 !w-[2px] !bg-white !mx-20 "></div>
              <Link
                to="/employment/expression-of-interest"
                className="flex gap-2 items-center bg-transparent hover:bg-white hover:text-black border-white border transition text-white text-sm h-12 w-48 px-4 justify-center"
              >
                {" "}
                Search & Apply <ArrowRight className="hidden lg:block" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EmploymentInformation;
