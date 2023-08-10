import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Email, Phone, Checkmark, Close, Location } from "@carbon/icons-react";
import SEO from "../components/Seo";
import NavigationLight from "../components/NavigationLight";
import Footer from "../components/Footer";
import BackToTopBtn from "../components/BackToTopBtn";
import { useForm } from "@formspree/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Contact = () => {
  const [state, handleSubmit] = useForm("mnqynzap");
  const [agreed, setAgreed] = useState(false);
  return (
    <>
      <NavigationLight />
      <main>
        <SEO title="Contact" slug="/contact" />
        <div className="bg-gray-100 py-16 overflow-hidden sm:px-6 lg:px-8 lg:py-24 lg:pt-36">
          <div className="relative mx-auto max-w-screen-2xl lg:grid lg:grid-cols-5">
            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:col-span-2 lg:px-8 xl:pr-12">
              <h2 className="text-3xl font-bold tracking-tight text-kss-text sm:text-4xl">
                Contact KSS
              </h2>
              <p className="mt-4 pb-2 text-lg leading-6 text-kss-text">
                We provide security services 24 hours per day, every day of the
                year. This means that you can contact us any time to discuss
                your security needs.
              </p>
              <div className="mt-6">
                <dt className="sr-only">Postal Address</dt>
                <dd className="flex">
                  <Location
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:0408303603"
                    className="ml-3 text-kss-text text-lg"
                  >
                    GPO Box 550 Hobart, 7001
                  </a>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <Phone
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:0408303603"
                    className="ml-3 text-kss-text text-lg"
                  >
                    0408 303 603
                  </a>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <Email
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:info@kevlarsecuritysolutions.com.au"
                    className="ml-3 text-kss-text text-lg"
                  >
                    info@kevlarsecuritysolutions.com.au
                  </a>
                </dd>
              </div>
              <p className="mt-6 text-base text-kss-text">
                Looking for careers?{" "}
                <Link
                  to="/employment/expression-of-interest"
                  className="font-medium text-gray-700 underline"
                >
                  View all job openings
                </Link>
                .
              </p>
              <p className="mt-6 text-base text-kss-text">
                We'd love to hear from you.{" "}
                <Link
                  to="/feedback"
                  className="font-medium text-gray-700 underline"
                >
                  Provide feedback on our services
                </Link>
                .
              </p>
            </div>
            <div className="bg-white shadow-xl py-12 px-4 sm:px-6 lg:col-span-3 lg:py-16 lg:px-8 xl:pl-12">
              <form
                onSubmit={handleSubmit}
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
                      required
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
                      required
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
                      required
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
                    Phone number
                  </label>
                  <div className="mt-1">
                    <input
                      required
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
                    Brief description of your enquiry
                  </label>
                  <div className="mt-1">
                    <textarea
                      required
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
                        name="agreed-terms"
                        value={agreed}
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
                        <Link
                          to="/privacy-policy"
                          target="blank"
                          className="font-medium text-gray-700 underline"
                        >
                          Privacy Policy
                        </Link>{" "}
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
                  {state.submitting ? (
                    <div>
                      {" "}
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent  shadow-sm text-base font-medium text-white bg-black hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                      >
                        <svg
                          className="fill-white animate-spin mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z" />
                        </svg>{" "}
                        Submitting...
                      </button>
                    </div>
                  ) : (
                    <div>
                      {" "}
                      <button
                        disabled = {agreed === false}
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent  shadow-sm text-base font-medium text-white bg-black hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                      >
                        Talk to a Security Professional
                      </button>
                    </div>
                  )}
                  {state.succeeded ? (
                    <div className="w-full">
                      {" "}
                      <div className="w-full my-4 bg-gradient-to-t from-black to-[#002340] p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <Checkmark
                              className="h-5 w-5 text-white"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-white">
                              Your submission has been received
                            </p>
                          </div>
                          <div className="ml-auto pl-3">
                            <div className="-mx-1.5 -my-1.5">
                              <button
                                type="button"
                                onClick={() => window.location.reload(false)}
                                className="inline-flex p-1.5 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-50 focus:ring-black-600"
                              >
                                <span className="sr-only">Dismiss</span>
                                <Close className="h-5 w-5" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTopBtn />
    </>
  );
};

export default Contact;
