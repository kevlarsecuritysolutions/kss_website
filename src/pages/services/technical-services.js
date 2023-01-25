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
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              TECHNICAL SERVICES
            </h2>
            <p className="text-md text-white pb-4">
              We have experience in Alarm Monitoring, Installation, Servicing &
              Repair, Structured Data Networking, Access Control Solutions,
              Upgrade and Integrations and CCTV Installations.
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
              src="https://images.ctfassets.net/lfrbwr0lmnkj/g7aewvLNihfNqjmqzVcAe/08c8279d7dc1c3f4ffd5aae8d01b6081/kss_website2022-44.jpg"
              className="!absolute !bottom-0"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/6aER9jOd5sjtZTqA64i0U0/16c7477b135ff2d453852057bc848cdf/kss_website2022-33.jpg"
              className="!object-cover !absolute !inset-0"
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <h3 className="text-white text-xl font-semibold pt-2 pb-2">
              Alarm monitoring and installation
            </h3>
            <p className="text-md text-white pb-2">
              We provide monitored alarm installation solutions, with an option
              for back to base monitoring to an A1 ASIAL Graded Control Room for
              Commercial Residential and industrial. Our technicians service
              state-wide and will provide their expertise for each client based
              on their needs. We provide all our clients with quotes and deliver
              solutions that meet client expectations.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Alarm servicing and repair
            </h3>
            <p className="text-md text-white pb-2">
              If you are migrating your service or have been with us for years,
              we will provide an annual alarm service and all repair work to
              keep you up to date with industry best practice and Australian
              standard requirements. We can also place you in our customer
              database so that we contact you when you are due for your next
              service.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Structured Data networking
            </h3>
            <p className="text-md text-white pb-2">
              We can design, install, upgrade, and commission all types of wired
              or wireless data networks, this includes residential commercial
              and industrial solutions to meet your business needs that conforms
              to ASIAL standards. All our technicians have the appropriate
              licensing to perform various works that you may require, from
              working at heights to Operation of plant machinery and equipment
              that may be required to service your needs, please contact us for
              further information.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Access control solutions
            </h3>
            <p className="text-md text-white pb-2">
              We have extensive experience in developing custom access control
              solutions to meet your business needs, from Automatic gates to
              Secure line for foyer entries and biometric solutions that keep
              your property secure and provide real time Status of staffing,
              contractors, and visitor logs.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Upgrades and integrations
            </h3>
            <p className="text-md text-white pb-2">
              We can assist in the expansion or upgrade of your existing system.
              Providing expertise in all facets of technology and help develop a
              cost-effective solution that meets with your business objectives.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              CCTV Installations
            </h3>
            <p className="text-md text-white pb-2">
              Residential and commercial applications are often changing, and we
              can provide expertise to ensure that property is maintained and
              able to serve your individual requirements. Our technical staff
              will come to you and provide a tailored solution as well as
              provide advice around the placement, type, and coverage to provide
              the best outcomes for your project.
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

export default TechnicalServices;
