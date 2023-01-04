import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Email, Phone } from "@carbon/icons-react";
import SEO from "../components/Seo";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Contact = () => {
  const [agreed, setAgreed] = useState(false);
  return (
    <Layout>
      <SEO title= "Contact" slug="/contact"/>
      <div className="bg-gray-100 py-16 overflow-hidden sm:px-6 lg:px-8 lg:py-24 lg:pt-36">
        <div className="relative mx-auto max-w-screen-2xl lg:grid lg:grid-cols-5">
          <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:col-span-2 lg:px-8 xl:pr-12">
            <h2 className="text-3xl font-bold tracking-tight text-kss-text sm:text-4xl">
              Contact KSS
            </h2>
            <p className="mt-4 pb-2 text-lg leading-6 text-kss-text">
              We provide security services 24 hours per day, every day of the
              year. This means that you can contact us any time to discuss your
              security needs.
            </p>
            <p className="mt-4 pb-2 text-lg leading-6 text-kss-text">
              Our CEO or Operations Manager will generally answer the 24 hour
              response phone number between 7am and 6pm. At all other times, you
              will be able to speak to one of our patrol drivers who can take
              your details and provide them to our CEO and Operations Manager.
            </p>
            <p className="mt-4 pb-2 text-lg leading-6 text-kss-text">
              Any urgent enquiries from new clients will receive a response from
              our CEO or Operations Manager within an hour of us receiving your
              call.
            </p>
            <p className="mt-4 pb-2 text-lg leading-6 text-kss-text">
              All non-urgent enquiries from new clients will receive a response
              from our CEO or Operations Manager within 24 hours.
            </p>
            <div className="pt-12">
              <dt className="sr-only">Postal address</dt>
              <dd>
                <p className="text-kss-text text-lg">GPO Box 550</p>
                <p className="text-kss-text text-lg">Hobart, 7001</p>
              </dd>
            </div>
            <div className="mt-6">
              <dt className="sr-only">Phone number</dt>
              <dd className="flex">
                <Phone
                  className="h-6 w-6 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a href="tel:0408303603" className="ml-3 text-kss-text text-lg">0408 303 603</a>
              </dd>
            </div>
            <div className="mt-3">
              <dt className="sr-only">Email</dt>
              <dd className="flex">
                <Email
                  className="h-6 w-6 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a href="mailto:info@kevlarsecuritysolutions.com.au" className="ml-3 text-kss-text text-lg">info@kevlarsecuritysolutions.com.au</a>
              </dd>
            </div>
            <p className="mt-6 text-base text-kss-text">
              Looking for careers?{' '}
              <Link to="/employment/expression-of-interest" className="font-medium text-gray-700 underline">
                View all job openings
              </Link>
              .
            </p>
          </div>
          <div className="bg-white py-12 px-4 sm:px-6 lg:col-span-3 lg:py-16 lg:px-8 xl:pl-12">
            <form
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300 "
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300 "
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300 "
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300 "
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300 "
                    placeholder=""
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Brief description of services
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border border-gray-300 "
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className={classNames(
                        agreed ? "bg-black" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                      )}
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          agreed ? "translate-x-5" : "translate-x-0",
                          "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-kss-text">
                      By selecting this, you agree to the{" "}
                      <a
                        href="https://assets.ctfassets.net/lfrbwr0lmnkj/3m0WHtRL8hkn1smxmlVSUP/61e35e80c092c5b877c66bdfbb5c0ee6/terms.pdf"
                        target="blank"
                        className="font-medium text-gray-700 underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://assets.ctfassets.net/lfrbwr0lmnkj/3m0WHtRL8hkn1smxmlVSUP/61e35e80c092c5b877c66bdfbb5c0ee6/terms.pdf"
                        target="blank"
                        className="font-medium text-gray-700 underline"
                      >
                        Terms of Use
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent  shadow-sm text-base font-medium text-white bg-black hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
