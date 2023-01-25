import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Switch } from "@headlessui/react";
import NavigationLight from "../../components/NavigationLight";
import Footer from "../../components/Footer";
import BackToTopBtn from "../../components/BackToTopBtn";
import { Checkmark, Close } from "@carbon/icons-react";

import { useForm } from "@formspree/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Form = () => {
  const [agreed, setAgreed] = useState(false);
  const [state, handleSubmit] = useForm("xlekdlrp");
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
    setDragOver(false);
  };
  return (
    <>
      <NavigationLight />
      <main>
        <section className="bg-gray-100 pb-12">
          <div className="max-w-5xl mx-auto pt-24 pb-12 px-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-12 pb-4">
              Join the Kevlar Team
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              We are always on the look out for the newest members of the team.
            </p>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Complete all required fields below and we will contact you should
              we have any availabilities that match your skillset.
            </p>
          </div>
          <section className="max-w-5xl mx-auto py-12 px-4 lg:px-12 bg-white shadow-xl">
            <form
              className="space-y-8 divide-y divide-gray-200"
              onSubmit={handleSubmit}
            >
              <div className="space-y-8 divide-y divide-gray-200">
                <div className="pt-8">
                  <div>
                    <h3 className="text-xl font-semibold leading-6 text-gray-900">
                      Personal Information
                    </h3>
                    <p className="mt-4 text-lg leading-6 text-gray-500">
                      Use a permanent address where you can receive mail.
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
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
                          className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
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
                          className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <div className="mt-1">
                        <input
                          id="phone"
                          name="phone"
                          type="phone"
                          autoComplete="phone"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300"
                        />
                      </div>
                    </div>
                    {/* 
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <div className="mt-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="shadow-sm  focus:border-black block w-full sm:text-sm border-gray-300 "
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div> */}

                    <div className="sm:col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="state"
                          id="state"
                          autoComplete="address-level1"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Postal code
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <div>
                    <h3 className="text-xl font-semibold leading-6 text-gray-900 pb-4">
                      Credentials / Certifications
                    </h3>
                  </div>
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Upload your current CV
                    </label>
                    {file ? (
                      <div>
                        {" "}
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed ">
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 fill-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6-5.997zM5.83 8H9V4.83L5.83 8zM11 4v5a1 1 0 0 1-1 1H5v10h14V4h-8z" />
                            </svg>
                            <p className="text-xs text-gray-500">{file.name}</p>
                            <button
                              onClick={handleRemoveFile}
                              className="text-xs text-red-400 hover:text-red-500"
                            >
                              remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed "
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                      >
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="resume"
                              className="relative cursor-pointer bg-white  font-medium text-kss-blue hover:text-kss-blue focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-kss-blue"
                            >
                              <span>Upload a file</span>
                              <input
                                id="resume"
                                name="resume"
                                type="file"
                                className="sr-only"
                                onChange={handleFileChange}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, PDF, DOC up to 10MB
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-4 pt-12">
                    <label
                      htmlFor="escurity-licence-number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tasmanian Security Licence Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="escurity-licence-number"
                        name="escurity-licence-number"
                        type="text"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <fieldset>
                      <legend className="sr-only">By Email</legend>
                      <div
                        className="text-base font-medium text-gray-900"
                        aria-hidden="true"
                      >
                        Select all that apply
                      </div>
                      <div className="mt-4 space-y-4">
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="drivers-licence"
                              name="drivers-licence"
                              type="checkbox"
                              className=" h-4 w-4 text-kss-blue border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="drivers-licence"
                              className="font-medium text-gray-700"
                            >
                              Active Drivers License
                            </label>
                          </div>
                        </div>
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="white-card"
                              name="white-card"
                              type="checkbox"
                              className=" h-4 w-4 text-kss-blue border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="white-card"
                              className="font-medium text-gray-700"
                            >
                              White Card in Construction
                            </label>
                          </div>
                        </div>
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="wwvp-check"
                              name="wwvp-check"
                              type="checkbox"
                              className=" h-4 w-4 text-kss-blue border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="wwvp-check"
                              className="font-medium text-gray-700"
                            >
                              Current WWVP Check
                            </label>
                          </div>
                        </div>
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="traffic-control"
                              name="traffic-control"
                              type="checkbox"
                              className=" h-4 w-4 text-kss-blue border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="traffic-control"
                              className="font-medium text-gray-700"
                            >
                              Traffic Control Qualification
                            </label>
                          </div>
                        </div>
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="firearms-licence"
                              name="firearms-licence"
                              type="checkbox"
                              className=" h-4 w-4 text-kss-blue border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="firearms-licence"
                              className="font-medium text-gray-700"
                            >
                              Firearms License
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="mt-6">
                      <legend className="text-xl font-semibold leading-6 text-gray-900">
                        Additional Information
                      </legend>
                      <p className="mt-4 text-lg leading-6 text-gray-500 mb-4">
                        Please include additional qualifications/ training that
                        you have completed that may be relevant to the position
                      </p>
                      <div className="sm:col-span-4">
                        <div className="mt-1">
                          <textarea
                            id="message"
                            name="message"
                            className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border border-gray-300 h-36"
                          />
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 pt-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      name="terms-agreed"
                      value={agreed}
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
                    <p className="text-base text-gray-500">
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
                        Cookie Policy
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
          </section>
        </section>
      </main>
      <BackToTopBtn />
      <Footer />
    </>
  );
};

export default Form;
