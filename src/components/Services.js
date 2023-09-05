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

import { ArrowRight } from "@carbon/icons-react";

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
    link: "services/cash-in-transit",
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
        className="relative bg-gradient-to-b from-[#001a2f] to-[#03070a] overflow-x-hidden overflow-y-hidden"
        id="services"
      >
        <div className="hidden xl:block absolute right-0">
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
                <stop stop-color="#001a2f" />
                <stop offset="1" stop-color="#03070A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="hidden xl:block absolute -bottom-32 right-0">
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
                <stop stop-color="#001a2f" />
                <stop offset="0.34" stop-color="#00111e" />
                <stop offset="1" stop-color="#03070A" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="hidden xl:block absolute top-[1200px] right-0">
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
                <stop stop-color="#001a2f" />
                <stop offset="1" stop-color="#03070A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="hidden xl:block absolute top-[1775px] left-0">
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
                <stop stop-color="#001a2f" />
                <stop offset="1" stop-color="#03070A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="hidden xl:block absolute top-[2500px] left-0">
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
                <stop stop-color="#020b12" />
                <stop offset="1" stop-color="#03070A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="py-12 lg:py-36 relative z-10">
          <div className=" max-w-screen-2xl mx-auto grid grid-cols-1 px-4">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 px-4 pb-12 mx-auto relative z-10">
              <div className="grid-cols-1 xl:border-r border-kss-text-dark/60 lg:pr-12">
                <div className="flex flex-col">
                  {/* <div className="hidden lg:flex items-center h-52 w-52 lg:h-full lg:w-auto">
                    <StaticImage
                      src="https://images.ctfassets.net/lfrbwr0lmnkj/6Ugh94GJdepOdHdI3sU7MU/fb816719b3173907bc26ab1e1e0190c5/tasgov-logo-mono.png"
                      alt="tasgov logo"
                    />
                  </div> */}
                  <div className="pb-4">
                    <div className="flex justify-start items-center h-36 w-full relative">
                      <StaticImage
                        src="https://images.ctfassets.net/lfrbwr0lmnkj/1hYo1rzJFFnb4u8ODrOcwS/4acbcca56c429cb7ce625d8020b6d712/tasgov-logo-horiz.png"
                        alt="tasgov logo"
                      />
                    </div>
                  </div>

                  <p className="text-lg text-white pb-4 font-medium">
                    As a wholly Tasmanian owned business, we are proud to
                    provide our very own government departments with the highest
                    quality security services.
                  </p>
                  <p className="text-lg text-white pb-4 lg:pb-12 font-medium">
                    We are a trusted provider of security services for a range
                    of Tasmanian Government Departments including:
                  </p>
                  <div className="grid justify-start grid-cols-1 lg:grid-cols-2 gap-y-6">
                    <div className="flex gap-4 group">
                      <div className="min-w-[1px] max-w-[1px] rounded-xl bg-gradient-to-b from-kss-text-dark to-transparent"></div>
                      <div className="flex flex-col">
                        <h4 className="text-kss-text-dark text-md font-semibold">
                          Department for Education, Children and Young People
                        </h4>
                      </div>
                    </div>
                    <div
                      to="/services/static-guards"
                      className="flex gap-4 group"
                    >
                      <div className="min-w-[1px] max-w-[1px] rounded-xl bg-gradient-to-b from-kss-text-dark to-transparent"></div>
                      <div className="flex flex-col">
                        <h4 className="text-kss-text-dark text-md font-semibold">
                          Department of Police, Fire & Emergency Management
                        </h4>
                      </div>
                    </div>
                    <div
                      to="/services/static-guards"
                      className="flex gap-4 group"
                    >
                      <div className="min-w-[1px] max-w-[1px] rounded-xl bg-gradient-to-b from-kss-text-dark to-transparent"></div>
                      <div className="flex flex-col">
                        <h4 className="text-kss-text-dark text-md font-semibold">
                          Department of Natural Resources and Environment
                        </h4>
                      </div>
                    </div>
                    <div to="/services/site-entry" className="flex gap-4 group">
                      <div className="min-w-[1px] max-w-[1px] rounded-xl bg-gradient-to-b from-kss-text-dark to-transparent"></div>
                      <div className="flex flex-col">
                        <h4 className="text-kss-text-dark text-md font-semibold">
                          Department of Treasury and Finance
                        </h4>
                      </div>
                    </div>
                    <div to="/services/site-entry" className="flex gap-4 group">
                      <div className="min-w-[1px] max-w-[1px] rounded-xl bg-gradient-to-b from-kss-text-dark to-transparent"></div>
                      <div className="flex flex-col">
                        <h4 className="text-kss-text-dark text-md font-semibold">
                          Department of Health
                        </h4>
                      </div>
                    </div>
                    <div to="/services/site-entry" className="flex gap-4 group">
                      <div className="min-w-[1px] max-w-[1px] rounded-xl bg-gradient-to-b from-kss-text-dark to-transparent"></div>
                      <div className="flex flex-col">
                        <h4 className="text-kss-text-dark text-md font-semibold">
                          Department of State Growth
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-cols-1 lg:pl-12">
                <div className="flex flex-col">
                  <div className="flex justify-start items-center gap-8 pb-4">
                    <div className="flex justify-center items-center h-36 w-36 relative">
                      <StaticImage
                        src="../assets/images/logos/ISO9001-logo.png"
                        alt="ISO9001"
                      />
                    </div>
                    <div className="flex justify-center items-center h-36 w-36 relative">
                      <StaticImage
                        src="../assets/images/logos/ISO45001-logo.png"
                        alt="ISO45001"
                      />
                    </div>
                    <div className="flex justify-center items-center h-36 w-36 relative">
                      <StaticImage
                        src="../assets/images/logos/JAS-logo.png"
                        alt="ISO9001"
                      />
                    </div>
                  </div>
                  <p className="text-lg text-white pb-8 font-medium">
                    Our commitment to the highest level of compliance and
                    performance is demonstrated by our ISO accreditations for
                    Quality Management Systems (ISO 9001) and Occupational
                    Health & Safety Management Systems (ISO 45001).
                  </p>
                  <div className="pb-2">
                    <div className="flex justify-start items-center gap-8 pb-4">
                      <div className="flex justify-center items-center h-36 w-36 relative">
                        <StaticImage
                          src="../assets/images/logos/ASIAL-logo.png"
                          alt="asial bronze member"
                        />
                      </div>
                      <div className="flex justify-center items-center h-36 w-36 relative">
                        <StaticImage
                          src="../assets/images/logos/Carbon-logo.png"
                          alt="ISO45001"
                        />
                      </div>
                      <div className="flex justify-center items-center h-36 w-36 relative">
                        <StaticImage
                          src="../assets/images/100-tas-logo.png"
                          alt="ISO9001"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-white pb-4 font-medium">
                    In addition to our ISO compliances, we have voluntarily
                    adopted a variety of policies and practices to demonstrate
                    our commitment to best practice business operation.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-24">
              <Link
                to="/company"
                className="flex gap-2 items-center bg-transparent hover:bg-white border-white border-2 transition text-white hover:text-black text-sm font-semibold py-3 px-6 lg:px-10"
              >
                {" "}
                Learn more about KSS <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="pb-24 max-w-5xl sm:text-left">
              <div className="h-1 my-4 bg-white w-12"></div>
              <h2 className="text-3xl xl:text-4xl text-white font-bold pb-0 uppercase">
                Our Services Set Us Apart
              </h2>
              {/* <p className="text-white text-lg pb-4">
                We have earned a reputation as a market leader in providing a
                wide range of security services including:
              </p>
              <ul className="text-lg text-white pb-4 list-disc pl-4 lg:pl-8">
                <li className="py-1">
                  <Link
                    className="text-white hover:underline"
                    to="/services/security-patrols"
                  >
                    Vehicle-based security patrols
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="text-white hover:underline"
                    to="/services/alarm-response"
                  >
                    24 hour alarm / duress response
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="text-white hover:underline"
                    to="/services/static-guards"
                  >
                    Static guards
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="text-white hover:underline"
                    to="/services/crowd-control"
                  >
                    Event security
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="text-white hover:underline"
                    to="/services/concierge-and-site-entry-officers"
                  >
                    Concierge guard services
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="text-white hover:underline"
                    to="/services/risk-assessments"
                  >
                    Risk assessments
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="text-white hover:underline"
                    to="/services/cash-in-transit"
                  >
                    Armed and unarmed cash-in-transit services
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="text-white hover:underline"
                    to="/services/technical-services"
                  >
                    Automatic Teller Machine first line response and maintenance
                  </Link>
                </li>
              </ul>
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
                Our industry-leading use of technology, including security
                tablet-based information storage and Fleetmatics demonstrates
                our commitment to using the latest and best practice protocols
                in our own operations and services, and in our advice and
                recommendations to our clients.
              </p> */}
            </div>
          </div>
          <div className="mx-auto flex flex-col max-w-7xl gap-8 pb-12">
            <Link
              to="services/static-guards"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-8 pb-12 px-4 pt-4 transition hover:bg-[#001a2f80]"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center overflow-hidden p-2">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/1Ik0iKyzN495Jeo7GCi5dD/136de41c3b9df91242eb1164328fc18e/kss_website2022-24.jpg"
                  className="!absolute !mx-auto !left-2 !right-2 !top-2 !bottom-2"
                  alt="We have earned a reputation as a market leader in providing a wide range of security services"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Static Guards
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  Our static guards are highly trained with a particular focus
                  on verbal de-escalation, customer service and threat detection
                  skills. This diverse skillset ensures that our static guards
                  can assist in a variety of roles including overnight asset
                  protection, retail theft deterrence and sensitive events such
                  as employment terminations or community consultation meetings.
                </p>
              </div>
            </Link>
            <Link
              to="services/concierge-and-site-entry-officers"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-8 pb-12 px-4 pt-4 transition hover:bg-[#001a2f80]"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/2LIsUFugKAMq1hx6T9kUum/b5e6435f27f000b8184da1be3650ac75/kss_website2022-184.jpg"
                  className="!absolute !mx-auto !left-2 !right-2 !top-2 !bottom-2"
                  alt="We have earned a reputation as a market leader in providing a wide range of security services"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Concierge & Site Entry Officers
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  We provide tailored concierge and site entry security services
                  to accommodate for a range of site-specific requirements
                  including issuing and updating site access [cards/FOBs],
                  greeting and assisting important guests, conducting drug and
                  alcohol testing, and comprehensive record-keeping
                  administration within proprietary IT systems.
                </p>
              </div>
            </Link>
            <Link
              to="services/cash-in-transit"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-8 pb-12 px-4 pt-4 transition hover:bg-[#001a2f80]"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/5KZrumT2CaCtic1cfsvRE0/6adf86506f4af406d7b390023838a8e6/kss_website_20_22-1.jpg"
                  className="!absolute !mx-auto !left-2 !right-2 !top-2 !bottom-2"
                  alt="We have earned a reputation as a market leader in providing a wide range of security services"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Cash in transit services
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  Our cash in transit services provide peace of mind and
                  eliminate risk by removing the need for employees to transport
                  cash between their workplace and a bank branch. Our
                  experienced and trusted cash-in-transit team provide cash
                  deposit and change delivery services to numerous businesses in
                  the greater Hobart area, and offer options for armed, unarmed,
                  overt and covert services based on business preferences.
                </p>
              </div>
            </Link>
            <Link
              to="services/security-patrols"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-8 pb-12 px-4 pt-4 transition hover:bg-[#001a2f80]"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/6LSuXjDHJqtxK3xsujTwyo/dbbcc5c3f581a9224307e001a23f28c7/kss_website2022-129.jpg"
                  className="!absolute !mx-auto !left-2 !right-2 !top-2 !bottom-2"
                  alt="We have earned a reputation as a market leader in providing a wide range of security services"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Security Patrols
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  We have the largest vehicle-based security patrol operation in
                  Tasmania, with a fleet of up to eight vehicles operating at
                  any given time. Our reputation for providing reliable,
                  flexible and comprehensive security patrol services is second
                  to none.
                </p>
              </div>
            </Link>
            <Link
              to="services/alarm-response"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-8 pb-12 px-4 pt-4 transition hover:bg-[#001a2f80]"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://downloads.ctfassets.net/lfrbwr0lmnkj/46WJBhbNTCib46p3XaUD4M/8c85bce22711040e8db1143782540b4b/kss_website_2022-70.jpg"
                  className="!absolute !mx-auto !left-2 !right-2 !top-2 !bottom-2"
                  alt="We have earned a reputation as a market leader in providing a wide range of security services"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Alarm / Duress Response
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  Our large vehicle-based security patrol operation enables us
                  to provide the fastest possible alarm response timeframes to
                  every corner of the greater Hobart area, and to accommodate
                  for long-range alarm attendances without impacting service
                  provision for other clients. We also have a multi-layered
                  on-call management structure which ensures that even the most
                  complex issues are handled by suitably qualified and
                  experienced security personnel 24 hours per day, 365 days per
                  year.
                </p>
              </div>
            </Link>
            <Link
              to="services/crowd-control"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-8 pb-12 px-4 pt-4 transition hover:bg-[#001a2f80]"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/ssPbjgLfUggiWKkgUNRae/cd9b8b15397e2d0dd6f77ed17d34621e/kss_website2022-65.jpg"
                  className="!absolute !mx-auto !left-2 !right-2 !top-2 !bottom-2"
                  alt="We have earned a reputation as a market leader in providing a wide range of security services"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Crowd Control / Event Security
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  We have a highly experienced team of crowd control and event
                  security officers, supervisors and managers who specialise in
                  providing security services at a range of events and venues.
                  Our team regularly works with law enforcement, government
                  agencies and event managers to provide advice and expertise in
                  the planning and execution of large scale multi-day public
                  events, high profile and high risk events, and concerts and
                  sporting events.
                </p>
              </div>
            </Link>
            <Link
              to="services/body-guard-services"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-8 pb-12 px-4 pt-4 transition hover:bg-[#001a2f80]"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/3YFjdd2kxKLW7o8Abis3m1/72d30fc60dbe674c55e9d8c47b0b464f/kss_website2022-159.jpg"
                  className="!absolute !mx-auto !left-2 !right-2 !top-2 !bottom-2"
                  alt="We have earned a reputation as a market leader in providing a wide range of security services"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Bodyguard Services
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  Our close personal protection services are provided only by
                  our most experienced professional security officers who can
                  quickly adapt and overcome unexpected issues using sound
                  professional judgement. We ensure that our bodyguarding and
                  close personal protection services are meticulously planned,
                  discreet and designed to accommodate for the individual needs
                  of our clients.
                </p>
              </div>
            </Link>
            <Link
              to="services/technical-services"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-8 pb-12 px-4 pt-4 transition hover:bg-[#001a2f80]"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/6aER9jOd5sjtZTqA64i0U0/16c7477b135ff2d453852057bc848cdf/kss_website2022-33.jpg"
                  className="!absolute !mx-auto !left-2 !right-2 !top-2 !bottom-2"
                  alt="We have earned a reputation as a market leader in providing a wide range of security services"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Technical Services
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  We are a trusted provider of specialist technical security
                  services for business, government and individual clients
                  throughout Tasmania. We pride ourselves on our ability to
                  provide innovative and tailored technical security solutions
                  incorporating the latest technological advancements and
                  best-practice system design, delivery and maintenance
                  services.
                </p>
              </div>
            </Link>
            <Link
              to="services/risk-assessments"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-8 pb-12 px-4 pt-4 transition hover:bg-[#001a2f80]"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/7dqQJKVb6Ya1oc6UfiVc69/b4d0fa784cc8a56720127c61d61c5ec7/kss_website2022-39.jpg"
                  className="!absolute !mx-auto !left-2 !right-2 !top-2 !bottom-2"
                  alt="We have earned a reputation as a market leader in providing a wide range of security services"
                />
              </div>
              <div className="col-span-5 flex flex-col">
                <h3 className="text-white uppercase text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
                  Risk Assessments
                </h3>
                <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mt-4 mb-8"></div>
                <p className="text-kss-text-dark">
                  Our highly qualified management team's broad range of
                  expertise places us in the unique position to be able to
                  provide comprehensive risk assessments covering all aspects of
                  government, business or personal site security. Our
                  recommendations are guided by industry best-practice,
                  extensive knowledge and experience, and matters relevant to
                  each client including budget, source of technology and level
                  of risk / protection required.
                </p>
              </div>
            </Link>
            {/* <Link
              to="services/concierge-guards"
              className="flex flex-col lg:grid lg:grid-cols-6 gap-12 pb-12 px-4 pt-4 transition"
            >
              <div className="relative col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-full aspect-video lg:aspect-square flex justify-center items-center">
                <StaticImage
                  src="https://images.ctfassets.net/lfrbwr0lmnkj/1ESY9sJTFtg4Kf0dqgBlUQ/cda5abb63f45a3b9f8ef7e9da1e90c1d/kss_website2022-92.jpg"
                  className="!absolute !mx-auto !left-2 !right-2 !top-2 !bottom-2"
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
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
