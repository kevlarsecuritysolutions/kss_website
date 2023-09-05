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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 z-10"></div>
            {" "}
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/g7aewvLNihfNqjmqzVcAe/08c8279d7dc1c3f4ffd5aae8d01b6081/kss_website2022-44.jpg"
              className="!absolute !bottom-0"
              alt="technical services"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/6aER9jOd5sjtZTqA64i0U0/16c7477b135ff2d453852057bc848cdf/kss_website2022-33.jpg"
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
              and models of security alarm systems (including Integriti, Hills,
              Inception and Tecom), meaning that we can install or replace alarm
              systems quickly and easily in an emergency.
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
            {/* <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Alarm servicing and repair
            </h3>
            <p className="text-md text-white pb-4">
              If you are migrating your service or have been with us for years,
              we will provide an annual alarm service and all repair work to
              keep you up to date with industry best practice and Australian
              standard requirements. We can also place you in our customer
              database so that we contact you when you are due for your next
              service.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Structured Data networking
            </h3>
            <p className="text-md text-white pb-4">
              We can design, install, upgrade, and commission all types of wired
              or wireless data networks, this includes residential commercial
              and industrial solutions to meet your business needs that conforms
              to ASIAL standards. All our technicians have the appropriate
              licensing to perform various works that you may require, from
              working at heights to Operation of plant machinery and equipment
              that may be required to service your needs, please contact us for
              further information.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Access control solutions
            </h3>
            <p className="text-md text-white pb-4">
              We have extensive experience in developing custom access control
              solutions to meet your business needs, from Automatic gates to
              Secure line for foyer entries and biometric solutions that keep
              your property secure and provide real time Status of staffing,
              contractors, and visitor logs.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Upgrades and integrations
            </h3>
            <p className="text-md text-white pb-4">
              We can assist in the expansion or upgrade of your existing system.
              Providing expertise in all facets of technology and help develop a
              cost-effective solution that meets with your business objectives.
            </p> */}
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
              in working with a range of CCTV solutions, and can provide advice
              on the most appropriate CCTV options for homes or businesses by
              taking into account factors such as lighting, remote access needs,
              budget and integration options for existing security
              infrastructure.
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
              control systems, including from trusted brands such as Integriti,
              Inception and Tecom. The access control systems we install can
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
      </section>
    </Layout>
  );
};

export default TechnicalServices;
