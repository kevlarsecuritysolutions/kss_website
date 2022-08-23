import React from "react";
import Layout from "../../components/Layout";

const Form = () => {
  return (
    <Layout>
      <section className="bg-gray-50">
        <section className="max-w-7xl mx-auto py-12 px-4">
          <h2 className="text-4xl font-heading text-kss-text pt-12 pb-4">
            Join the Kevlar Team
          </h2>
          <p className="pb-4 font-body text-kss-text text-md">
            We are always on the look out for the newest members of the team.
          </p>
          <p className="pb-4 font-body text-kss-text text-md">
            Complete all required fields below and we will contact you should we
            have any availabilities that match your skillset.
          </p>
          <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
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
                        className="shadow-sm focus:ring-0 focus:border-black block w-full sm:text-sm border-gray-300 "
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
                        className="shadow-sm focus:ring-0 focus:border-black block w-full sm:text-sm border-gray-300 "
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
                        className="shadow-sm focus:ring-0 focus:border-black block w-full sm:text-sm border-gray-300 "
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="shadow-sm focus:ring-0 focus:border-black block w-full sm:text-sm border-gray-300 "
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
                        className="shadow-sm focus:ring-0 focus:border-black block w-full sm:text-sm border-gray-300 "
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
                        className="shadow-sm focus:ring-0 focus:border-black block w-full sm:text-sm border-gray-300 "
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="shadow-sm focus:ring-0 focus:border-black block w-full sm:text-sm border-gray-300 "
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
                        className="shadow-sm focus:ring-0 focus:border-black block w-full sm:text-sm border-gray-300 "
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Credentials / Certifications
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We'll always let you know about important changes, but you
                    pick what else you want to hear about.
                  </p>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Upload your current CV
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed ">
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
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white  font-medium text-kss-blue hover:text-kss-blue focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-kss-blue"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, PDF, DOC up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4 pt-12">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tasmanian Security Licence Number (Specify if none)
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="shadow-sm focus:ring-0 focus:border-black block w-full sm:text-sm border-gray-300 "
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
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className=" h-4 w-4 text-kss-blue border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="comments"
                            className="font-medium text-gray-700"
                          >
                            Active Drivers License
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className=" h-4 w-4 text-kss-blue border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="candidates"
                            className="font-medium text-gray-700"
                          >
                            White Card in Construction
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className=" h-4 w-4 text-kss-blue border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="offers"
                            className="font-medium text-gray-700"
                          >
                            Current WWVP Check
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className=" h-4 w-4 text-kss-blue border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="offers"
                            className="font-medium text-gray-700"
                          >
                            Traffic Control Qualification
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className=" h-4 w-4 text-kss-blue border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="offers"
                            className="font-medium text-gray-700"
                          >
                            Firearms License
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mt-6">
                    <legend className="contents text-base font-medium text-gray-900">
                      Additional Information
                    </legend>
                    <p className="text-sm text-gray-500">
                      Please include additional qualifications/ training that
                      you have completed that may be relevant to the position
                    </p>
                    <div className="sm:col-span-4">
                      <div className="mt-1">
                        <textarea
                          id="email"
                          name="email"
                          autoComplete="email"
                          className="shadow-sm focus:ring-0 focus:border-black block w-full sm:text-sm border-gray-300  h-24"
                        />
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center px-6 border border-transparent shadow-sm text-sm font-medium text-white hover:bg-opacity-80 py-3 bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </section>
    </Layout>
  );
};

export default Form;
