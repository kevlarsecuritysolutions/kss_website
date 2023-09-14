import React, { Fragment, useState, useEffect } from "react";
import {
  Dialog,
  Popover,
  Tab,
  Transition,
  Disclosure,
} from "@headlessui/react";
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

const Navigation = () => {
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

          <div className="fixed inset-0 z-[2000]">
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
                          src="https://images.ctfassets.net/lfrbwr0lmnkj/4LVkxZLDN5fdHZncZFJaVO/2ee3e324095b92cbb451c95a792a7a27/Asset-training-logo.jpg"
                          alt="go to asset training"
                        />
                      </div>
                      <div className="">
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 text-center">
                            To work in the security industry, you must first
                            complete a Certificate II in Security Operations
                            (CPPSEC20218). KSS recommends
                            <a
                              href="https://asset-training.com.au/"
                              className="underline hover:opacity-75 pl-1"
                              target="blank"
                            >
                              Asset Training
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

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative max-w-full w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto mt-12 ">
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
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Static Guards
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Our static guards are highly trained with a
                                    particular focus on verbal de-escalation...
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/concierge-and-site-entry-officers"
                                className="flex gap-4 group pb-2"
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Concierge & Site Entry Officers
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    We provide tailored concierge and site entry
                                    security services to accommodate...
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/cash-in-transit"
                                className="flex gap-4 group pb-2"
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Cash in Transit Services
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Our cash in transit services provide peace
                                    of mind and eliminate risk...
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/security-patrols"
                                className="flex gap-4 group pb-2"
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black group-hover:text-black">
                                    Security Patrols
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    We have the largest vehicle-based security
                                    patrol operation in Tasmania...
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/alarm-response"
                                className="flex gap-4 group pb-2"
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Alarm / Duress Response
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Our large vehicle-based security patrol
                                    operation enables us to provide the
                                    fastest...
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/crowd-control"
                                className="flex gap-4 group pb-2"
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Crowd Control / Event Security
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    We have a highly experienced team of crowd
                                    control and event security officers...
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/body-guard-services"
                                className="flex gap-4 group pb-2"
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Bodyguard Services
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Our close personal protection services are
                                    provided only by our most experienced...
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/technical-services"
                                className="flex gap-4 group pb-2"
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Technical Services
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    We are a trusted provider of specialist
                                    technical security services for business...
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/services/risk-assessments"
                                className="flex gap-4 group pb-2"
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Risk Assessments
                                  </h4>
                                  <p className="text-kss-text text-md">
                                    Our highly qualified management team's broad
                                    range of expertise places us in the
                                    unique...
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
                                onClick={() => {
                                  setOpen(false);
                                }}
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
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Work with KSS
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
                                    Solutions on Facebook.
                                  </p>
                                </div>
                              </a>
                              <a
                                href="http://asset-training.com.au/"
                                target="blank"
                                className="flex gap-4 group pb-2"
                              >
                                <div className="min-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                <div className="flex flex-col">
                                  <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                    Asset Training
                                  </h4>
                                  <p className="text-sm text-kss-text">
                                    To work in the security industry, you must
                                    first complete a Certificate II in Security
                                    Operations (CPPSEC20218). KSS recommends
                                    <a
                                      href="https://asset-training.com.au/"
                                      className="underline hover:opacity-75 pl-1"
                                      target="blank"
                                    >
                                      Asset Training
                                    </a>{" "}
                                    as Tasmania’s leading provider of nationally
                                    recognised security training.
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
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <span>Company</span>
                      </Link>
                      <Link
                        to="/contact"
                        className={`${
                          open ? "shadow-b-lg" : ""
                        } flex w-full justify-between px-4 py-4 text-left text-lg font-semibold text-kss-text focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`}
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <span>Contact</span>
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header
          className={
            color
              ? "top-0 h-auto bg-gradient-to-t from-transparent via-black to-[#001a2f] bg-size-200 bg-pos-0 fixed w-full z-[50] transition-all"
              : "top-0 h-auto bg-gradient-to-t from-transparent via-transparent via-black to-[#001a2f] bg-size-200 bg-pos-100 fixed w-full z-[50] transition-all"
          }
          style={
            open && !color
              ? {
                  backgroundImage:
                    "linear-gradient(to top, #000000, #001a2f, #001a2f)",
                }
              : {}
          }
        >
          <nav aria-label="Top">
            {/* Secondary navigation */}
            <div>
              <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="">
                  <div className="h-16 flex items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="relative hidden lg:flex lg:items-center z-[1000]">
                      <Link to="/" className="flex items-center gap-4 z-[100]">
                        <span className="sr-only">KSS</span>
                        <StaticImage
                          src="../assets/images/kss-logo-white.png"
                          className="!w-8 !h-auto"
                          loading="eager"
                          alt="kss logo"
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
                      {/* <div className="flex justify-center hidden lg:flex pl-6">
                        <StaticImage
                          src="../assets/images/accreditations-color.png"
                          className="!w-52 !h-10"
                          alt="accreditations & certificates"
                        />
                      </div> */}
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
                                        <AnchorLink
                                          to="/#services"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              View All Services
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              We have earned a reputation as a
                                              market leader in providing a wide
                                              range of security services.
                                            </p>
                                          </div>
                                        </AnchorLink>
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
                                              Our static guards are highly
                                              trained with a particular focus on
                                              verbal de-escalation...
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="flex flex-col gap-8">
                                        <Link
                                          to="/services/concierge-and-site-entry-officers"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Concierge & Site Entry Officers
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              We provide tailored concierge and
                                              site entry security services to
                                              accommodate...
                                            </p>
                                          </div>
                                        </Link>
                                        <Link
                                          to="/services/cash-in-transit"
                                          className="flex gap-4 group"
                                        >
                                          <div className="min-w-[3px] max-w-[3px] rounded-xl bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                          <div className="flex flex-col">
                                            <h4 className="text-kss-text font-semibold text-lg group-hover:text-black">
                                              Cash In Transit
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              Our cash in transit services
                                              provide peace of mind and
                                              eliminate risk...
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
                                              We have the largest vehicle-based
                                              security patrol operation in
                                              Tasmania...
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
                                              Our large vehicle-based security
                                              patrol operation enables us to
                                              provide the fastest...
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
                                              We have a highly experienced team
                                              of crowd control and event
                                              security officers...
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
                                              Bodyguard Services
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              Our close personal protection
                                              services are provided only by our
                                              most experienced...
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
                                              We are a trusted provider of
                                              specialist technical security
                                              services for business...
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
                                              Risk Assessments
                                            </h4>
                                            <p className="text-kss-text text-xs">
                                              Our highly qualified management
                                              team's broad range of expertise
                                              places us in the unique...
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="col-span-5 flex justify-end pt-4">
                                        <Link
                                          to="/contact"
                                          className="flex gap-2 items-center bg-transparent transition text-kss-text text-sm font-semibold py-3 hover:underline"
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
                                              provision of physical and
                                              technical security services.
                                            </p>
                                          </div>
                                        </Link>
                                        <AnchorLink
                                          to="/company/#environment"
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
                                              climate.
                                            </p>
                                          </div>
                                        </AnchorLink>
                                      </div>
                                      <div className="flex flex-col justify-between">
                                        <Link
                                          to="/company"
                                          className="flex gap-4 group pb-2"
                                        >
                                          <div className="flex flex-col">
                                            <div className="mb-2 h-40 group-hover:opacity-90 overflow-hidden relative bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] rounded-sm flex items-center justify-center">
                                              <div className=" relative w-full h-36 mx-2 overflow-hidden">
                                                <StaticImage
                                                  src="https://images.ctfassets.net/lfrbwr0lmnkj/1hT3H7kBkUPZw54iX6wsnY/2c671c22300ac9f49f1fa27fc267ee08/kss_website2022-141.jpg"
                                                  className="!w-full !absolute !bottom-0"
                                                  objectFit="scale-down"
                                                  loading="eager"
                                                  alt="tasmanian owned and operated"
                                                />
                                              </div>
                                            </div>
                                            <p className="text-kss-text text-sm">
                                              KSS is your Tasmanian owned and
                                              operated provider of security
                                              services.
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
                                            <div className="mb-2 h-40 group-hover:opacity-90 overflow-hidden relative bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] rounded-sm flex items-center justify-center">
                                              <div className=" relative w-full h-36 mx-2 overflow-hidden">
                                                <StaticImage
                                                  src="https://images.ctfassets.net/lfrbwr0lmnkj/ldwIjC787tH8viiAMEEDe/2e97a4a884753ecba3e7d9eaeece98ae/kss_website2022-151.jpg"
                                                  className="!w-full !absolute !bottom-0"
                                                  objectFit="scale-down"
                                                  loading="eager"
                                                  alt="carbon neutral via carbon offsets"
                                                />
                                              </div>
                                            </div>
                                            <p className="text-kss-text text-sm">
                                              Our fleet of security patrol
                                              vehicles are 100% carbon neutral
                                              via carbon offsets.
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
                                            <div className="mb-2 h-40 group-hover:opacity-90 overflow-hidden relative bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] rounded-sm flex items-center justify-center">
                                              <div className=" relative w-full h-36 mx-2 overflow-hidden">
                                                <StaticImage
                                                  src="../assets/images/sign.jpg"
                                                  className="!w-full !absolute !-bottom-12"
                                                  objectFit="contain"
                                                  loading="eager"
                                                  alt="over 300 clients across tasmania"
                                                />
                                              </div>
                                            </div>
                                            <p className="text-kss-text text-sm">
                                              Currently servicing more than 3000
                                              sites for over 300 clients across
                                              Tasmania.
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
                                              security industry.
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
                                              Work With KSS
                                            </h4>
                                            <p className="text-kss-text text-sm">
                                              Search positions and express your
                                              interest in joining the team.
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
                                            <div className="mb-2 h-40 group-hover:opacity-90 overflow-hidden relative bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] rounded-sm flex items-center justify-center">
                                              <div className=" relative w-full h-36 mx-2 overflow-hidden">
                                                <StaticImage
                                                  src="https://images.ctfassets.net/lfrbwr0lmnkj/5lKSBZF68FWUafuPhRBJ3h/b014ee488693b0da60f12f3ffc095109/kss_website2022-149.jpg"
                                                  className="!w-full !absolute !bottom-0"
                                                  objectFit="scale-down"
                                                  loading="eager"
                                                  alt="fastest growing security team in tasmania"
                                                />
                                              </div>
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
                                          to="/employment/information"
                                          className="flex gap-4 group pb-2"
                                        >
                                          <div className="flex flex-col">
                                            <div className="mb-2 h-40 group-hover:opacity-90 overflow-hidden relative bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] rounded-sm flex items-center justify-center">
                                              <div className=" relative w-full h-36 mx-2 overflow-hidden">
                                                <StaticImage
                                                  src="https://images.ctfassets.net/lfrbwr0lmnkj/6aER9jOd5sjtZTqA64i0U0/16c7477b135ff2d453852057bc848cdf/kss_website2022-33.jpg"
                                                  className="!w-full !absolute !bottom-0"
                                                  objectFit="scale-down"
                                                  loading="eager"
                                                  alt="leading employer in the security industry"
                                                />
                                              </div>
                                            </div>
                                            <p className="text-kss-text text-sm">
                                              A leading employer in the
                                              Tasmanian security industry.
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="flex flex-col justify-between">
                                        <Link
                                          to="/employment/information"
                                          className="flex gap-4 group pb-2"
                                        >
                                          <div className="flex flex-col">
                                            <div className="mb-2 h-40 group-hover:opacity-90 overflow-hidden relative bg-gradient-to-tr from-[#034065] via-[#5C5242] to-[#000E17] rounded-sm flex items-center justify-center">
                                              <div className=" relative w-full h-36 mx-2 overflow-hidden">
                                                <StaticImage
                                                  src="https://images.ctfassets.net/lfrbwr0lmnkj/3TgYgiJQgqqWj4TYMNxUZa/a15177b7e3fd64e8aa1aac4cb8885f7f/kss_website2022-148.jpg"
                                                  className="!w-full !absolute !-bottom-16"
                                                  objectFit="scale-down"
                                                  loading="eager"
                                                  alt="ongoing support and employee training"
                                                />
                                              </div>
                                            </div>

                                            <p className="text-kss-text text-sm">
                                              Upskill with ongoing support and
                                              employee training.
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
                      className="relative lg:hidden flex items-center gap-4 z-[1000]"
                    >
                      <span className="sr-only">KSS</span>
                      <StaticImage
                        src="../assets/images/kss-logo-white.png"
                        alt="kss logo"
                        className="!w-8 !h-auto"
                        loading="eager"
                      />
                      <div className="flex flex-col justify-start">
                        <p className="text-2xl text-white font-bold">KEVLAR</p>
                        <p className="text-sm text-white -mt-2">
                          SECURITY SOLUTIONS
                        </p>
                      </div>
                    </Link>

                    <div className="relative flex-1 flex items-center justify-end lg:hidden z-[1000]">
                      <div className="flex items-center lg:ml-8">
                        <span className="sr-only">Open menu</span>
                        {open ? (
                          <button
                            type="button"
                            className="-ml-2 p-2 rounded-md text-white lg:hidden"
                            onClick={() => setOpen(false)}
                          >
                            {" "}
                            <Close
                              className="block h-8 w-8"
                              aria-hidden="true"
                            />
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="-ml-2 p-2 rounded-md text-white lg:hidden"
                            onClick={() => setOpen(true)}
                          >
                            <Menu
                              className="block h-8 w-8"
                              aria-hidden="true"
                            />
                          </button>
                        )}
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

export default Navigation;
