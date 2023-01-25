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
              Kevlar Security Solutions Pty Ltd currently provides 24 hour alarm
              response services for over 600 sites in Southern Tasmania. We also
              provide duress response services for many of our clients.
            </p>
            <p className="text-md text-white pb-4">
              All alarms are responded to immediately upon our drivers receiving
              notification that the alarm has been activated from the relevant
              alarm monitoring centre.
            </p>
            <p className="text-md text-white pb-4">
              We aim to ensure that all alarms are responded to within 30
              minutes (in accordance with the Australian Standard (AS/NZS
              4421:2011)).
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
              src="https://images.ctfassets.net/lfrbwr0lmnkj/49hNqpOdSyf5KKwxsN86sz/551184bd215847b7e7834fd8b47e865e/kss_website2022-108.jpg"
              className="absolute bottom-0 object-cover w-full h-full"
              objectPosition="50% 70%"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/1kb4M0bBUNY5NcNLjuT16N/eda358fe18e5e4851842539bdfdeff80/kss_website2022-117.jpg"
              className="object-cover absolute inset-0"
            />
          </div>
          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <p className="text-md text-white pb-2">
              Alarm activations can come at the most inconvenient time. Kevlar
              Security Solutions will function as an intermediary so you can
              spend more of your time focusing on your business and leaving the
              security of your site to security professionals. We are always
              expanding our patrol operation, currently the largest in Tasmania
              we have five cars operating 365 days of the year (24/7) in
              Southern Tasmania alone.
            </p>
            <p className="text-md text-white pb-2">
              To keep you informed about the security of your asset &/or
              business our team of Security Officers are trained to provide
              accurate and timely reports. Alarms are a cornerstone of ensuring
              your peace of mind when away from your asset. Our drivers will
              action an alarm immediately providing response in accordance with
              AS/NZS 4421:2011, and we will tailor a solution that is suitable
              for your requirements.
            </p>
            <p className="text-md text-white pb-2">
              Duress Response is also tailored to suit a variety of clients,
              with our officers trained in stand-alone and team responses,
              offering services to businesses and individuals. Business is
              offered the assistance of a security officer in a confronting
              situation, non-compliant customer or even a disgruntled employee.
              Individuals can choose from a range of services including
              residential response to medical responses, our team are qualified
              to provide a variety of services as required.
            </p>
            <p className="text-md text-white pb-2">
              All services are documented and reporting available, compliance
              for incident reports to be written and reviewed by our senior
              officers.
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

export default AlarmResponse;
