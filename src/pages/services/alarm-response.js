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
                src="../../assets/images/alarm-duress-response.png"
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
          <div className="hidden lg:block">
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
            <p className="text-md text-white pb-2">
              With three patrol vehicles on the road each night, our average
              alarm response time is currently less than 17 minutes for clients
              within 20km of the CBD.
            </p>
            <p className="text-md text-white pb-2">
              If you already have an installed and monitored alarm system, we
              can work with your existing monitoring service to provide fast,
              cost-effective and professional response services for your home or
              business alarm system.
            </p>
            <p className="text-md text-white pb-2">
              We are the preferred supplier of alarm and duress response
              services for sites monitored by Golden Electronics, however we
              also regularly work with a number of other alarm monitoring
              service providers both in Tasmania and interstate.
            </p>
            <p className="text-md text-white pb-2">
              For businesses and homes that do not currently have an alarm
              system installed, or where a system upgrade is required, we can
              provide a complete security package in conjunction with our
              partners at Golden Electronics which includes planning,
              installing, monitoring and responding to your alarm system.
            </p>
            <p className="text-md text-white pb-2">
              Our clients will often also require duress alarm technology and
              response services, particularly where those clients have a duty of
              care for their staff and / or their clients.
            </p>
            <p className="text-md text-white pb-2">
              As with alarm systems, we can provide complete packages to plan,
              install, monitor and respond to a duress system, or provide duress
              response services for existing systems.
            </p>
            <p className="text-md text-white pb-2">
              All duress alarms are given the highest priority and are handled
              by our most experienced staff members. We will liaise with onsite
              staff, offsite staff and / or Tasmania Police as appropriate
              whilst we travel to the site.
            </p>
            <p className="text-md text-white pb-2">
              A response docket is completed by the relevant patrol driver for
              each alarm / duress event. These dockets can be left in a
              designated location on-site, or emailed to the client during the
              next business day.
            </p>
            <p className="text-md text-white pb-2">
              Our CEO and Operations Manager can provide you with advice and
              quotes for our standalone response services or a complete alarm
              system setup and response service to suit your needs.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AlarmResponse;
