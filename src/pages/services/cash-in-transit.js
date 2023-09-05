import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../../assets/svg/hero-angle2";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

const ArmedCash = () => {
  return (
    <Layout>
      <SEO title="Cash in Transit" slug="/services/cash-in-transit" />

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 xl:pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              CASH IN TRANSIT SERVICES
            </h2>
            <p className="text-md text-white pb-4">
              Many businesses, both large and small, are required to transport
              cash to and from their banking institution.
            </p>
            <p className="text-md text-white pb-4">
              Unfortunately, staff members transporting cash to and from a
              business are at risk of both targeted attacks or random
              opportunistic thefts and violence.
            </p>
            <p className="text-md text-white pb-4">
              Our cash-in-transit security officers provide business owners with
              peace of mind, both for the welfare of their staff, and the
              protection of their hard-earned money.
            </p>
            <p className="text-md text-white pb-4">
              We can transport end of day or end of week cash deposits to your
              financial institution, pick up daily or weekly change floats from
              your financial institution, or provide a return service.
            </p>
            <p className="text-md text-white pb-4">
              We can also provide ad-hoc services for events or businesses with
              variable cash-in-transit needs, and services specifically catering
              for the transport of valuable non-cash items.
            </p>
            <p className="text-md text-white pb-4">
              The specific services we provide can be adjusted to accommodate
              for the nature and location of your business, total value of cash
              or other items to be transported and various other factors. Learn
              more about our specific Cash in Transit services below.
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
          <div className="hidden lg:block relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 z-10"></div>
            {" "}
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/2fUxlGvGXIsFuOPs5LRSdr/23b3d37b343e97d2f48ffab099cd42f7/kss_website2022-85.jpg"
              className="!absolute !-bottom-48"
              alt="cash in transit services"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/7mMwKwV9x2NrdssWHbhIv2/20b61b759a629bebcf5fca6da31c0832/kss_website2022-62.jpg"
              className="!object-cover !absolute !inset-0"
              alt="cash in transit services"
            />
          </div>
          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <h3 className="text-white text-xl font-semibold pt-2 pb-4">
              Overt Services
            </h3>
            <p className="text-md text-white pb-4">
              We utilise highly visible security vehicles and uniformed security
              officers to provide overt cash transport services. Overt services
              are often preferred for cash transport services in shopping
              centres and other public places, as the visibility and attention
              acts as a strong deterrent for opportunistic thieves.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Covert Services
            </h3>
            <p className="text-md text-white pb-4">
              Some businesses and organisations prefer to utilise covert cash
              and valuables transport services where the presence of security
              may be confronting (for example, at schools or multicultural
              centres), or for the movement of high value or sensitive items. We
              utilise dedicated unmarked vehicles and provide unmarked attire
              for our security officers conducting covert cash and valuables
              transport services.
            </p>
            <p className="text-md text-white pb-4">
              In most cases, our security officers are legally required to
              display their security licence for covert cash and valuables
              transport services. In unique circumstances where the display of a
              security licence may be inappropriate, we can work with your
              business to find alternative solutions (including, where
              appropriate, applying for a commissioner’s exemption to the legal
              requirement to display a security licence).
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Armed Cash Movement
            </h3>
            <p className="text-md text-white pb-4">
              We can provide armed cash and valuables transport services to
              clients who require a strong visual security presence during the
              transport process. Our armed guards are fully qualified and
              licensed, and complete regular professional development activities
              to ensure that firearms are used safely and in accordance with
              industry best practice at all times.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArmedCash;
