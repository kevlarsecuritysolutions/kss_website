import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../../assets/svg/hero-angle2";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";

import SEO from "../../components/Seo";
const AlarmSystemMonitoring = () => {
  return (
    <Layout>
      <SEO
        title="Alarm System Monitoring"
        slug="/services/alarm-system-monitoring"
      />
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
                src="../../assets/images/alarm-system-monitoring.png"
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
              ALARM SYSTEM MONITORING
            </h2>
            <p className="text-md text-white pb-4">
              All alarm monitoring services are provided by a Tasmanian based
              ASIAL accredited A Grade control room which can monitor all
              security and related alarms including residential monitored alarm
              systems, commercial monitored alarm systems, hold up alarms, panic
              alarms, medical monitoring alarms, mains power failure alarms and
              low battery alarms.
            </p>
            <p className="text-md text-white pb-4">
              The control room utilises the latest alarm monitoring room
              technology, allowing us to provide our clients with record storage
              and archiving, reporting, and still image verification services.
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
          <div className="hidden lg:block">
            {" "}
            <StaticImage
              src="../../assets/images/snow.jpg"
              className="hidden lg:block"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <StaticImage
            src="https://cdn.pixabay.com/photo/2015/09/26/19/16/alarm-959592_960_720.jpg"
            className="object-cover"
          />
          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <h2 className="text-white font-bold text-2xl pb-8 pt-8">
              The NBN and your alarm system
            </h2>
            <p className="text-md text-white pb-2">
              The NBN network utilises technology that is not compatible with
              many existing alarm systems. It is therefore essential to contact
              us before moving to the NBN to check whether your existing alarm
              system can be connected through the NBN network.
            </p>
            <p className="text-md text-white pb-2">
              If your alarm system utilises older technology that is not
              compatible with the NBN, we can provide you with advice and
              recommendations for ensuring that your home or business remains
              secure, and if necessary, arrange for the purchase and
              installation of a new alarm system.
            </p>
            <h2 className="text-white font-bold text-2xl pb-8 pt-8">
              4G Alarm System Installation and Upgrades
            </h2>
            <p className="text-md text-white pb-2">
              We can now provide our clients wit the latest 4G alarm monitoring
              technology, including Permaconn, Multipath and SCSI Direct
              Wireless 4G systems.
            </p>
            <p className="text-md text-white pb-2">
              Contact us for a free, no obligation quote to upgrade your alarm
              system.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AlarmSystemMonitoring;
