import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Phone, Email } from "@carbon/icons-react";
import { LocationCompany } from "@carbon/icons-react";

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
                    <a
                      href="https://www.facebook.com/ksshobart/"
                      target="blank"
                      className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300"
                      loading="eager"
                    >
                      <div className=" w-full flex items-center justify-center">
                        <StaticImage
                          src="https://images.ctfassets.net/lfrbwr0lmnkj/7oCyHoNOtF0RuIEsUnUCdJ/9a57264df3c0391d0c115be282fd6217/facebook.png"
                          alt="go to facebook"
                        />
                      </div>
                      <div className="">
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 text-center">
                            Find us on Facebook to stay up to date with our
                            latest news and events.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://asset-training.com.au/"
                      target="blank"
                      className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300"
                      loading="eager"
                    >
                      <div className=" flex items-center h-36 justify-center">
                        <StaticImage
                          className="h-36 w-36"
                          objectFit="contain"
                          src="https://images.ctfassets.net/lfrbwr0lmnkj/5j5bXMkMmEwCpyU8U86Yt6/537cd8c1d85af78873e65a1916852f0f/athena-training.png"
                          alt="go to athena training"
                        />
                      </div>
                      <div className="">
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 text-center">
                            To work in the security industry, you must first
                            complete a Certificate II in Security Operations
                            (CPPSEC20218). KSS recommends
                            <a
                              href="https://www.athenatraining.com.au/"
                              className="underline hover:opacity-75 pl-1"
                              target="blank"
                            >
                              Athena Training
                            </a>{" "}
                            as Tasmania’s leading provider of nationally
                            recognised security training.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://www.asial.com.au/"
                      target="blank"
                      className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300"
                      loading="eager"
                    >
                      <div className=" flex items-center h-36 justify-center">
                        <StaticImage
                          className="h-36 w-36"
                          objectFit="contain"
                          src="https://images.ctfassets.net/lfrbwr0lmnkj/3fG8bMDRK2J18l4JX5vId1/b33dff432b13dec0407f0e6a988595cf/ASIAL.png"
                          alt="go to asial"
                        />
                      </div>
                      <div className="">
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 text-center">
                            Kevlar Security Solutions Pty Ltd is a member of the
                            Australian Security Industry Association Limited.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://carbonneutral.com.au/"
                      target="blank"
                      className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300"
                      loading="eager"
                    >
                      <div className=" flex items-center h-36 justify-center">
                        <StaticImage
                          className="h-36 w-36"
                          objectFit="contain"
                          src="https://images.ctfassets.net/lfrbwr0lmnkj/6VhBDUNmlYIjKWTfxgtBki/c90980272dfb6aaa826a2758cd126896/carbon-neutral.png"
                          alt="go to carbon neutral"
                        />
                      </div>
                      <div className="">
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 text-center">
                            We're proudly offsetting our fleet vehicle carbon
                            emmissions through Carbon Neutral Pty Ltd.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://crimestoppers.com.au/"
                      target="blank"
                      className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300"
                      loading="eager"
                    >
                      <div className=" flex items-center h-36 justify-center">
                        <StaticImage
                          className="h-36 w-36"
                          objectFit="contain"
                          src="https://images.ctfassets.net/lfrbwr0lmnkj/7mLYuHaqVhR5ml0oDInXm4/d766b5b15de06e08edd5db6a8163f552/crime-stoppers.png"
                          alt="go to crime stoppers"
                        />
                      </div>
                      <div className="">
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 text-center">
                            Crime Stoppers is an integral part of policing with
                            the information gathered and supplied by the
                            community essential to crime fighting and crime
                            prevention.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/Tas.Police"
                      target="blank"
                      className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300"
                      loading="eager"
                    >
                      <div className=" flex items-center h-36 justify-center">
                        <StaticImage
                          className="h-36 w-36"
                          objectFit="contain"
                          src="https://images.ctfassets.net/lfrbwr0lmnkj/AgnnfzXYxczmnEWiBdP3Y/233c4af37b442c80c289dade55b394b2/TasPolice__1_.png"
                          alt="go to tasmanian police"
                        />
                      </div>
                      <div className="">
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 text-center">
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

      <section className="bg-gradient-to-b from-[#001a2f] to-[#03070a] overflow-x-hidden pt-8">
        <div className="grid grid-cols-1 px-4 lg:grid-cols-4 gap-12 max-w-screen-2xl mx-auto py-8">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex gap-2 justify-center lg:justify-start">
              <StaticImage
                src="../assets/images/kss-logo-white.png"
                className="!w-10 !h-12"
                alt="kss logo"
              />
              <div className="flex flex-col justify-start">
                <p className="text-2xl text-white">KEVLAR</p>
                <p className="text-sm text-white -mt-2">SECURITY SOLUTIONS</p>
              </div>
            </Link>
            <div className="hidden lg:flex justify-start">
              <p className="text-kss-text-dark text-sm pb-2">
                Contact us during business hours 0800-1600 Monday to Friday on{" "}
                <a className="hover:text-white underline" href="tel:0362082777">
                  (03) 6208 2777
                </a>{" "}
              </p>
            </div>
            <div className="flex justify-center lg:hidden px-4 gap-6 pb-4">
              <a href="tel:0362082777" target="blank">
                <Phone className="h-6 w-6 text-white" />
              </a>
              <a
                href="mailto:info@kevlarsecuritysolutions.com.au"
                target="blank"
              >
                <Email className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://www.google.com/maps/place/Kevlar+Security+Solutions+Pty+Ltd/@-42.8435445,147.2880071,17z/data=!3m1!4b1!4m5!3m4!1s0xaa6e74954dbad463:0x5fed1effc80b79a2!8m2!3d-42.8435678!4d147.290211"
                target="blank"
              >
                <LocationCompany className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
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
                to="/company"
                className="text-kss-text-dark hover:text-white text-sm pb-2"
              >
                Company
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
                href="/terms.pdf"
                className="text-kss-text-dark hover:text-white text-sm pb-2"
              >
                Terms & Conditions
              </a>
              <Link
                target="blank"
                to="/privacy-policy"
                className="text-kss-text-dark hover:text-white text-sm pb-2"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex justify-center hidden lg:flex lg:col-span-2">
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center h-28 w-28 relative">
                <StaticImage
                  src="../assets/images/logos/ISO9001-logo.png"
                  alt="ISO9001"
                />
              </div>
              <div className="flex justify-center items-center h-28 w-28 relative">
                <StaticImage
                  src="../assets/images/logos/ISO45001-logo.png"
                  alt="ISO45001"
                />
              </div>
              <div className="flex justify-center items-center h-28 w-28 relative">
                <StaticImage
                  src="../assets/images/logos/JAS-logo.png"
                  alt="ISO9001"
                />
              </div>
              <div className="flex justify-center items-center h-28 w-28 relative">
                <StaticImage
                  src="../assets/images/logos/ASIAL-logo.png"
                  alt="asial bronze member"
                />
              </div>
              <div className="flex justify-center items-center h-28 w-28 relative">
                <StaticImage
                  src="../assets/images/logos/Carbon-logo.png"
                  alt="ISO45001"
                />
              </div>
              <div className="flex justify-center items-center h-28 w-28 relative">
                <StaticImage
                  src="../assets/images/tas-logo-green.png"
                  alt="ISO9001"
                />
              </div>
            </div>
            {/* <StaticImage
              src="../assets/images/accreditations-color.png"
              className="!px-4"
              alt="accreditations and certificates"
            /> */}
          </div>
          {/* <div className="hidden lg:flex flex flex-col">
            <Link className="text-kss-text-dark hover:text-white text-sm pb-2">
              GPO Box 550, HOBART 7001
            </Link>
            <a
              href="tel:0408303603"
              target="blank"
              className="text-kss-text-dark hover:text-white text-sm pb-2"
            >
              Phone: 0408 303 603
            </a>
            <a
              href="mailto:info@kevlarsecuritysolutions.com.au"
              target="blank"
              className="text-kss-text-dark hover:text-white text-sm pb-2"
            >
              Email: info@kevlarsecuritysolutions.com.au
            </a>
          </div> */}
        </div>
        <div className=" flex items-center mx-4 lg:mx-auto max-w-screen-2xl border-t border-gray-50/40 ">
          <div class="mt-2 md:mt-0 md:order-1">
            <p class="text-xs py-2 tracking-tight text-kss-text-dark">
              &copy; 2023 Kevlar Security Solutions Pty Ltd. All rights
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
