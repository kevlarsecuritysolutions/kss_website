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
      <SEO title="Armed Cash in Transit" slug="/services/armed-cash" />

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              CASH IN TRANSIT SERVICES
            </h2>
            <p className="text-md text-white pb-4">
              Many businesses, both large and small, are required to transport
              cash to and from their banking institution. Unfortunately, staff
              members transporting cash to and from a business are at risk of
              both targeted attacks or random opportunistic thefts and violence.
              Our armed cash-in-transit service provides business owners with
              peace of mind, both for the welfare of their staff, and the
              protection of their hard-earned money.
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
            {" "}
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/2fUxlGvGXIsFuOPs5LRSdr/23b3d37b343e97d2f48ffab099cd42f7/kss_website2022-85.jpg"
              className="absolute -bottom-48"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/7mMwKwV9x2NrdssWHbhIv2/20b61b759a629bebcf5fca6da31c0832/kss_website2022-62.jpg"
              className="object-cover absolute inset-0"
            />
          </div>
          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <h3 className="text-white text-xl font-semibold pt-2 pb-2">
              Overt
            </h3>
            <p className="text-md text-white pb-2">
              Our highly visible security officers will make your day-to-day
              banking secure and efficient for your business. We currently
              operate services 7 days a week in Southern Tasmania and your
              collection and change orders can be tailored to suit your business
              requirements.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Covert
            </h3>
            <p className="text-md text-white pb-2">
              When you want to ensure that business revenue is moved discreetly,
              our Covert officers can provide this service whilst providing the
              safety and security of your staff and customers and ensuring they
              are not exposed to unnecessary risks associated with movement of
              assets.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">
              Armed Cash Movement
            </h3>
            <p className="text-md text-white pb-2">
              Visual presence is a powerful tool in deterring unwanted
              behaviour. Backed up by the ability to defend your assets our
              Armed guards are trained to a high standard and will ensure the
              security of your assets.
            </p>
            <p className="text-md text-white pb-2">
              Please contact us for a confidential discussion on how we can
              provide solutions for your business needs.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArmedCash;
