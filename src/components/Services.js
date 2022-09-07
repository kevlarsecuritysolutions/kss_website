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
    icon: securityPatrols,
  },
  {
    name: "Alarm / Duress Response",
    link: "services/alarm-response",
    description:
      "Kevlar Security Solutions Pty Ltd currently provides 24 hour alarm response services for over 600 sites in Southern Tasmania. We also provide duress response services for many of our clients. All alarms are responded to immediately upon our drivers receiving notification that the alarm has been activated from the relevant alarm monitoring centre. We aim to ensure that all alarms are responded to within 30 minutes (in accordance with the Australian Standard (AS/NZS 4421:2011)).",
    icon: alarmDuress,
  },
  {
    name: "Alarm System Monitoring",
    link: "services/alarm-system-monitoring",
    description:
      "All alarm monitoring services are provided by a Tasmanian based ASIAL accredited A Grade control room which can monitor all security and related alarms including residential monitored alarm systems, commercial monitored alarm systems, hold up alarms, panic alarms, medical monitoring alarms, mains power failure alarms and low battery alarms.",
    icon: alarmSystemMonitoring,
  },
  {
    name: "Armed Cash In Transit",
    link: "services/armed-cash",
    description:
      "Many businesses, both large and small, are required to transport cash to and from their banking institution. Unfortunately, staff members transporting cash to and from a business are at risk of both targeted attacks or random opportunistic thefts and violence. Our armed cash-in-transit service provides business owners with peace of mind, both for the welfare of their staff, and the protection of their hard-earned money.",
    icon: armedCash,
  },
  {
    name: "Static Guards",
    link: "services/static-guards",
    description:
      "There are a wide range of reasons why businesses and individuals may need to hire static guards, whether on a regular basis or for fixed periods. We can provide static guards at affordable prices for almost any purpose.",
    icon: staticGuards,
  },
  {
    name: "Crowd Control / Event Security",
    link: "services/crowd-control",
    description:
      "We have significant experience in providing crowd control and related security service for a wide range of events and venues including large scale multi-day public events, high profile and high risk events, concerts and sporting events, events at pubs and clubs and private functions.",
    icon: crowdControl,
  },
  {
    name: "Risk Assessments",
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
    <section
      className="relative bg-gradient-to-b from-[#002034] to-[#03070a] overflow-x-hidden"
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
      {/* <div className="absolute bottom-0 left-0">
        <svg
          width="1309"
          height="556"
          viewBox="0 0 1309 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1308.26 555.722L1.24512 555.722L0.00012207 0.000183105L1308.26 555.722Z"
            fill="url(#paint0_radial_8_116)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_8_116"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(628.788 643.994) rotate(122.673) scale(1469.59 344.148)"
            >
              <stop stop-color="#002A45" />
              <stop offset="1" stop-color="#03070A" />
            </radialGradient>
          </defs>
        </svg>
      </div> */}
      <div className="absolute bottom-0 right-0">
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
        <div className=" max-w-screen-2xl mx-auto grid grid-cols-1 px-4">
          <div className="pb-24 mx-auto max-w-5xl sm:text-center">
            <h2 className="text-5xl text-kss-text-dark font-bold pb-8">
              Our Services Set Us Apart
            </h2>
            <p className="text-kss-text-dark text-lg pb-4">
              We have earned a reputation as a market leader in providing a wide
              range of security services including vehicle-based security
              patrols, 24 hour alarm / duress response, static guards, armed
              cash-in-transit and Automatic Teller Machine first-line response
              and maintenance, event security, concierge guard services, risk
              assessments.
            </p>
            <p className="text-kss-text-dark text-lg pb-4">
              We set ourselves apart by providing services which are responsive
              and flexible to our clients’ needs, and security personnel who are
              highly trained, reliable and skilled in a wide range of security
              and related roles.
            </p>
            <p className="text-kss-text-dark text-lg pb-4">
              We pride ourselves on ensuring that our services are responsive,
              cost-effective and flexible. We conduct regular client services
              reviews to ensure that our services are continuing to meet our
              clients’ needs and incorporate the latest industry best practice
              standards.
            </p>
            <p className="text-kss-text-dark text-lg pb-4">
              Our industry-leading use of technology, including secure
              tablet-based information storage, Fleetmatics demonstrates our
              commitment to using the latest and best practice protocols in our
              own operations and services, and in our advice and recommendations
              to our clients.
            </p>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto flex flex-col max-w-7xl gap-8 pb-12">
          {services.map((service) => {
            return (
              <Link
                to={service.link}
                className="flex flex-col lg:grid lg:grid-cols-6 gap-12 pb-12 px-4 pt-4 transition hover:bg-black/10"
              >
                <div className="col-span-1 bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] w-40 h-40 flex justify-center items-center">
                  <img src={service.icon} alt="" className="w-[148px]" />
                </div>
                <div className="col-span-5 flex flex-col">
                  <h3 className="text-kss-text-dark uppercase text-4xl font-bold pb-4 lg:pb-0">
                    {service.name}
                  </h3>
                  <div className="hidden lg:block h-1 bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] my-8"></div>
                  <p className="text-kss-text-dark">{service.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <section className="bg-gray-200" id="clients">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto px-4 max-w-2xl sm:text-center pt-24">
              <h2 className="text-5xl text-kss-text font-heading font-bold pb-8 tracking-tight">
                Our Clients
              </h2>
              <p className="mt-2 text-lg text-kss-text">
                We have more than 150 clients, and service more than 1800 sites
                in Tasmania. Some of our clients are listed below
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3 pb-12"
            >
              <li className="rounded-2xl border border-gray-200 p-8 mx-auto">
                <StaticImage
                  src="../assets/images/logos/Tasnetworks.png"
                  className="w-52"
                />
              </li>
              <li className="rounded-2xl border border-gray-200 p-8 mx-auto">
                <StaticImage
                  src="../assets/images/logos/Fernwood.png"
                  className="w-68 "
                />
              </li>
              <li className="rounded-2xl border border-gray-200 p-8 mx-auto">
                <StaticImage
                  src="../assets/images/logos/HCC-wht-txt.png"
                  className="w-32 lg:w-42"
                />
              </li>
              <li className="rounded-2xl border border-gray-200 p-8 mx-auto">
                <StaticImage
                  src="../assets/images/logos/kalis.png"
                  className="w-52"
                />
              </li>
              <li className="rounded-2xl border border-gray-200 p-8 mx-auto">
                <StaticImage
                  src="../assets/images/logos/Hazell.png"
                  className="w-52"
                />
              </li>
              <li className="rounded-2xl border border-gray-200 p-8 mx-auto">
                <StaticImage
                  src="../assets/images/logos/GE4.png"
                  className="w-52"
                />
              </li>
              <li className="rounded-2xl border border-gray-200 p-8 mx-auto">
                <StaticImage
                  src="../assets/images/logos/hockeytas.png"
                  className="w-52"
                />
              </li>
              <li className="rounded-2xl border border-gray-200 p-8 mx-auto">
                <StaticImage
                  src="../assets/images/logos/onecare.png"
                  className="w-52"
                />
              </li>
              <li className="rounded-2xl border border-gray-200 p-8 mx-auto">
                <StaticImage
                  src="../assets/images/logos/GE4.png"
                  className="w-52"
                />
              </li>
            </ul>
          </div>
        </section>
        <section className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col pt-24 px-4">
            <div className="mx-auto max-w-3xl sm:text-center">
            <h2 className="text-5xl text-kss-text-dark font-bold pb-8">
              Compliance Standards
            </h2>
            <div className="max-w-5xl">
              <p className="mt-2 text-lg text-kss-text-dark pb-4">
                We have earned a reputation as a market leader in providing a
                wide range of security services including vehicle-based security
                patrols, 24 hour alarm / duress response, static guards, armed
                cash-in-transit and Automatic Teller Machine first-line response
                and maintenance, event security, concierge guard services, risk
                assessments.
              </p>
              <p className="mt-2 text-lg text-kss-text-dark">
                We set ourselves apart by providing services which are
                responsive and flexible to our clients’ needs, and security
                personnel who are highly trained, reliable and skilled in a wide
                range of security and related roles.
              </p>
            </div>

            </div>

            <div className="py-12 grid grid-cols-3 lg:grid-cols-5 items-center justify-center max-w-7xl lg:mx-auto gap-8">
              <StaticImage
                src="../assets/images/logos/ASIAL-logo.png"
                className="w-24 lg:w-48 h-auto"
              />
              <StaticImage
                src="../assets/images/logos/ISO9001-logo.png"
                className="w-24 lg:w-48 h-auto"
              />
              <StaticImage
                src="../assets/images/logos/ISO45001-logo.png"
                className="w-24 lg:w-48 h-auto"
              />
              <StaticImage
                src="../assets/images/logos/Carbon-logo.png"
                className="w-24 lg:w-48 h-auto"
              />
              <StaticImage
                src="../assets/images/logos/JAS-logo.png"
                className="w-24 lg:w-48 h-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
