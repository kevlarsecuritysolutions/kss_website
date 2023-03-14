import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[2000]" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-[2000] overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-md bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <a href="https://www.facebook.com/ksshobart/" target="blank" className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300">
                      <div className=" flex h-36 w-36 items-center justify-center">
                        <StaticImage src="https://images.ctfassets.net/lfrbwr0lmnkj/7oCyHoNOtF0RuIEsUnUCdJ/9a57264df3c0391d0c115be282fd6217/facebook.png" />
                      </div>
                      <div className="">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Find Us On Facebook
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Stay up to date with Kevlar Security Solutions on
                            Facebook
                          </p>
                        </div>
                      </div>
                    </a>
                    <a href="http://securityalarmshobart.com.au/" target="blank" className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300">
                      <div className=" flex h-36 w-36 items-center justify-center">
                        <StaticImage src="https://images.ctfassets.net/lfrbwr0lmnkj/5QirSErq7Qv3NxHN3O3Hkk/614c37b52766e2e9dc33b6fa315cdf7b/golden-electronics.png" />
                      </div>
                      <div className="">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Golden Electronics
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Golden Electronics is Tasmania's longest established
                            A grade ASIAL accredited monitoring centre.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a href="https://www.asial.com.au/" target="blank" className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300">
                      <div className=" flex h-36 w-36 items-center justify-center">
                        <StaticImage src="https://images.ctfassets.net/lfrbwr0lmnkj/3fG8bMDRK2J18l4JX5vId1/b33dff432b13dec0407f0e6a988595cf/ASIAL.png" />
                      </div>
                      <div className="">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          ASIAL
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Kevlar Security Solutions Pty Ltd is a member of the
                            Australian Security Industry Association Limited.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a href="https://carbonneutral.com.au/" target="blank" className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300">
                      <div className=" flex h-36 w-36 items-center justify-center">
                        <StaticImage src="https://images.ctfassets.net/lfrbwr0lmnkj/6VhBDUNmlYIjKWTfxgtBki/c90980272dfb6aaa826a2758cd126896/carbon-neutral.png" />
                      </div>
                      <div className="">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Carbon Neutral
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            We're proudly offsetting our fleet vehicle carbon
                            emmissions through Carbon Neutral Pty Ltd.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a href="https://crimestoppers.com.au/" target="blank" className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300">
                      <div className=" flex h-36 w-36 items-center justify-center">
                        <StaticImage src="https://images.ctfassets.net/lfrbwr0lmnkj/7mLYuHaqVhR5ml0oDInXm4/d766b5b15de06e08edd5db6a8163f552/crime-stoppers.png" />
                      </div>
                      <div className="">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Crime Stoppers
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Crime Stoppers is an integral part of policing with
                            the information gathered and supplied by the
                            community essential to crime fighting and crime
                            prevention.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a href="https://www.facebook.com/Tas.Police" target="blank" className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300">
                      <div className=" flex h-36 w-36 items-center justify-center">
                        <StaticImage src="https://images.ctfassets.net/lfrbwr0lmnkj/AgnnfzXYxczmnEWiBdP3Y/233c4af37b442c80c289dade55b394b2/TasPolice__1_.png" />
                      </div>
                      <div className="">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Tasmania Police
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Tasmania Police aims to reduce the impact of crime,
                            improve the level of public safety and traffic law
                            compliance, and enhance emergency management and
                            security capabilities.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="mt-12">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <section className="bg-gradient-to-b from-[#002034] to-[#03070a] overflow-x-hidden pt-8">
        <div className="grid grid-cols-1 px-4 lg:grid-cols-4 gap-12 max-w-7xl mx-auto py-8">
          <Link to="/" className="flex gap-2 justify-center lg:justify-start">
            <StaticImage
              src="../assets/images/kss-logo-white.png"
              className="!w-10 !h-12"
            />
            <div className="flex flex-col justify-start">
              <p className="text-2xl text-white">KEVLAR</p>
              <p className="text-sm text-white -mt-2">SECURITY SOLUTIONS</p>
            </div>
          </Link>
          <div className="hidden lg:grid grid grid-cols-2">
            <div className="flex flex-col">
              <Link
                to="/"
                className="text-kss-text-dark hover:text-white text-sm pb-2"
              >
                Home
              </Link>
              <AnchorLink
                to="/#services"
                className="text-kss-text-dark hover:text-white text-sm pb-2"
              >
                Services
              </AnchorLink>
              <AnchorLink
                to="/#clients"
                className="text-kss-text-dark hover:text-white text-sm pb-2"
              >
                Clients
              </AnchorLink>
              <button
                onClick={() => setOpen(true)}
                className="text-kss-text-dark hover:text-white text-sm pb-2 text-left"
              >
                Links
              </button>
            </div>
            <div className="flex flex-col">
              <Link
                to="/employment/information"
                className="text-kss-text-dark hover:text-white text-sm pb-2"
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="text-kss-text-dark hover:text-white text-sm pb-2"
              >
                Contact
              </Link>
              <a
                target="blank"
                href="https://assets.ctfassets.net/lfrbwr0lmnkj/3m0WHtRL8hkn1smxmlVSUP/61e35e80c092c5b877c66bdfbb5c0ee6/terms.pdf"
                className="text-kss-text-dark hover:text-white text-sm pb-2"
              >
                Terms & Conditions
              </a>
              <a
                target="blank"
                href="https://assets.ctfassets.net/lfrbwr0lmnkj/3m0WHtRL8hkn1smxmlVSUP/61e35e80c092c5b877c66bdfbb5c0ee6/terms.pdf"
                className="text-kss-text-dark hover:text-white text-sm pb-2"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex justify-center hidden lg:flex">
            <StaticImage
              src="../assets/images/accreditations-color.png"
              className="!w-60 !h-10"
            />
          </div>
          <div className="hidden lg:flex flex flex-col">
            <Link className="text-kss-text-dark hover:text-white text-sm pb-2">
              GPO Box 550, HOBART 7001
            </Link>
            <Link className="text-kss-text-dark hover:text-white text-sm pb-2">
              Phone: 0408 303 603
            </Link>
            <Link className="text-kss-text-dark hover:text-white text-sm pb-2">
              Email: info@kevlarsecuritysolutions.com.au
            </Link>
          </div>
        </div>
        <div className=" flex items-center mx-4 lg:mx-auto max-w-7xl mx-auto border-t border-gray-50/40 ">
          <div class="mt-2 md:mt-0 md:order-1">
            <p class="text-xs py-2 tracking-tight text-kss-text-dark">
              &copy; 2022 Kevlar Security Solutions Pty Ltd. All rights
              reserved. | Master Licence No. 19859 | ABN:{" "}
              <a
                className="hover:underline"
                target="blank"
                href="https://abr.business.gov.au/ABN/View?id=51154971641"
              >
                51 154 971 641
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
