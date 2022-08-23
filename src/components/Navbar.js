import React, { Fragment, useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Disclosure, Menu, Transition, Dialog } from "@headlessui/react";
import {
  UserAvatar,
  Search,
  Menu as Menu20,
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
import { ChevronUp } from "@carbon/icons-react";

import logo from "../assets/images/kss-logo-white.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-t from-black to-[#002340] fixed w-full [z-index:1000]"
    >
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <div className="flex items-center px-2 lg:px-0">
              <Link
                to="/"
                className="flex gap-2 items-center flex-shrink-0 pr-12"
              >
                {/* <img
                  className="block lg:hidden h-7 w-auto"
                  src={logo}
                  alt="Gray Matters Advertising"
                />
                <img
                  className="hidden lg:block h-7 w-auto"
                  src={logo}
                  alt="Gray Matters Advertising"
                /> */}
                <img src={logo} alt="" className="h-12"/>
                <h1 className="text-xl text-white">
                  KEVLAR SECURITY SOLUTIONS
                </h1>
              </Link>
              <div className="hidden lg:block lg:ml-6">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex items-center text-kss-text-dark px-3 py-3 h-12 text-center text-lg hover: hover:text-white transition">
                        Services
                        <ChevronDown
                          className="-mr-1 ml-2 mt-1 h-4 w-4"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute left-0 mt-0 w-56 shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gma-dd-hover text-white"
                                    : "text-kss-text-dark",
                                  "block px-4 py-2 pt-3 text-md  transition"
                                )}
                              >
                                Local Advertising
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gma-dd-hover text-white"
                                    : "text-kss-text-dark",
                                  "block px-4 py-2 text-md  transition"
                                )}
                              >
                                Digital Advertising
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gma-dd-hover text-white"
                                    : "text-kss-text-dark",
                                  "block px-4 py-2 pb-3 text-md  transition"
                                )}
                              >
                                Branding
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gma-dd-hover text-white"
                                    : "text-kss-text-dark",
                                  "block px-4 py-2 text-md  transition"
                                )}
                              >
                                Web Applications
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gma-dd-hover text-white"
                                    : "text-kss-text-dark",
                                  "block px-4 py-2 pb-3 text-md  transition"
                                )}
                              >
                                Public Relations
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <AnchorLink
                    to="/#company"
                    className="text-kss-text-dark px-3 py-3 h-12 text-center text-lg hover: hover:text-white transition"
                  >
                    Clients
                  </AnchorLink>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex text-kss-text-dark px-3 py-3 h-12 text-center text-lg items-center hover: hover:text-white transition">
                        Careers
                        <ChevronDown
                          className="-mr-1 ml-2 mt-1 h-4 w-4"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute left-0 mt-4 shadow-sm bg-[#f2f2f2] ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="flex gap-24 p-4 items-center justify-center">
                            <h2 className="text-3xl text-gray-600">Careers</h2>
                          <div className="flex items-center">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gma-dd-hover text-white"
                                      : "text-kss-text-dark",
                                    "block px-4 py-2 pt-3 text-md bg-white transition"
                                  )}
                                >
                                  Employment Information
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gma-dd-hover text-white"
                                      : "text-kss-text-dark",
                                    "block px-4 py-2 text-md bg-white transition"
                                  )}
                                >
                                  Expression of Interest
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <Link
                    to="/contact"
                    className="text-kss-text-dark px-3 py-3 h-12 text-center text-lg hover: hover:text-white transition"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
              {/* <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search
                        className="h-5 w-5 text-kss-text-dark"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-transparent leading-5  text-gma-carbon placeholder-kss-text-dark focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gma-carbon sm:text-md"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div> */}
            </div>
            <div className="flex lg:hidden">
              {/* Mobile menu button */}
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center p-2  text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <Close className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu20 className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
              {/* <Disclosure.Button className="inline-flex items-center justify-center p-2  text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Close className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu20 className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
            </div>
            <div className="hidden lg:block lg:ml-4">
              <div className="flex gap-4 items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="relative flex-shrink-0">
                  <div>
                    <Menu.Button className="bg-gma-carbon h-10 w-10 justify-center items-center transition py-4 hover:  flex text-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border-kss-text-dark border">
                      <span className="sr-only">Open user menu</span>
                      <Tree className="h-5 w-5 text-white" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-0 w-48  shadow-lg py-1  ring-1 ring-black ring-opacity-5 focus:outline-none ">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gma-dd-hover text-white" : "",
                              "flex gap-2 items-center px-4 py-2 text-md text-kss-text-dark"
                            )}
                          >
                            <LogoFacebook className="h-6 w-6" />
                            Facebook
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gma-dd-hover text-white" : "",
                              "flex gap-2 items-center px-4 py-2 text-md text-kss-text-dark"
                            )}
                          >
                            <LogoInstagram className="h-6 w-6" />
                            Instagram
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gma-dd-hover text-white" : "",
                              "flex gap-2 items-center px-4 py-2 text-md text-kss-text-dark"
                            )}
                          >
                            <LogoLinkedin className="h-6 w-6" />
                            Linkedin
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gma-dd-hover text-white" : "",
                              "flex gap-2 items-center px-4 py-2 text-md text-kss-text-dark"
                            )}
                          >
                            <PhoneFilled className="h-6 w-6" />
                            Phone
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gma-dd-hover text-white" : "",
                              "flex gap-2 items-center px-4 py-2 text-md text-kss-text-dark"
                            )}
                          >
                            <Email className="h-6 w-6" />
                            Email
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="relative flex-shrink-0">
                  <div>
                    <Menu.Button className="bg-gma-carbon h-10 w-10 justify-center items-center transition py-4 hover:  flex text-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border-kss-text-dark border">
                      <span className="sr-only">Open user menu</span>
                      <UserAvatar className="h-5 w-5 text-white" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-0 w-48  shadow-lg py-1  ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/auth"
                            className={classNames(
                              active ? "bg-gma-dd-hover text-white" : "",
                              "flex gap-2 items-center px-4 py-2 text-md text-kss-text-dark"
                            )}
                          >
                            Staff Login
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/auth"
                            className={classNames(
                              active ? "bg-gma-dd-hover text-white" : "",
                              "flex gap-2 items-center px-4 py-2 text-md text-kss-text-dark"
                            )}
                          >
                            Client Login
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-9" onClose={setOpen}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-200"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-200"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-60">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                        <div className="px-4 sm:px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              {" "}
                              Panel title{" "}
                            </Dialog.Title>
                          </div>
                        </div>
                        <div className="relative flex flex-col text-right mt-12">
                          {/* Replace with your content */}
                          <Disclosure as="div" className="">
                            {({ open }) => (
                              <>
                                <h3>
                                  <Disclosure.Button className="group relative w-full flex justify-end items-center hover:bg-gma-bg">
                                    <span className="">
                                      {open ? (
                                        <ChevronUp
                                          className="block h-4 w-4 text-ec-blue group-hover:text-ec-blue"
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <ChevronDown
                                          className="block h-4 w-4 text-gray-400 group-hover:text-gray-500"
                                          aria-hidden="true"
                                        />
                                      )}
                                    </span>
                                    <span
                                      className={classNames(
                                        open ? "font-semibold" : "",
                                        "text-gma-carbon hover:bg-gma-bg py-2 px-4"
                                      )}
                                    >
                                      Get Started
                                    </span>
                                  </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel
                                  as="div"
                                  className=" py-3 flex flex-col"
                                >
                                  <Link
                                    to="/"
                                    className="py-1 px-6 hover:bg-gma-bg text-gma-dd-hover"
                                  >
                                    Local Advertising
                                  </Link>
                                  <Link
                                    to="/"
                                    className="py-1 px-6 hover:bg-gma-bg text-gma-dd-hover"
                                  >
                                    Digital Advertising
                                  </Link>
                                  <Link
                                    to="/"
                                    className="py-1 px-6 hover:bg-gma-bg text-gma-dd-hover"
                                  >
                                    Branding
                                  </Link>
                                  <Link
                                    to="/"
                                    className="py-1 px-6 hover:bg-gma-bg text-gma-dd-hover"
                                  >
                                    Web Applications
                                  </Link>
                                  <Link
                                    to="/"
                                    className="py-1 px-6 hover:bg-gma-bg text-gma-dd-hover"
                                  >
                                    Public Relations
                                  </Link>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                          <AnchorLink
                            to="/#company"
                            className="text-gma-carbon hover:bg-gma-bg py-2 px-4"
                          >
                            Company
                          </AnchorLink>
                          <Link
                            className="text-gma-carbon hover:bg-gma-bg py-2 px-4"
                            to="/archive"
                          >
                            Articles
                          </Link>
                          <Link className="text-gma-carbon hover:bg-gma-bg py-2 px-4">
                            Case Studies
                          </Link>
                          <Link
                            className="text-gma-carbon hover:bg-gma-bg py-2 px-4"
                            to="/contact"
                          >
                            Contact
                          </Link>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </>
    </Disclosure>
  );
};

export default Navbar;
