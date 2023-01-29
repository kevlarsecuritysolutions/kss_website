import React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import HeroAngle from "../../assets/svg/hero-angle2";
import { Link } from "gatsby";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

const EmploymentInformation = () => {
  return (
    <Layout>
      <section>
        <section class="relative hidden">
          <div class="absolute inset-x-0 bottom-0  bg-gray-100 "></div>
          <div class="mx-auto">
            <div class="relative overflow-hidden">
              <div className="lg:block absolute -bottom-1 -left-[400px] z-10 w-[2000px] h-auto">
                <HeroAngle className="w-full h-full" />
              </div>
              <div class="absolute inset-0 object-top z-1">
                <StaticImage
                  class="!h-full !w-full !object-cover"
                  src="../../assets/images/employment-top.png"
                  alt="Company"
                />
                <div class="absolute inset-0 "></div>
              </div>
              <div className="pt-36 pb-24 px-24">
                <StaticImage
                  className="!w-36 !z-10"
                  src="../../assets/images/careers.png"
                  alt="Crowd Control"
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section
        className="bg-gradient-to-bl from-[#002034] to-black"
        id="environment"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              CAREERS WITH KEVLAR
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
            <p className="text-md text-white pb-4">
              Our industry-leading use of technology, including secure
              tablet-based information storage, GPS tracking, and our own
              customised technology systems, demonstrates our commitment to
              using the latest and best practice protocols in our operations and
              services, and in our advice and recommendations to our clients.
            </p>
          </div>
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/Y3C1W7kZUmJJ28ZBCaAzU/bf6e31299bbf5f7ff61368ab05e8a83c/kss_website2022-183.jpg"
              className="!object-cover !absolute !inset-0"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/3XArIvIszZ9ijW2aTIbdmX/20735b6ef60f32cc2f36e3c0a25c7f82/kss_website2022-170.jpg"
              className=""
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-8">
            <h2 className="text-white font-bold text-3xl pb-8">
              INTERESTED IN JOINING THE KEVLAR TEAM?
            </h2>
            <p className="text-md text-white pb-4">
              Use the link below to search available positions and to register
              your interest in joining the KSS team.
            </p>
            <div className="flex justify-center items-center max-w-lg mx-auto pt-24 items-center">
              <div className="w-24">
                <StaticImage src="../../assets/images/employment-icon.png" className="object-fit"/>
              </div>
              <div className="!h-36 !w-[1px] !bg-white !mx-20 "></div>
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
