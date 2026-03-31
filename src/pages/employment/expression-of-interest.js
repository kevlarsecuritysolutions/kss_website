import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import BackToTopBtn from "../../components/BackToTopBtn";
import { Switch } from "@headlessui/react";
import { Checkmark, Close } from "@carbon/icons-react";
import SEO from "../../components/Seo";

import { useForm } from "@formspree/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Form = () => {
  const [agreed, setAgreed] = useState(false);
  const [state, handleSubmit] = useForm("xlekdlrp");
  const [noCert, handleNoCert] = useState(false);

  return (
    <>
      <Navigation />
      <SEO
        title="Join the KSS Team"
        slug="/employment/expression-of-interest"
      />
      <main>
        <div className="bg-gradient-to-bl from-[#002034] to-black min-h-screen py-16 overflow-hidden sm:px-6 lg:px-8 lg:py-24 lg:pt-36">
          <div className="relative mx-auto max-w-5xl px-4">
            <div className="mb-10">
              <div className="h-1 mb-6 bg-white w-12" />
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">
                Join the KSS Team
              </h1>
              <p className="mt-4 text-lg leading-6 text-gray-300">
                We are always on the lookout for new members to join the KSS team.
              </p>
              <p className="mt-2 text-lg leading-6 text-gray-300">
                Complete all required fields below and we will contact you should
                we have any availabilities that match your skillset.
              </p>
            </div>

            <form
              className="space-y-10"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Personal Information
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Use a permanent address where you can receive mail.
                </p>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                      Phone number
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="tel"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-300">
                      Street address
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-300">
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-300">
                      State
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="address-level1"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-300">
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience / Qualifications */}
              <div className="border-t border-white/10 pt-10">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Experience / Qualifications
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload your current CV and copies of your qualifications
                    </label>
                    <input
                      type="file"
                      multiple
                      id="resume"
                      name="resume"
                      className="block text-gray-300 text-sm file:mr-4 file:py-2 file:px-4 file:border file:border-white/30 file:bg-transparent file:text-white file:text-sm file:font-medium hover:file:border-white/60"
                    />
                  </div>

                  <div>
                    <label htmlFor="security-licence-number" className="block text-sm font-medium text-gray-300">
                      Tasmanian Security Licence Number
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        id="security-licence-number"
                        name="security-licence-number"
                        type="text"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cert2" className="block text-sm font-medium text-gray-300">
                      Do you currently have a Certificate II in Security Operations?
                    </label>
                    <div className="mt-1">
                      <select
                        id="cert2"
                        name="cert2"
                        className="py-3 px-4 block shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-[#001525] text-white"
                        defaultValue="Yes"
                        onChange={() => handleNoCert(!noCert)}
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      {noCert && (
                        <div className="mt-3 p-4 border border-red-500/30 bg-red-900/20">
                          <p className="text-red-400 text-sm">
                            To work in the security industry, you must first
                            complete a Certificate II in Security Operations
                            (CPPSEC20218). KSS recommends{" "}
                            <a
                              href="https://asset-training.com.au/"
                              className="underline hover:opacity-75"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Asset Training
                            </a>{" "}
                            as Tasmania's leading provider of nationally
                            recognised security training.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-300 mb-4">
                      Select all that apply
                    </p>
                    <div className="space-y-3">
                      {[
                        { id: "drivers-licence", label: "Current Driver Licence" },
                        { id: "white-card", label: "Construction White Card" },
                        { id: "wwvp-check", label: "Current WWVP Check" },
                        { id: "traffic-control", label: "Traffic Control Qualification" },
                        { id: "firearms-licence", label: "Security Firearms Licence" },
                      ].map(({ id, label }) => (
                        <div key={id} className="flex items-center gap-3">
                          <input
                            id={id}
                            name={id}
                            type="checkbox"
                            className="h-4 w-4 border-white/30 bg-transparent text-kss-blue focus:ring-blue-400"
                          />
                          <label htmlFor={id} className="text-sm text-gray-300">
                            {label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="border-t border-white/10 pt-10">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Additional Information
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Please include additional qualifications / training that you
                  have completed that may be relevant to the position.
                </p>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                />
              </div>

              {/* Privacy toggle */}
              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      name="terms-agreed"
                      value={agreed}
                      className={classNames(
                        agreed ? "bg-blue-500" : "bg-gray-700",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900"
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
                    <p className="text-base text-gray-300">
                      By submitting this form, you agree to the terms outlined
                      in our{" "}
                      <Link
                        to="/privacy-policy"
                        target="_blank"
                        className="font-medium text-blue-400 hover:text-blue-300 underline"
                      >
                        Privacy Policy.
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                {state.submitting ? (
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-white transition text-white bg-transparent hover:bg-white hover:text-black text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900"
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
                    </svg>
                    Submitting...
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!agreed || noCert}
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-white transition text-white bg-transparent hover:bg-white hover:text-black text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Submit Application
                  </button>
                )}
                {state.succeeded && (
                  <div className="w-full mt-6 bg-gradient-to-r from-blue-900/50 to-transparent border border-blue-500/30 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Checkmark className="h-5 w-5 text-blue-400" aria-hidden="true" />
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
                            className="inline-flex p-1.5 text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
                          >
                            <span className="sr-only">Dismiss</span>
                            <Close className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
      <BackToTopBtn />
      <Footer />
    </>
  );
};

export default Form;
