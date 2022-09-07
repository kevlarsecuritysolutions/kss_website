import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../../assets/svg/hero-angle2";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

const SecurityPatrols = () => {
  return (
    <Layout>
      <SEO title= "Security Patrols" slug="/services/security-patrols"/>
      <section class="relative hidden lg:block">
        <div class="absolute inset-x-0 bottom-0  bg-gray-100 "></div>
        <div class="mx-auto">
          <div class="relative overflow-hidden">
            <div className="lg:block absolute -bottom-1 -left-[400px] z-10 w-[2000px] h-auto">
              <HeroAngle className="w-full h-full" />
            </div>
            <div class="absolute inset-0 object-top z-1">
              <StaticImage
                class="h-full w-full object-cover"
                src="../../assets/images/prius.jpg"
                alt=""
              />
              <div class="absolute inset-0 "></div>
            </div>
            <div className="pt-36 pb-24 px-24">
              <StaticImage
                className="h-48 w-48 z-10"
                src="../../assets/images/security-patrols.png"
                alt="Crowd Control"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 lg:pt-24 pb-12 lg:pb-8">
            <h2 className="text-white font-bold text-3xl pb-8">
              SECURITY PATROLS
            </h2>
            <p className="text-md text-white pb-2">
              We specialise in providing vehicle-based security patrols and have
              the largest security patrol car operation in Tasmania. These
              patrols are conducted our carbon neutral, high visibility patrol
              vehicles. The specific security patrol services that we offer to
              our clients are extremely flexible and customised to each
              individual client’s security needs.
            </p>
            <p className="text-md text-white pb-2">
              We tailor our contract durations, and the day(s), times and types
              of services we provide to suit each client's needs.
            </p>
            <p className="text-md text-white pb-2">
              For example, our services can be provided on an ongoing basis, or
              for a specific period of time only, such as a set number of days
              during the Christmas / New Year break, or during a family holiday.
            </p>
            <p className="text-md text-white pb-2">
              The type of services that we provide can also be varied for each
              day of the week. For example, some businesses may not require
              unlock and lockup services on weekends, while other business may
              require an increased number of random patrols on Friday and
              Saturday nights.
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
          <StaticImage src="../../assets/images/snow.jpg" className="" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <StaticImage
            src="https://images.pexels.com/photos/532001/pexels-photo-532001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="hidden lg:block object-cover"
          />
          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <h3 className="text-white text-xl font-semibold pt-2 pb-2">
              Lock-up and Un-lock Services
            </h3>
            <p className="text-md text-white pb-2">
              Our lock-up and un-lock services are very popular with both small
              and large business. We can provide that “just-in-case” check that
              your building is secure with a patrol conducted in the early
              evening, or we can even replace the need for your staff to lock-up
              at all, by providing regular time-specific patrols each day at the
              close of business.
            </p>
            <p className="text-md text-white pb-2">
              A combined service involving a close of business lock-up and an
              early morning un-lock can even remove the need for staff to be
              responsible for looking after keys to your building.
            </p>
            <h3 className="text-white text-xl font-semibold pt-2 pb-2">
              Random Night-Time Patrols
            </h3>
            <p className="text-md text-white pb-2">
              Many businesses and home-owners are concerned about the increase
              in petty crime, and the resulting need to protect premises,
              infrastructure and personal property from this risk.
            </p>
            <p className="text-md text-white pb-2">
              Our high-visibility and randomly timed night-time patrols provide
              a deterrent for would-be lawbreakers and loiterers, and can also
              provide regular checks to ensure that buildings, infrastructure
              and property remains secure during the night.
            </p>
            <p className="text-md text-white pb-2">
              We also provide and install high-visibility signage free of charge
              to all of our clients, providing a constant visual deterrent, and
              displaying our 24 hour response number to enable members of the
              public to report any suspicious activities.
            </p>
            <p className="text-md text-white pb-2">
              The work that we do during our night time patrols can be tailored
              to each business’ individual security needs and concerns.
            </p>
            <p className="text-md text-white pb-2">
              The timing of our patrols can be completely random, randomly timed
              within set time spans (e.g. completed at any time between 1:00am
              and 4:00am), or during specific timeframes each night.
            </p>
            <h2 className="text-white font-bold text-lg pb-2 pt-8">
              We can also provide the following compliance and reporting options
              to our clients:
            </h2>
            <div className="flex flex-col lg:flex-row gap-12 px-4 lg:px-0 py-8">
              <StaticImage
                src="../../assets/images/key-points-check.png"
                className="w-32 h-32 hidden lg:block"
              />
              <ul className="text-white list-disc pl-4">
                <li>Proof cards</li>
                <li>Nightly patrol reports</li>
                <li>Photographic records and reports</li>
              </ul>
            </div>
            <p className="text-md text-white pb-2">
              Our CEO and Operations Manager will undertake an assessment of
              your business or home, and provide you with advice and quotes for
              tailored security patrol services to suit your needs.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SecurityPatrols;
