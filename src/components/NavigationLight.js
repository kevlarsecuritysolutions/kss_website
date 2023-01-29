import React, { Fragment, useState, useEffect } from "react";
import {
  Dialog,
  Popover,
  Tab,
  Transition,
  Disclosure,
} from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  UserAvatar,
  Search,
  Menu,
  Notification,
  Close,
  ChevronDown,
  Tree,
  LogoFacebook,
  LogoInstagram,
  LogoLinkedin,
  PhoneFilled,
  Email,
} from "@carbon/icons-react";

import logo from "../assets/images/kss-logo-white.png";
import { Phone } from "@carbon/icons-react";
import { ArrowRight } from "@carbon/icons-react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Tassie from "../assets/svg/tasmania";
import { ChevronUp } from "@carbon/icons-react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavigationLight = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });

  return (
    <>
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog as="div" className="relative z-[2000]" onClose={setOpenModal}>
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
                    >
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
                    <a
                      href="http://securityalarmshobart.com.au/"
                      target="blank"
                      className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300"
                    >
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
                    <a
                      href="https://www.asial.com.au/"
                      target="blank"
                      className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300"
                    >
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

                    <a
                      href="https://carbonneutral.com.au/"
                      target="blank"
                      className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300"
                    >
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
                    <a
                      href="https://crimestoppers.com.au/"
                      target="blank"
                      className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300"
                    >
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
                    <a
                      href="https://www.facebook.com/Tas.Police"
                      target="blank"
                      className="pt-4 border border-gray-200 rounded-md p-2 hover:border-gray-300"
                    >
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
                      onClick={() => setOpenModal(false)}
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
      <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative max-w-full w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto z-[2000]">
                <div
                    className="px-4 pt-5 pb-5 flex z-[800]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, #000000, #002340, #002340)",
                    }}
                  >
                    <p className="opacity-0">kss</p>
                  </div>

                  <div className="border-t border-gray-200 py-6 space-y-6">
                    <div className="flow-root">
                      <Disclosure defaultOpen="true">
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={`${
                                open ? "shadow-b-lg" : ""
                              } flex w-full justify-between px-4 py-4 text-left text-lg font-semibold text-kss-text focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`}
                            >
                              <span>Services</span>
                              <ChevronDown
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-kss-text`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-[#f2f2f2] flex flex-col gap-6">
                              <Link
                                to="/services/static-guards"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Static Guards
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    We can provide static guards at affordable
                                    prices for almost any purpose.
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/site-entry"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Site Entry / Gate House
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    We can provide stringent access control to
                                    your premises.
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/concierge-guards"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Concierge Guards
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Concierge security officers are assigned to
                                    give support to guests and visitors.
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/armed-cash"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Cash in Transit Services
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Our armed cash-in-transit service provides
                                    business owners with peace of mind.
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/security-patrols"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black group-hover:text-black">
                                    Security Patrols
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    We have the largest security patrol car
                                    operation in Tasmania.
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/alarm-response"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Alarm Duress / Response
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    24 hour alarm response services for over 600
                                    sites in Southern Tasmania.
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/crowd-control"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Crowd Control / Event Security
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    high profile and high risk events, concerts
                                    and sporting events, events at pubs and
                                    clubs and private functions.
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/body-guard-services"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Body Guard Services
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Close and personal protection, asset
                                    /valuables protection services.
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/technical-services"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Technical Services
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Alarm monitoring, installation, servicing
                                    and repair. Structured data networking,
                                    access control solutions.
                                  </p>
                                </div>
                              </Link>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={`${
                                open ? "shadow-b-lg" : ""
                              } flex w-full justify-between px-4 py-4 text-left text-lg font-semibold text-kss-text focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`}
                            >
                              <span>Careers</span>
                              <ChevronDown
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-kss-text`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-[#f2f2f2] flex flex-col gap-6">
                              <Link
                                to="/employment/information"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Employment Information
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    We have built our reputation as a leading
                                    employer in the Tasmanian security industry.
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/employment/expression-of-interest"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Work with Kevlar Form
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Search positions and express your interest
                                    in joining the team.
                                  </p>
                                </div>
                              </Link>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={`${
                                open ? "shadow-b-lg" : ""
                              } flex w-full justify-between px-4 py-4 text-left text-lg font-semibold text-kss-text focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`}
                            >
                              <span>Links</span>
                              <ChevronDown
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-kss-text`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-[#f2f2f2] flex flex-col gap-6">
                              <a
                                href="https://www.facebook.com/ksshobart/"
                                target="_blank"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Find Us On Facebook
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Stay up to date with Kevlar Security
                                    Solutions on Facebook
                                  </p>
                                </div>
                              </a>
                              <a
                                href="http://securityalarmshobart.com.au/"
                                target="blank"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Golden Electronics
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Golden Electronics is Tasmania's longest
                                    established A grade ASIAL accredited
                                    monitoring centre.
                                  </p>
                                </div>
                              </a>
                              <a
                                href="https://www.asial.com.au//"
                                target="blank"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    ASIAL
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Kevlar Security Solutions Pty Ltd is a
                                    member of the Australian Security Industry
                                    Association Limited.
                                  </p>
                                </div>
                              </a>
                              <a
                                href="http://securityalarmshobart.com.au/"
                                target="blank"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Carbon Neutral
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    We're proudly offsetting our fleet vehicle
                                    carbon emmissions through Carbon Neutral Pty
                                    Ltd.
                                  </p>
                                </div>
                              </a>
                              <a
                                href="https://crimestoppers.com.au/"
                                target="blank"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Crime Stoppers
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Crime Stoppers is an integral part of
                                    policing with the information gathered and
                                    supplied by the community essential to crime
                                    fighting and crime prevention.
                                  </p>
                                </div>
                              </a>
                              <a
                                href="https://www.facebook.com/Tas.Police"
                                target="blank"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Tasmania Police
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Tasmania Police aims to reduce the impact of
                                    crime, improve the level of public safety
                                    and traffic law compliance, and enhance
                                    emergency management and security
                                    capabilities.
                                  </p>
                                </div>
                              </a>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <Link
                        to="/company"
                        className={`${
                          open ? "shadow-b-lg" : ""
                        } flex w-full justify-between px-4 py-4 text-left text-lg font-semibold text-kss-text focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`}
                      >
                        <span>Company</span>
                      </Link>
                      <Link
                        to="/contact"
                        className={`${
                          open ? "shadow-b-lg" : ""
                        } flex w-full justify-between px-4 py-4 text-left text-lg font-semibold text-kss-text focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`}
                      >
                        <span>Contact</span>
                      </Link>
                      {/* <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={`${
                              open ? "shadow-b-lg" : ""
                            } flex w-full justify-between px-4 py-4 text-left text-lg font-semibold text-kss-text focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`}
                          >
                            <span>Contact</span>
                            <ChevronDown
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5 text-kss-text`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-[#f2f2f2] flex flex-col gap-6">
                            <div className="">
                              <h4 className="py-4 mx-4 text-kss-text pb-2">
                                Submit the form below to hear from one of our
                                security professionals:
                              </h4>
                              <div className="px-4 py-2">
                                <div className="h-[2px] w-full bg-gradient-to-r from-kss-blue to-black"></div>
                              </div>

                              <form action="" className="pt-2">
                                <div className="px-4 pt-6 pb-2">
                                  <label
                                    htmlFor="comment"
                                    className="block text-sm font-medium text-kss-text"
                                  >
                                    Name:
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      rows={4}
                                      name="comment"
                                      id="comment"
                                      className="shadow-sm bg-[#f2f2f2] border-b border-gray-300 block w-full sm:text-sm focus:outline-none focus:border focus:border-black text-kss-text p-2 "
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="px-4 pt-6 pb-2">
                                  <label
                                    htmlFor="comment"
                                    className="block text-sm font-medium text-kss-text"
                                  >
                                    Email:
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      rows={4}
                                      name="comment"
                                      id="comment"
                                      className="shadow-sm bg-[#f2f2f2] border-b border-gray-300 block w-full sm:text-sm focus:outline-none focus:border focus:border-black text-kss-text p-2 "
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="px-4 pt-6 pb-2">
                                  <label
                                    htmlFor="comment"
                                    className="block text-sm font-medium text-kss-text"
                                  >
                                    Company:
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      rows={4}
                                      name="comment"
                                      id="comment"
                                      className="shadow-sm bg-[#f2f2f2] border-b border-gray-300 block w-full sm:text-sm focus:outline-none focus:border focus:border-black text-kss-text p-2 "
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="px-4 py-6">
                                  <label
                                    htmlFor="comment"
                                    className="block text-sm font-medium text-kss-text"
                                  >
                                    Description of services:
                                  </label>
                                  <div className="mt-1">
                                    <textarea
                                      rows={4}
                                      name="comment"
                                      id="comment"
                                      className="shadow-sm bg-[#f2f2f2] border-b border-gray-300 block w-full sm:text-sm focus:outline-none focus:border focus:border-black text-kss-text p-2 "
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center px-4 pb-4">
                                  <button className="w-1/2 text-center text-white hover:bg-opacity-80 py-3 bg-black">
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure> */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative transition">
          <nav aria-label="Top">
            {/* Secondary navigation */}
            <div className=" header bg-gradient-to-t from-black to-[#002340] fixed w-full z-[1000] transition-all">
              <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="">
                  <div className="h-16 flex items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:items-center">
                      <Link to="/" className="flex items-center gap-4">
                        <span className="sr-only">KSS</span>
                        <StaticImage
                          src="../assets/images/kss-logo-white.png"
                          alt=""
                          className="!w-8 !h-auto"
                        />
                        <div className="flex flex-col justify-start">
                          <p className="text-2xl text-white font-bold">
                            KEVLAR
                          </p>
                          <p className="text-sm text-white -mt-2">
                            SECURITY SOLUTIONS
                          </p>
                        </div>
                      </Link>
                    </div>

                    <div className="hidden h-full lg:flex">
                      {/* Mega menus */}
                      <Popover.Group className="ml-8">
                        <div className="h-full flex justify-center space-x-8">
                          <Popover className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? "border-none text-white font-semibold"
                                        : "border-transparent text-white hover:text-white",
                                      "relative z-10 flex items-center transition-colors ease-out duration-200 text-lg transition-all font-medium border-b-2 -mb-px pt-px flex items-center gap-2 focus-visible:outline-0 "
                                    )}
                                  >
                                    Services <ChevronDown />
                                  </Popover.Button>
                                </div>

                                <Transition.Child
                                  as={Fragment}
                                  enter="ease-out duration-500"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="ease-in duration-500"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <div className="fixed inset-0 bg-black bg-opacity-30" />
                                </Transition.Child>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute top-full inset-x-0 text-gray-500 sm:text-sm max-w-screen-2xl mx-auto">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div
                                      className="absolute inset-0 top-1/2 bg-white shadow"
                                      aria-hidden="true"
                                    />

                                    <div className="relative bg-white p-6 pb-2 grid grid-cols-5 gap-2">
                                      {/* <AnchorLink
                                      to="/#services"
                                      className="bg-gradient-to-br from-kss-blue to-black flex flex-col items-center justify-center h-[225px] w-60 p-4"
                                    >
                                      <StaticImage
                                        src="../assets/images/services.png"
                                        className="w-36 mb-2"
                                      />
                                      <p className="text-white text-md">
                                        View all Services
                                      </p>
                                    </AnchorLink> */}
                                      <div className="flex flex-col gap-8">
                                        <Link
                                          to="/services/static-guards"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Static Guards
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              We can provide static guards at
                                              affordable prices for almost any
                                              purpose.
                                            </p>
                                          </div>
                                        </Link>
                                        <Link
                                          to="/services/site-entry"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Site Entry / Gate House
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              Stringent access control to your
                                              premises, whilst managing visitors
                                              efficiently.
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="flex flex-col gap-8">
                                        <Link
                                          to="/services/concierge-guards"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Concierge Guards
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              Supporting guests and visitors,
                                              whilst providing the company an
                                              additional level of protection.
                                            </p>
                                          </div>
                                        </Link>
                                        <Link
                                          to="/services/armed-cash"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Cash In Transit
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              Our armed cash-in-transit service
                                              provides business owners with
                                              peace of mind.
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="flex flex-col gap-8">
                                        <Link
                                          to="/services/security-patrols"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Security Patrols
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              We have the largest security
                                              patrol car operation in Tasmania.
                                            </p>
                                          </div>
                                        </Link>
                                        <Link
                                          to="/services/alarm-response"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Alarm / Duress Response
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              24 hour alarm response services
                                              for over 600 sites in Southern
                                              Tasmania.
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="flex flex-col gap-8">
                                        <Link
                                          to="/services/crowd-control"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Crowd Control / Event Security
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              High-profile and high-risk events,
                                              concerts, sporting events, pubs,
                                              clubs, and private functions.
                                            </p>
                                          </div>
                                        </Link>
                                        <Link
                                          to="/services/body-guard-services"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Body Guard Services
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              Providing close and personal
                                              protection, asset / valuables
                                              protection services.
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="flex flex-col gap-8">
                                        <Link
                                          to="/services/technical-services"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Technical Services
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              Alarm monitoring, installation,
                                              servicing, networking, access
                                              control, upgrades, CCTV.
                                            </p>
                                          </div>
                                        </Link>
                                        <Link
                                          to="/services/risk-assessments"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Risk Assessments & Analysis
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              Offering thorough, affordable risk
                                              assessments for businesses, homes,
                                              individuals, and events.
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="col-span-5 flex justify-end pt-4">
                                        <Link
                                          to="/contact"
                                          className="flex gap-2 items-center bg-transparent transition text-kss-text text-sm font-semibold py-3 px-6 lg:px-10 hover:underline"
                                        >
                                          {" "}
                                          Contact a Security Professional{" "}
                                          <ArrowRight className="h-5 w-5" />
                                        </Link>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                          <Popover className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? "border-none text-white font-semibold"
                                        : "border-transparent text-white hover:text-white",
                                      "relative z-10 flex items-center transition-colors ease-out duration-200 text-lg transition-all font-medium border-b-2 -mb-px pt-px flex items-center gap-2 focus-visible:outline-0"
                                    )}
                                  >
                                    Company <ChevronDown />
                                  </Popover.Button>
                                </div>

                                <Transition.Child
                                  as={Fragment}
                                  enter="ease-out duration-500"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="ease-in duration-500"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <div className="fixed inset-0 bg-black bg-opacity-30" />
                                </Transition.Child>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute top-full inset-x-0 text-gray-500 sm:text-sm max-w-screen-2xl mx-auto">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div
                                      className="absolute inset-0 top-1/2 bg-white shadow"
                                      aria-hidden="true"
                                    />

                                    <div className="relative bg-white p-6 grid grid-cols-4 gap-12">
                                      <div className="flex flex-col gap-10">
                                        <Link
                                          to="/company"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Company Profile
                                            </h4>
                                            <p className="text-kss-text text-sm">
                                              Proudly Tasmanian owned and
                                              operated, specialising in the
                                              provision of physical security
                                              services.
                                            </p>
                                          </div>
                                        </Link>
                                        <Link
                                          to="/company"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Commitment to the Environment
                                            </h4>
                                            <p className="text-kss-text text-sm">
                                              We are committed to reducing our
                                              impact on the environment and
                                              climate wherever possible.
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="flex flex-col justify-between">
                                        <Link
                                          to="/company"
                                          className="flex gap-4 group pb-2"
                                        >
                                          <div className="flex flex-col">
                                            <div className="mb-2 h-40 group-hover:opacity-90 overflow-hidden relative">
                                              <StaticImage
                                                src="https://images.ctfassets.net/lfrbwr0lmnkj/1hT3H7kBkUPZw54iX6wsnY/2c671c22300ac9f49f1fa27fc267ee08/kss_website2022-141.jpg"
                                                className="!w-full !absolute !bottom-0"
                                                objectFit="scale-down"
                                              />
                                            </div>
                                            <p className="text-kss-text text-sm">
                                              KSS are your Tassie owned and
                                              operated security service
                                              professionals
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="flex flex-col justify-between">
                                        <Link
                                          to="/company"
                                          className="flex gap-4 group pb-2"
                                        >
                                          <div className="flex flex-col">
                                            <div className="mb-2 h-40 group-hover:opacity-90 overflow-hidden relative">
                                              <StaticImage
                                                src="https://images.ctfassets.net/lfrbwr0lmnkj/7oBsXku2unNUJNZCGnbh3l/be1c669d78ab1de0c937796393699570/kss_website2022-110.jpg"
                                                className="!w-full !absolute !bottom-0"
                                                objectFit="scale-down"
                                              />
                                            </div>
                                            <p className="text-kss-text text-sm">
                                              Our fleet of security patrol
                                              vehicles are 100% carbon neutral
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="flex flex-col justify-between">
                                        <Link
                                          to="/company"
                                          className="flex gap-4 group pb-2"
                                        >
                                          <div className="flex flex-col">
                                            <StaticImage
                                              src="../assets/images/sign.jpg"
                                              className="!mb-2 !h-40 !group-hover:opacity-90"
                                            />
                                            <p className="text-kss-text text-sm">
                                              Currently servicing more than 1800
                                              sites across Tasmania.
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                          <Popover className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? "border-none text-white font-semibold"
                                        : "border-transparent text-white hover:text-white",
                                      "relative z-10 flex items-center transition-colors ease-out duration-200 text-lg transition-all font-medium border-b-2 -mb-px pt-px flex items-center gap-2 focus-visible:outline-0"
                                    )}
                                  >
                                    Careers <ChevronDown />
                                  </Popover.Button>
                                </div>

                                <Transition.Child
                                  as={Fragment}
                                  enter="ease-out duration-500"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="ease-in duration-500"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <div className="fixed inset-0 bg-black bg-opacity-30" />
                                </Transition.Child>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute top-full inset-x-0 text-gray-500 sm:text-sm max-w-screen-2xl mx-auto">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div
                                      className="absolute inset-0 top-1/2 bg-white shadow"
                                      aria-hidden="true"
                                    />

                                    <div className="relative bg-white p-6 grid grid-cols-4 gap-12 ">
                                      <div className="flex flex-col gap-8">
                                        <Link
                                          to="/employment/information"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Employment Information
                                            </h4>
                                            <p className="text-kss-text text-sm">
                                              We have built our reputation as a
                                              leading employer in the Tasmanian
                                              security industry
                                            </p>
                                          </div>
                                        </Link>
                                        <Link
                                          to="/employment/expression-of-interest"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Work With Kevlar
                                            </h4>
                                            <p className="text-kss-text text-sm">
                                              Search positions and express your
                                              interest in joing the team.
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="flex flex-col justify-between">
                                        <Link
                                          to="/employment/expression-of-interest"
                                          className="flex gap-4 group pb-2"
                                        >
                                          <div className="flex flex-col">
                                            <div className="mb-2 h-40 group-hover:opacity-90 overflow-hidden relative">
                                              <StaticImage
                                                src="https://images.ctfassets.net/lfrbwr0lmnkj/710l8psox0VjvekQfGj3a1/fe918a16b6c87c20a86cffdb0b12fdca/kss_website2022-74.jpg"
                                                className="!w-full !absolute !bottom-0"
                                                objectFit="scale-down"
                                              />
                                            </div>
                                            <p className="text-kss-text text-sm">
                                              Join the fastest growing security
                                              team in Tasmania.
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="flex flex-col justify-between">
                                        <Link
                                          to="employment/information"
                                          className="flex gap-4 group pb-2"
                                        >
                                          <div className="flex flex-col">
                                            <div className="mb-2 h-40 group-hover:opacity-90 overflow-hidden relative">
                                              <StaticImage
                                                src="https://images.ctfassets.net/lfrbwr0lmnkj/3PVbzHry1cedjGMuqRYwcZ/de8a0e5dc6d0be043f1fe02ccef6785a/kss_website2022-54.jpg"
                                                className="!w-full !absolute !bottom-0"
                                                objectFit="scale-down"
                                              />
                                            </div>
                                            <p className="text-kss-text text-sm">
                                              A leading employer in the
                                              Tasmanian security industry
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="flex flex-col justify-between">
                                        <Link
                                          to="employment/information"
                                          className="flex gap-4 group pb-2"
                                        >
                                          <div className="flex flex-col">
                                            <div className="mb-2 h-40 group-hover:opacity-90 overflow-hidden relative">
                                              <StaticImage
                                                src="https://images.ctfassets.net/lfrbwr0lmnkj/6aER9jOd5sjtZTqA64i0U0/16c7477b135ff2d453852057bc848cdf/kss_website2022-33.jpg"
                                                className="!w-full !absolute !bottom-0"
                                                objectFit="scale-down"
                                              />
                                            </div>
                                            <p className="text-kss-text text-sm">
                                              Upskill with ongoing support and
                                              employee training
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                          <button
                            onClick={() => {
                              setOpenModal(true);
                            }}
                            className={classNames(
                              open
                                ? "border-none text-white font-semibold"
                                : "border-transparent text-white hover:text-white",
                              "relative z-10 flex items-center transition-colors ease-out duration-200 text-lg transition-all font-medium border-b-2 -mb-px pt-px flex items-center gap-2 "
                            )}
                          >
                            Links
                          </button>
                          <Link
                            to="/contact"
                            className={classNames(
                              open
                                ? "border-none text-white font-semibold"
                                : "border-transparent text-white hover:text-white",
                              "relative z-10 flex items-center transition-colors ease-out duration-200 text-lg transition-all font-medium border-b-2 -mb-px pt-px flex items-center gap-2 "
                            )}
                          >
                            Contact
                          </Link>
                        </div>
                      </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}

                    {/* Logo (lg-) */}
                    <Link
                      to="/"
                      className="lg:hidden flex items-center gap-4 z-[1000]"
                    >
                      <span className="sr-only">KSS</span>
                      <StaticImage
                        src="../assets/images/kss-logo-white.png"
                        alt=""
                        className="!w-8 !h-auto"
                      />
                      <div className="flex flex-col justify-start">
                        <p className="text-2xl text-white font-bold">KEVLAR</p>
                        <p className="text-sm text-white -mt-2">
                          SECURITY SOLUTIONS
                        </p>
                      </div>
                    </Link>

                    <div className="flex-1 flex items-center justify-end md:hidden z-[1000]">
                      <div className="flex items-center lg:ml-8">
                        <button
                          type="button"
                          className="-ml-2 p-2 rounded-md text-white md:hidden"
                          onClick={() => setOpen(true)}
                        >
                          <span className="sr-only">Open menu</span>
                          {open ? (
                            <button
                              type="button"
                              className=""
                              onClick={() => setOpen(true)}
                            >
                              {" "}
                              <svg
                                className="fill-white h-8 w-8 block"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                              </svg>
                            </button>
                          ) : (
                            <svg
                              className="fill-white h-8 w-8"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default NavigationLight;
