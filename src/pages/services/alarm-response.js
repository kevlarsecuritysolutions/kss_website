import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../../assets/svg/hero-angle2";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

const AlarmResponse = () => {
  return (
    <Layout>
      <SEO title="Alarm Response" slug="/services/alarm-response" />

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              ALARM / DURESS RESPONSE
            </h2>
            <p className="text-md text-white pb-4">
              Kevlar Security Solutions provides a 24 hour alarm and duress
              response services at more than 5000 sites throughout Tasmania.
            </p>
            <p className="text-md text-white pb-4">
              Our large vehicle-based security patrol operation enables us to
              provide the fastest possible alarm response timeframes to every
              corner of the greater Hobart area, and to accommodate for
              long-range alarm attendances without impacting service provision
              for other clients. We also have a multi-layered on-call management
              structure which ensures that even the most complex issues are
              handled by suitably qualified and experienced security personnel
              24 hours per day, 365 days per year.
            </p>
            <p className="text-md text-white pb-4">
              With up to eight security response vehicles operating at any one
              time, we are able to respond to any incidents in a timely manner
              and in compliance with the Australian Standard for alarm response
              times (AS/NZS 4421:2011).
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
              src="https://downloads.ctfassets.net/lfrbwr0lmnkj/VZSaIjQOBjY1wQmRgmh6F/86d57c823f4cbdd3f94de9f71129e60f/kss_website_2022-70.jpg"
              className="!absolute !bottom-0 !object-cover !w-full !h-full"
              objectPosition="50% 70%"
              alt="Alarm response"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/1kb4M0bBUNY5NcNLjuT16N/eda358fe18e5e4851842539bdfdeff80/kss_website2022-117.jpg"
              className="!object-cover !absolute !inset-0"
              alt="Alarm response"
            />
          </div>
          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <p className="text-md text-white pb-4">
              If you already have an installed and monitored alarm system, we
              can work with your existing monitoring service to provide fast,
              cost-effective and professional response services for your home or
              business alarm system.
            </p>
            <p className="text-md text-white pb-4">
              For businesses and homes that do not currently have an alarm
              system installed, or where a system upgrade is required, we can
              provide a complete security package which includes procuring,
              installing, monitoring and responding to your alarm system. Please
              see our{" "}
              <Link
                to="/services/technical-services"
                className="text-kss-text-dark underline hover:text-white"
              >
                Technical Services
              </Link>{" "}
              page for more information.
            </p>
            <p className="text-md text-white pb-4">
              Alongside our physical attendance at any alarm or duress response,
              we ensure that each attendance is documented and reported for
              later follow up, and that pre-approved action patterns are
              followed to ensure that any issues are escalated as required.
            </p>
            <p className="text-md text-white pb-4">
              We will work with you to determine the most appropriate action
              patterns for your site, which may involve contacting designated
              staff out-of-hours, providing less urgent reports via phone or
              email during business hours, or providing electronic attendance
              reports on a daily, weekly or monthly basis.
            </p>
            <p className="text-md text-white pb-4">
              Our security officers are also trained to identify patterns of
              false alarms and suspected technical issues and provide this
              feedback to management. Our management team can then notify you of
              any these issues, take action (on your instructions) to assess and
              rectify any issues, and ultimately ensure that your security
              system fully functional and not incurring excessive costs for
              false alarm attendances.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AlarmResponse;
