import React from "react";
import { Link } from "gatsby";
import securityPatrols from "../assets/images/services/ravcrop.jpg";
import alarmDuress from "../assets/images/services/duressbutton.png";
import alarmSystemMonitoring from "../assets/images/services/monitoringcentre.png";
import armedCash from "../assets/images/services/cashtill.png";
import staticGuards from "../assets/images/services/patrols.png";
import crowdControl from "../assets/images/services/crowdcontrol.png";
import riskAssessment from "../assets/images/services/riskassessment.png";

import csiro from "../assets/images/csiro.png";
import fernwood from "../assets/images/fernwood.png";
import goldenElectronics from "../assets/images/golden-electronics.png";
import jacksons from "../assets/images/jacksons.png";
import kalisProperty from "../assets/images/kalis-property.png";
import { StaticImage } from "gatsby-plugin-image";

const services = [
  {
    name: "Security Patrols",
    link: "services/security-patrols",
    description:
      "We specialise in providing vehicle-based security patrols and have the largest security patrol car operation in Tasmania. These patrols are conducted our carbon neutral, high visibility patrol vehicles. The specific security patrol services that we offer to our clients are extremely flexible and customised to each individual client’s security needs.",
    icon: "https://images.ctfassets.net/lfrbwr0lmnkj/6LSuXjDHJqtxK3xsujTwyo/dbbcc5c3f581a9224307e001a23f28c7/kss_website2022-129.jpg",
  },
  {
    name: "Alarm / Duress Response",
    link: "services/alarm-response",
    description:
      "Kevlar Security Solutions Pty Ltd currently provides 24 hour alarm response services for over 600 sites in Southern Tasmania. We also provide duress response services for many of our clients. All alarms are responded to immediately upon our drivers receiving notification that the alarm has been activated from the relevant alarm monitoring centre. We aim to ensure that all alarms are responded to within 30 minutes (in accordance with the Australian Standard (AS/NZS 4421:2011)).",
    icon: "https://downloads.ctfassets.net/lfrbwr0lmnkj/46WJBhbNTCib46p3XaUD4M/8c85bce22711040e8db1143782540b4b/kss_website_2022-70.jpg",
  },
  {
    name: "Alarm System Monitoring",
    link: "services/alarm-system-monitoring",
    description:
      "All alarm monitoring services are provided by a Tasmanian based ASIAL accredited A Grade control room which can monitor all security and related alarms including residential monitored alarm systems, commercial monitored alarm systems, hold up alarms, panic alarms, medical monitoring alarms, mains power failure alarms and low battery alarms.",
    icon: alarmSystemMonitoring,
  },
  {
    name: "Cash in transit services",
    link: "services/armed-cash",
    description:
      "Many businesses, both large and small, are required to transport cash to and from their banking institution. Unfortunately, staff members transporting cash to and from a business are at risk of both targeted attacks or random opportunistic thefts and violence. Our armed cash-in-transit service provides business owners with peace of mind, both for the welfare of their staff, and the protection of their hard-earned money.",
    icon: "https://images.ctfassets.net/lfrbwr0lmnkj/5KZrumT2CaCtic1cfsvRE0/6adf86506f4af406d7b390023838a8e6/kss_website_20_22-1.jpg",
  },
  {
    name: "Static Guards",
    link: "services/static-guards",
    description:
      "There are a wide range of reasons why businesses and individuals may need to hire static guards, whether on a regular basis or for fixed periods. We can provide static guards for almost any purpose.",
    icon: "https://images.ctfassets.net/lfrbwr0lmnkj/1Ik0iKyzN495Jeo7GCi5dD/136de41c3b9df91242eb1164328fc18e/kss_website2022-24.jpg",
  },
  {
    name: "Crowd Control / Event Security Services",
    link: "services/crowd-control",
    description:
      "We have vast experience in providing crowd control and related security service for a wide range of events and venues including large scale multi-day public events, high profile and high risk events, concerts and sporting events, events at pubs and clubs and private functions.",
    icon: "https://images.ctfassets.net/lfrbwr0lmnkj/ssPbjgLfUggiWKkgUNRae/cd9b8b15397e2d0dd6f77ed17d34621e/kss_website2022-65.jpg",
  },
  {
    name: "Risk Assessments & analysis",
    link: "services/risk-assessments",
    description:
      "Many businesses require risk assessments to be completed in order to identify security flows, vulnerabilities, staff safety risks and risks to members of the public. We specialise in providing comprehensive and cost-effective risk assessments for businesses, private residences, individuals, and events.",
    icon: riskAssessment,
  },
];

const clients = [
  {
    name: "csiro",
    logo: csiro,
  },
  {
    name: "fernwood",
    logo: fernwood,
  },
  {
    name: "golden-electronics",
    logo: goldenElectronics,
  },
  {
    name: "jacksons",
    logo: jacksons,
  },
  {
    name: "kalis-property",
    logo: kalisProperty,
  },
];

const Services = () => {
  return (
    <div>
      <section
        className="relative bg-gradient-to-b from-[#002034] to-[#03070a] overflow-x-hidden overflow-y-hidden"
        id="services"
      >
        <div className="absolute right-0">
          <svg
            width="1402"
            height="564"
            viewBox="0 0 1402 564"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L1401.07 8.129V563.801L0 0Z"
              fill="url(#paint0_linear_8_29)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_8_29"
                x1="700.537"
                y1="0"
                x2="700.537"
                y2="563.801"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#002A45" />
                <stop offset="1" stop-color="#03070A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute -bottom-32 right-0">
          <svg
            width="1309"
            height="556"
            viewBox="0 0 1309 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 555.722H1307.01L1308.26 0.000183105L0 555.722Z"
              fill="url(#paint0_radial_8_122)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_8_122"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(654.128 277.861) scale(654.128 277.861)"
              >
                <stop stop-color="#002A45" />
                <stop offset="0.34" stop-color="#001522" />
                <stop offset="1" stop-color="#03070A" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute top-[1200px] right-0">
          <svg
            className="w-[2200px] h-auto"
            width="1918"
            height="509"
            viewBox="0 0 1918 509"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1917.91 0V508.5H0L1917.91 0Z"
              fill="url(#paint0_linear_8_140)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_8_140"
                x1="958.957"
                y1="508.5"
                x2="958.957"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#002A45" />
                <stop offset="1" stop-color="#03070A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute top-[1775px] left-0">
          <svg
            className="w-[2200px] h-auto"
            width="1918"
            height="509"
            viewBox="0 0 1918 509"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 508.5L0 0L1917.91 0L0 508.5Z"
              fill="url(#paint0_linear_10_143)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_10_143"
                x1="958.957"
                y1="0"
                x2="958.957"
                y2="508.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#002A45" />
                <stop offset="1" stop-color="#03070A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute top-[2500px] left-0">
          <svg
            width="1402"
            height="564"
            viewBox="0 0 1402 564"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1401.07 563.801L0 555.672V-0.000244141L1401.07 563.801Z"
              fill="url(#paint0_linear_11_151)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11_151"
                x1="700.537"
                y1="563.801"
                x2="700.537"
                y2="-0.000244141"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#071017" />
                <stop offset="1" stop-color="#03070A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="py-24 relative z-10">
          <div className=" max-w-7xl mx-auto grid grid-cols-1 px-4">
            <div className="pb-24 max-w-5xl sm:text-left">
              <div className="h-1 my-4 w-full bg-white w-12"></div>
              <h2 className="text-3xl xl:text-4xl text-white font-bold pb-8 uppercase">
                Our Services Set Us Apart
              </h2>
              <p className="text-white text-lg pb-4">
                We have earned a reputation as a market leader in providing a
                wide range of security services including vehicle-based security
                patrols, 24 hour alarm / duress response, static guards, armed
                cash-in-transit and Automatic Teller Machine first-line response
                and maintenance, event security, concierge guard services, risk
                assessments.
              </p>
              <p className="text-white text-lg pb-4">
                We set ourselves apart by providing services which are
                responsive and flexible to our clients’ needs, and security
                personnel who are highly trained, reliable and skilled in a wide
                range of security and related roles.
              </p>
              <p className="text-white text-lg pb-4">
                We pride ourselves on ensuring that our services are responsive,
                cost-effective and flexible. We conduct regular client services
                reviews to ensure that our services are continuing to meet our
                clients’ needs and incorporate the latest industry best practice
                standards.
              </p>
              <p className="text-white text-lg pb-4">
                Our industry-leading use of technology, including secure
                tablet-based information storage, Fleetmatics demonstrates our
                commitment to using the latest and best practice protocols in
                our own operations and services, and in our advice and
                recommendations to our clients.
              </p>
            </div>
          </div>
          <div className="max-w-screen-2xl mx-auto flex flex-col max-w-7xl gap-8 pb-12">
            <Link
              to="services/static-guards"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-12 pb-12 px-4 pt-4 transition"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/1Ik0iKyzN495Jeo7GCi5dD/136de41c3b9df91242eb1164328fc18e/kss_website2022-24.jpg"
                  className="!lg:w-[155px] !aspect-video !lg:aspect-square !object-cover"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Static Guards
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  There are a wide range of reasons why businesses and
                  individuals may need to hire static guards, whether on a
                  regular basis or for fixed periods. We can provide static
                  guards for almost any purpose.
                </p>
              </div>
            </Link>
            <Link
              to="services/site-entry"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-12 pb-12 px-4 pt-4 transition"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/7F36QEDok9yBSQVkoTbAek/d39ebe2bc0ab2ad7374dccbefc09c932/kss_website2022-55.jpg"
                  className="!lg:w-[155px] !aspect-video !lg:aspect-square !object-cover"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Site Entry / Gate House
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  Kevlar Security Solutions can provide stringent access control
                  to your premises, whilst managing visitors efficiently,
                  politely and with respect.
                </p>
              </div>
            </Link>
            <Link
              to="services/concierge-guards"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-12 pb-12 px-4 pt-4 transition"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/1ESY9sJTFtg4Kf0dqgBlUQ/cda5abb63f45a3b9f8ef7e9da1e90c1d/kss_website2022-92.jpg"
                  className="!lg:w-[155px] !aspect-video !lg:aspect-square !object-cover"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Concierge Guards
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  Concierge security officers are assigned to give support to
                  the guests and visitors, whilst providing the company an
                  additional level of protection.
                </p>
              </div>
            </Link>
            <Link
              to="services/armed-cash"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-12 pb-12 px-4 pt-4 transition"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/5KZrumT2CaCtic1cfsvRE0/6adf86506f4af406d7b390023838a8e6/kss_website_20_22-1.jpg"
                  className="!lg:w-[155px] !aspect-video !lg:aspect-square !object-cover"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Cash in transit services
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  Many businesses, both large and small, are required to
                  transport cash to and from their banking institution.
                  Unfortunately, staff members transporting cash to and from a
                  business are at risk of both targeted attacks or random
                  opportunistic thefts and violence. Our armed cash-in-transit
                  service provides business owners with peace of mind, both for
                  the welfare of their staff, and the protection of their
                  hard-earned money.
                </p>
              </div>
            </Link>
            <Link
              to="services/security-patrols"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-12 pb-12 px-4 pt-4 transition"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/6LSuXjDHJqtxK3xsujTwyo/dbbcc5c3f581a9224307e001a23f28c7/kss_website2022-129.jpg"
                  className="!lg:w-[155px] !aspect-video !lg:aspect-square !object-cover"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Security Patrols
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  We specialise in providing vehicle-based security patrols and
                  have the largest security patrol car operation in Tasmania.
                  These patrols are conducted our carbon neutral, high
                  visibility patrol vehicles. The specific security patrol
                  services that we offer to our clients are extremely flexible
                  and customised to each individual client’s security needs.
                </p>
              </div>
            </Link>
            <Link
              to="services/alarm-response"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-12 pb-12 px-4 pt-4 transition"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://downloads.ctfassets.net/lfrbwr0lmnkj/46WJBhbNTCib46p3XaUD4M/8c85bce22711040e8db1143782540b4b/kss_website_2022-70.jpg"
                  className="!lg:w-[155px] !aspect-video !lg:aspect-square !object-cover"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Alarm / Duress Response
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  Kevlar Security Solutions Pty Ltd currently provides 24 hour
                  alarm response services for over 600 sites in Southern
                  Tasmania. We also provide duress response services for many of
                  our clients. All alarms are responded to immediately upon our
                  drivers receiving notification that the alarm has been
                  activated from the relevant alarm monitoring centre. We aim to
                  ensure that all alarms are responded to within 30 minutes (in
                  accordance with the Australian Standard (AS/NZS 4421:2011)).
                </p>
              </div>
            </Link>
            <Link
              to="services/crowd-control"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-12 pb-12 px-4 pt-4 transition"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/ssPbjgLfUggiWKkgUNRae/cd9b8b15397e2d0dd6f77ed17d34621e/kss_website2022-65.jpg"
                  className="!lg:w-[155px] !aspect-video !lg:aspect-square !object-cover"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Crowd Control / Event Security
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  We have vast experience in providing crowd control and related
                  security service for a wide range of events and venues
                  including large scale multi-day public events, high profile
                  and high risk events, concerts and sporting events, events at
                  pubs and clubs and private functions.
                </p>
              </div>
            </Link>
            <Link
              to="services/body-guard-services"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-12 pb-12 px-4 pt-4 transition"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/3YFjdd2kxKLW7o8Abis3m1/72d30fc60dbe674c55e9d8c47b0b464f/kss_website2022-159.jpg"
                  className="!lg:w-[155px] !aspect-video !lg:aspect-square !object-cover"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Body Guard Services
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  Kevlar Security Solutions can provide close personal
                  protection, asset / valuables protection services.
                </p>
              </div>
            </Link>
            <Link
              to="services/technical-services"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-12 pb-12 px-4 pt-4 transition"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/6aER9jOd5sjtZTqA64i0U0/16c7477b135ff2d453852057bc848cdf/kss_website2022-33.jpg"
                  className="!lg:w-[155px] !aspect-video !lg:aspect-square !object-cover"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Technical Services
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  We have experience in Alarm Monitoring, Installation,
                  Servicing & Repair, Structured Data Networking, Access Control
                  Solutions, Upgrade and Integrations and CCTV Installations.
                </p>
              </div>
            </Link>
            <Link
              to="services/risk-assessments"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-12 pb-12 px-4 pt-4 transition"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/7dqQJKVb6Ya1oc6UfiVc69/b4d0fa784cc8a56720127c61d61c5ec7/kss_website2022-39.jpg"
                  className="!lg:w-[155px] !aspect-video !lg:aspect-square !object-cover"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Risk Assessments & analysis
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  Many businesses require risk assessments to be completed in
                  order to identify security flows, vulnerabilities, staff
                  safety risks and risks to members of the public. We specialise
                  in providing comprehensive and cost-effective risk assessments
                  for businesses, private residences, individuals, and events.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* <section className="bg-gray-100" id="clients">
        <div className="mx-auto max-w-5xl pb-36">
          <div className="px-4 max-w-3xl sm:text-left pt-24">
            <h2 className="text-4xl xl:text-5xl text-kss-text font-heading font-bold pb-4 xl:pb-8 tracking-tight">
              Work with Kevlar
            </h2>
            <p className="mt-2 text-lg text-kss-text">
              We have built our reputation as a leading employer in the
              Tasmanian security industry, offering flexibility, career
              development opportunities and an enterprise agreement with a
              variety of benefits.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 px-12 lg:px-4">
            <Link
              to="/employment/information"
              className="bg-gma-bg pb-4 shadow-xl transition"
            >
              <div className="h-60 md:h-48">
                <StaticImage
                  src="../assets/images/employment-half.png"
                  className="object-cover h-full w-full"
                  placeholder="BLURRED"
                />
              </div>

              <h3 className="pt-4 h-24 px-4">
                Find out if a career in security is right for you.
              </h3>
            </Link>
            <Link
              to="/employment/expression-of-interest"
              className="bg-gma-bg pb-4 shadow-xl transition"
            >
              <div className="h-60 md:h-48">
                <StaticImage
                  src="../assets/images/employment-left.png"
                  className="object-cover h-full w-full"
                  placeholder="BLURRED"
                />
              </div>

              <h3 className="pt-4 h-24 px-4">
                Express your interest in joinging the Kevlar Security team.
              </h3>
            </Link>
            <Link
              to={`/coming-soon`}
              className="bg-gma-bg pb-4 shadow-xl transition"
            >
              <div className="h-60 md:h-48">
                <StaticImage
                  src="../assets/images/employment-right.png"
                  className="object-cover h-full w-full"
                  placeholder="BLURRED"
                />
              </div>

              <h3 className="pt-4 h-24 px-4">Explore current openings.</h3>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
