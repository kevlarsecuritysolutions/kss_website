import React, { Fragment, useState } from "react";
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

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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
              <Dialog.Panel className="relative max-w-full w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto [z-index:2000]">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-300"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
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
                              to="/services/security-patrols"
                              className="flex gap-4 group pb-2"
                            >
                              <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
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
                              <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
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
                              to="/services/alarm-system-monitoring"
                              className="flex gap-4 group pb-2"
                            >
                              <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                              <div className="flex flex-col">
                                <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                  Alarm System Monitoring
                                </h4>
                                <p className="text-kss-text text-md">
                                  All alarm monitoring services are provided by
                                  a Tasmanian based ASIAL accredited A Grade
                                  control room
                                </p>
                              </div>
                            </Link>
                            <Link
                              to="/services/armed-cash"
                              className="flex gap-4 group pb-2"
                            >
                              <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                              <div className="flex flex-col">
                                <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                  Armed Cash In Transit
                                </h4>
                                <p className="text-kss-text text-md">
                                  Our armed cash-in-transit service provides
                                  business owners with peace of mind.
                                </p>
                              </div>
                            </Link>
                            <Link
                              to="/services/static-guards"
                              className="flex gap-4 group pb-2"
                            >
                              <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
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
                              to="/services/crowd-control"
                              className="flex gap-4 group pb-2"
                            >
                              <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                              <div className="flex flex-col">
                                <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                  Crowd Control / Event Security
                                </h4>
                                <p className="text-kss-text text-md">
                                  high profile and high risk events, concerts
                                  and sporting events, events at pubs and clubs
                                  and private functions.
                                </p>
                              </div>
                            </Link>
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
                              <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                              <div className="flex flex-col">
                                <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                  Employment Information
                                </h4>
                                <p className="text-kss-text text-md">
                                  We have the largest security patrol car
                                  operation in Tasmania.
                                </p>
                              </div>
                            </Link>
                            <Link
                              to="/employment/expression-of-interest"
                              className="flex gap-4 group pb-2"
                            >
                              <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                              <div className="flex flex-col">
                                <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                  Work with Kevlar Form
                                </h4>
                                <p className="text-kss-text text-md">
                                  24 hour alarm response services for over 600
                                  sites in Southern Tasmania.
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
                    </Disclosure>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-gradient-to-t from-black to-[#002340] fixed w-full [z-index:1000]">
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
                        className="w-8 h-auto"
                      />
                      <div className="flex flex-col justify-start">
                        <p className="text-2xl text-white font-bold">KEVLAR</p>
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
                                      : "border-transparent text-kss-text-dark hover:text-white",
                                    "relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-b-2 -mb-px pt-px flex items-center gap-2 "
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

                                  <div className="relative bg-white p-6 grid grid-cols-4">
                                    <AnchorLink
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
                                    </AnchorLink>
                                    <div className="flex flex-col justify-between px-2 py-4">
                                      <Link
                                        to="/services/security-patrols"
                                        className="flex gap-4 group pb-2"
                                      >
                                        <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                        <div className="flex flex-col">
                                          <h4 className="text-kss-text font-semibold text-xl group-hover:text-black group-hover:text-black">
                                            Security Patrols
                                          </h4>
                                          <p className="text-kss-text text-md">
                                            We have the largest security patrol
                                            car operation in Tasmania.
                                          </p>
                                        </div>
                                      </Link>
                                      <Link
                                        to="/services/alarm-response"
                                        className="flex gap-4 group pb-2"
                                      >
                                        <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                        <div className="flex flex-col">
                                          <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                            Alarm Duress / Response
                                          </h4>
                                          <p className="text-kss-text text-md">
                                            24 hour alarm response services for
                                            over 600 sites in Southern Tasmania.
                                          </p>
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="flex flex-col justify-between px-2 py-4">
                                      <Link
                                        to="/services/alarm-system-monitoring"
                                        className="flex gap-4 group pb-2"
                                      >
                                        <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                        <div className="flex flex-col">
                                          <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                            Alarm System Monitoring
                                          </h4>
                                          <p className="text-kss-text text-md">
                                            All alarm monitoring services are
                                            provided by a Tasmanian based ASIAL
                                            accredited A Grade control room
                                          </p>
                                        </div>
                                      </Link>
                                      <Link
                                        to="/services/armed-cash"
                                        className="flex gap-4 group pb-2"
                                      >
                                        <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                        <div className="flex flex-col">
                                          <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                            Armed Cash In Transit
                                          </h4>
                                          <p className="text-kss-text text-md">
                                            Our armed cash-in-transit service
                                            provides business owners with peace
                                            of mind.
                                          </p>
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="flex flex-col justify-between px-2 py-4">
                                      <Link
                                        to="/services/static-guards"
                                        className="flex gap-4 group pb-2"
                                      >
                                        <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                        <div className="flex flex-col">
                                          <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                            Static Guards
                                          </h4>
                                          <p className="text-kss-text text-md">
                                            We can provide static guards at
                                            affordable prices for almost any
                                            purpose.
                                          </p>
                                        </div>
                                      </Link>
                                      <Link
                                        to="/services/crowd-control"
                                        className="flex gap-4 group pb-2"
                                      >
                                        <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                        <div className="flex flex-col">
                                          <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                            Crowd Control / Event Security
                                          </h4>
                                          <p className="text-kss-text text-md">
                                            high profile and high risk events,
                                            concerts and sporting events, events
                                            at pubs and clubs and private
                                            functions.
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
                                      : "border-transparent text-kss-text-dark hover:text-white",
                                    "relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-b-2 -mb-px pt-px flex items-center gap-2 "
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
                                    <Link
                                      to="/company"
                                      className="bg-gradient-to-br from-kss-blue to-black flex flex-col items-center justify-center h-50 w-60 p-4"
                                    >
                                      <StaticImage
                                        src="../assets/images/company-about.png"
                                        className="w-36 mb-2"
                                      />
                                      <p className="text-white text-md">
                                        Company Information
                                      </p>
                                    </Link>
                                    <div className="flex flex-col justify-between">
                                      <Link
                                        to="/company"
                                        className="flex gap-4 group pb-2"
                                      >
                                        <div className="flex flex-col">
                                          <StaticImage
                                            src="../assets/images/snow.jpg"
                                            className="mb-2 h-40 group-hover:opacity-90"
                                          />
                                          <p className="text-kss-text text-lg">
                                            KSS are your Tassie owned and operated security service professionals
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
                                            src="../assets/images/prius.jpg"
                                            className="mb-2 h-40 group-hover:opacity-90"
                                          />
                                          <p className="text-kss-text text-lg">
                                            Our fleet of security patrol vehicles are 100% carbon neutral 
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
                                            className="mb-2 h-40 group-hover:opacity-90"
                                          />
                                          <p className="text-kss-text text-lg">
                                            Currently servicing more than 1800 sites across Tasmania.
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
                                      : "border-transparent text-kss-text-dark hover:text-white",
                                    "relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-b-2 -mb-px pt-px flex items-center gap-2 "
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
                                    <Link
                                      to="/employment/information"
                                      className="bg-gradient-to-br from-kss-blue to-black flex flex-col items-center justify-center h-50 w-60 p-4"
                                    >
                                      <StaticImage
                                        src="../assets/images/careers.png"
                                        className="w-36 mb-2"
                                      />
                                      <p className="text-white text-md">
                                        Employment Information
                                      </p>
                                    </Link>
                                    <div className="flex flex-col justify-between py-4">
                                      <Link
                                        to="/employment/information"
                                        className="flex gap-4 group pb-2"
                                      >
                                        <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                        <div className="flex flex-col">
                                          <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                            Employment Information
                                          </h4>
                                          <p className="text-kss-text text-md">
                                            We have the largest security patrol
                                            car operation in Tasmania.
                                          </p>
                                        </div>
                                      </Link>
                                      <Link
                                        to="/employment/expression-of-interest"
                                        className="flex gap-4 group pb-2"
                                      >
                                        <div className="pl-[2px] bg-gradient-to-t to-kss-blue via-black from-kss-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                                        <div className="flex flex-col">
                                          <h4 className="text-kss-text font-semibold text-xl group-hover:text-black">
                                            Work with Kevlar
                                          </h4>
                                          <p className="text-kss-text text-md">
                                          Search positions and express your interest in joing the team.
                                          </p>
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                      <Link className="flex gap-4 group pb-2">
                                        <div className="flex flex-col">
                                          <StaticImage
                                            src="../assets/images/stock.jpg"
                                            className="mb-2 h-40 group-hover:opacity-90 group-hover:opacity-90"
                                          />
                                          <p className="text-kss-text text-lg">
                                            A leading employer in the Tasmanian security industry
                                          </p>
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                      <Link className="flex gap-4 group pb-2">
                                        <div className="flex flex-col">
                                          <StaticImage
                                            src="../assets/images/cpr.jpeg"
                                            className="mb-2 h-40 group-hover:opacity-90"
                                          />
                                          <p className="text-kss-text text-lg">
                                            Upskill with ongoing support and employee training
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
                        <Link
                          to="/contact"
                          className={classNames(
                            open
                              ? "border-none text-white font-semibold"
                              : "border-transparent text-kss-text-dark hover:text-white",
                            "relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-b-2 -mb-px pt-px flex items-center gap-2 "
                          )}
                        >
                          Contact
                        </Link>
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}

                  {/* Logo (lg-) */}
                  <Link to="/" className="lg:hidden flex items-center gap-4">
                    <span className="sr-only">KSS</span>
                    <StaticImage
                      src="../assets/images/kss-logo-white.png"
                      alt=""
                      className="w-8 h-auto"
                    />
                    <div className="flex flex-col justify-start">
                      <p className="text-2xl text-white font-bold">KEVLAR</p>
                      <p className="text-sm text-white -mt-2">
                        SECURITY SOLUTIONS
                      </p>
                    </div>
                  </Link>

                  <div className="flex-1 flex items-center justify-end md:hidden">
                    <div className="flex items-center lg:ml-8">
                      <button
                        type="button"
                        className="-ml-2 p-2 rounded-md text-white md:hidden"
                        onClick={() => setOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        {open ? (
                          <Close className="block h-8 w-8" aria-hidden="true" />
                        ) : (
                          <Menu className="block h-8 w-8" aria-hidden="true" />
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
  );
};

export default Navigation;
