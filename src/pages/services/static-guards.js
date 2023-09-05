import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import HeroAngle from "../../assets/svg/hero-angle2";

import { ArrowRight, Checkmark, Close } from "@carbon/icons-react";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

const StaticGuards = () => {
  return (
    <Layout>
      <SEO title="Static Guards" slug="/services/static-guards" />

      <section className="bg-gradient-to-bl from-[#002034] to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 xl:pt-36 pb-24">
            <h2 className="text-white font-bold text-3xl pb-8">
              STATIC GUARDS
            </h2>
            <p className="text-md text-white pb-4">
              Our static guards are highly trained with a particular focus on
              verbal de-escalation, customer service and threat detection
              skills. This diverse skillset ensures that our static guards can
              assist in a variety of roles including overnight asset protection,
              retail theft deterrence and sensitive events such as employment
              terminations or community consultation meetings.
            </p>
            <p className="text-md text-white pb-4">
              Our static guard services can be utilised by government, business and individuals in a range of circumstances:
            </p>
            <ul className="text-md text-white list-disc pl-4 pb-4">
              <li>
                <p>Loss Prevention</p>
              </li>
              <li>
                <p>Overnight Property Protection</p>
              </li>
              <li>
                <p>Anti-social Behaviour deterrence</p>
              </li>
              <li>
                <p>Staff Safety</p>
              </li>
            </ul>
            <p className="text-md text-white pb-4">
              Learn more about our static guard services below or contact us to
              find out which of our services would best suit your security
              needs.
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
              src="https://images.ctfassets.net/lfrbwr0lmnkj/1RRoRFQyNDMA2IzrwJjl2J/fc41d9d79f212ae7fc30e870191c1113/kss_website2022-135.jpg"
              className="!absolute !bottom-0"
              alt="static guards"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto mx-4 lg:mx-0">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/7KaNa4XRrd0DQaqrXcYL7c/df4cf6a9bd05d91d05962ff1f58b18ae/kss_website2022-59.jpg"
              className="!object-cover !absolute !inset-0"
              alt="static guards"
            />
          </div>

          <div className="px-4 lg:pl-24 lg:pr-24 pt-24 pb-24">
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Loss Prevention
            </h3>
            <p className="text-md text-white pb-4">
              Loss prevention security officers are particularly important for
              the retail sector, providing a visible deterrent for would-be
              thieves and a dedicated “observe and report” response to any
              suspicious behaviour. Our static guards are trained in verbal
              de-escalation techniques to dramatically decrease the risk of
              customers, staff or our officers from having to engage in any
              physical interactions.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Overnight Property Protection
            </h3>
            <p className="text-md text-white pb-4">
              Both businesses and individuals may encounter situations where a
              static guard is required to assist with protection of property
              where security infrastructure has been compromised. Our static
              guards can assist with protecting infrastructure and equipment at
              construction sites, preventing access to unsecure buildings and
              reporting suspicious or anti-social behaviour in real-time.
            </p>
            <h3 className="text-white text-xl font-semibold pt-4 pb-4">
              Anti-social behaviour deterrence
            </h3>
            <p className="text-md text-white pb-4">
              There are many situations where anti-social or threatening
              behaviour may arise, and this can lead to fear and uncertainty for
              staff, customers and other members of the public. Our static
              guards can provide a comforting presence and subtle deterrent for
              any anti-social or threatening behaviour in a range of situations
              including:
            </p>
            <ul className="text-md pb-4 text-white list-disc pl-4">
              <li>
                <p>
                  Accompanying staff members to their vehicles at the end of a
                  work day
                </p>
              </li>
              <li>
                <p>
                  Attending community meetings where topics may generate tense
                  or emotional responses
                </p>
              </li>
              <li>
                <p>
                  Preventing unauthorised individuals from attending
                  invitation-only events
                </p>
              </li>
              <li>
                <p>
                  Providing a visible presence at locations which have recently
                  experienced concerning behaviour or incidents
                </p>
              </li>
            </ul>
            {/* <h3 className="text-white text-xl font-semibold pt-2 pb-2">
              Staff Safety
            </h3>
            <p className="text-md text-white pb-2">
              Our static guards are highly trained with a particular focus on
              verbal de-escalation, customer service and threat detection
              skills. This diverse skillset ensures that our static guards can
              assist in a variety of roles including retail theft deterrence,
              overnight asset protection, and situations where tension and
              conflict may arise such as employment terminations or community
              consultation meetings.
            </p> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StaticGuards;
