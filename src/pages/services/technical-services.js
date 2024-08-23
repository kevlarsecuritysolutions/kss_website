import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../../assets/svg/hero-angle2";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

const TechnicalServices = () => {
  return (
    <Layout>
      <SEO title="Technical Services" slug="/services/technical-services" />

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 xl:pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              TECHNICAL SERVICES
            </h2>
            <p className="text-md text-white pb-4">
              We are a trusted provider of specialist technical security
              services for business, government and individual clients
              throughout Tasmania. We pride ourselves on our ability to provide
              innovative and tailored technical security solutions incorporating
              the latest technological advancements and best-practice system
              design, delivery and maintenance services.
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 z-10"></div>{" "}
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/6aER9jOd5sjtZTqA64i0U0/16c7477b135ff2d453852057bc848cdf/kss_website2022-33.jpg"
              className="!absolute !bottom-0"
              alt="technical services"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/g7aewvLNihfNqjmqzVcAe/08c8279d7dc1c3f4ffd5aae8d01b6081/kss_website2022-44.jpg"
              className="!object-cover !absolute !inset-0"
              alt="technical services"
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <h3 className="text-white text-xl font-semibold pt-2 pb-4">
              Alarm Installation and Service
            </h3>
            <p className="text-md text-white pb-4">
              Security Alarm systems are an essential tool for detecting and
              preventing criminal activity in both commercial and residential
              properties.
            </p>
            <p className="text-md text-white pb-4">
              However, it can be challenging to choose the most appropriate
              alarm system, as there can be extensive variations in features,
              upgrade options, quality, manufacturing location and pricing
              between different brands and models.
            </p>
            <p className="text-md text-white pb-4">
              Our experienced security technicians have studied, installed, used
              and reviewed the latest updates for all major brands of both
              commercial and residential alarm systems, ensuring that they can
              recommend the best possible alarm system for every one of our
              clients.
            </p>
            <p className="text-md text-white pb-4">
              We have extensive connections with electronic security system
              wholesalers enabling us to source any Australian approved alarm
              system or component. We also stock some of the most popular brands
              and models of security alarm systems (including Hills, Bosch &
              Paradox), meaning that we can install or replace alarm systems
              quickly and easily in an emergency.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Monitoring
            </h3>
            <p className="text-md text-white pb-4">
              Our alarm monitoring services are provided through Golden
              Electronics which operates a Tasmanian based ASIAL accredited A
              Grade control room. The control room utilises the latest
              monitoring room technology, allowing us to provide our clients
              with record storage and archiving, reporting, and still image
              verification services in addition to alarm system monitoring
              services.
            </p>
            <p className="text-md text-white pb-4">
              The control room also utilises a dual redundancy power failure
              protocol, ensuring that monitoring services are maintained even
              during severe weather and other critical infrastructure failure
              events.
            </p>
            <p className="text-md text-white pb-4">
              Our automated reporting can be adapted to suit the needs of our
              clients, including frequency of reports, report content and level
              of technical detail.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              CCTV Surveillance Systems
            </h3>
            <p className="text-md text-white pb-4">
              CCTV systems are a powerful security tool, providing the
              opportunity for immediate assessment of on-site issues,
              accountability for staff, and a strong deterrent against
              unauthorised access.
            </p>
            <p className="text-md text-white pb-4">
              Our security technicians have extensive knowledge and experience
              in working with a range of CCTV solutions (including Honeywell,
              Axis, Hanwha Wisenet to name a few), and can provide advice on the
              most appropriate CCTV options for homes or businesses by taking
              into account factors such as lighting, remote access needs, budget
              and integration options for existing security infrastructure.
            </p>
            <p className="text-md text-white pb-4">
              We can also provide advice and quotes for upgrading older CCTV
              systems, and training and troubleshooting for existing CCTV
              systems.
            </p>
            <p className="text-md text-white pb-4">
              We offer a range of permanent and temporary CCTV solutions for
              various applications such as monitoring crowd behaviour,
              environmental monitoring and construction site access monitoring.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Electronic Access Control
            </h3>
            <p className="text-md text-white pb-4">
              Access control systems are a critical component in any business
              security system, allowing businesses to manage entry and access
              permissions, and providing internal and external accountability
              and control for access to secure areas.
            </p>
            <p className="text-md text-white pb-4">
              We have the expertise to install and maintain a range of access
              control systems, including from trusted brands such as Tecom,
              Integriti and Inception. The access control systems we install can
              include a variety of standard or add-on features including
              time-based access restrictions, audit and muster reports,
              biometric authentication and NFC technologies.
            </p>
            <p className="text-md text-white pb-4">
              All access control options can be integrated with new or existing
              security infrastructure to provide a comprehensive, customised
              solution to suit any business, from small offices to large
              industrial complexes.
            </p>
            <p className="text-md text-white pb-4">
              We also offer a wide range of video intercom solutions for
              building entry and site access requirements
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 lg:pt-24 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              SITE CAMERAS / CCTV POLES
            </h2>
            <p className="text-md text-white pb-4">
              Kevlar Security Solutions Pty Ltd offers cutting-edge surveillance
              solutions tailored to various security needs. Our Site Cameras
              integrate with leading brands like Hikvision, Dahua, Axis, Hanwha
              (Wisenet), Avigilon, Idis, ensuring top-tier performance and
              reliability.
            </p>

            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Remote Viewing and Connectivity
            </h3>
            <p className="text-md text-white pb-4">
              Our systems provide seamless remote viewing, connecting to devices
              such as mobile phones, iPads, tablets, and computers. This feature
              enables instant access to real-time footage and archived
              recordings, ensuring continuous monitoring and peace of mind.
            </p>

            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Artificial Intelligence (AI) Integration
            </h3>
            <p className="text-md text-white pb-4">
              Incorporating AI from industry leaders like Hikvision and Dahua,
              our cameras analyse audio and visual data to identify humans,
              vehicles, objects, and events. AI applications extend to people
              counting, understanding foot traffic, optimising layouts, and
              identifying peak movement times, providing critical insights for
              infrastructure planning and crowd management.
            </p>

            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Facial Recognition
            </h3>
            <p className="text-md text-white pb-4">
              Powered by Axis and Hanwha (Wisenet), our facial recognition
              technology maps facial features from images, verifying identities
              and managing access permissions. Integrated with access control,
              it tracks movement within sites or buildings, ensuring secure
              entry based on designated access levels.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Vehicle Registration Detection
            </h3>
            <p className="text-md text-white pb-4">
              Our License Plate Recognition (LPR) cameras, featuring technology
              from Axis and Hanwha (Wisenet), enhance vehicle monitoring by
              capturing registration numbers and recording the time and date of
              vehicle entries and exits, bolstering security and access
              management.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Enhance Workplace Safety
            </h3>
            <p className="text-md text-white pb-4">
              CCTV systems, technologies, prioritise workplace safety. Real-time
              footage helps identify potential safety issues before they
              escalate, while recorded footage allows thorough review of
              incidents, accidents, or thefts.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Residential Security
            </h3>
            <p className="text-md text-white pb-4">
              Our residential systems, integrating with top brands like
              Hikvision and Dahua, provide smartphone connectivity via a
              user-friendly app, remote viewing, and integration with existing
              internet services. Our three-in-one cameras offer 24/7 full-colour
              monitoring, AI-driven smart features, and active intruder
              deterrence.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Solar/Wireless Security Camera Systems
            </h3>
            <p className="text-md text-white pb-4">
              Our solar/wireless security camera systems, featuring cutting-edge
              technology from leading brands, deliver 24/7 visibility, reducing
              theft and crime risk. Packages include free delivery and
              installation in metro areas, and feature options like single
              turret, double turret, 180-degree, and 360-degree cameras. These
              systems are solar and battery-powered for optimal flexibility,
              portability and versatility, making them ideal for events,
              construction sites, and temporary security needs. We offer
              comprehensive coverage and easy relocation. They incorporate
              robust and flexible solutions, ensuring reliable performance in
              various settings.
            </p>
            <p className="text-md text-white pb-4">
              Kevlar Security Solutions Pty Ltd leverages the expertise of top
              CCTV brands to provide state-of-the-art Site Cameras, ensuring
              comprehensive protection and peace of mind for any security need.
            </p>
          </div>
          <div className="hidden lg:block relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/42h8ZuXegv5NqVqYPK1z3J/40934dca4fbac9afc350dd0eac9a7fec/image000002.jpg"
              className="!object-cover !absolute !inset-0"
              alt="technical services"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TechnicalServices;
