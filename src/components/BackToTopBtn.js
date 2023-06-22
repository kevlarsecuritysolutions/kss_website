import React, { useEffect, useState, Fragment } from "react";
import {
  UpToTop,
  Chat,
  Screen,
  PaintBrush,
  Bullhorn,
  Events,
  Close,
  Checkmark
} from "@carbon/icons-react";

import { Popover, Transition, RadioGroup } from "@headlessui/react";
import { StaticImage } from "gatsby-plugin-image";

import { Phone, Email } from "@carbon/icons-react";
import { Link } from "gatsby";
import { LocationCompany } from "@carbon/icons-react";
import { useForm } from "@formspree/react";

const services = [
  { name: "Ads", icon: <Bullhorn className="text-kss-text h-6 w-6" /> },
  { name: "Web", icon: <Screen className="text-kss-text h-6 w-6" /> },
  { name: "Brand", icon: <PaintBrush className="text-kss-text h-6 w-6" /> },
  { name: "PR", icon: <Events className="text-kss-text h-6 w-6" /> },
];

const BackToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);
  const [service, setService] = useState(services[2]);
  const [state, handleSubmit] = useForm("mnqynzap");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      {showButton && (
        <Popover className="relative lg:block">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "" : "text-opacity-90"}
                inline-block rounded-full p-3 bg-black text-white font-medium text-xs leading-tight uppercase shadow-md hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-kss-blue focus:ring-offset-2 active:bg-gma-dd-hover active:shadow-lg transition ease-in-out bottom-20 right-5 fixed z-10 hover:bg-black`}
              >
                {open ? (
                  <Close className="h-5 w-5 transition" aria-hidden="true" />
                ) : (
                  <Chat
                    className={`${open ? "" : "text-opacity-70"}
                  h-5 w-5 transition`}
                    aria-hidden="true"
                  />
                )}
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="[z-index:100] fixed bottom-0 w-full md:right-8 md:bottom-40 z-10 mt-3 md:w-[450px] md:max-w-md transform md:px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-x-hidden overflow-y-scroll max-h-[600px] shadow-lg contact rounded-md">
                    <div className="bg-gradient-to-br from-[#002a45] to-[#03070a] px-4 flex flex-col items-center">
                      <div className="flex gap-2 py-6 justify-center lg:justify-start">
                        <StaticImage
                          src="../assets/images/kss-logo-white.png"
                          className="!w-10 !h-12"
                        />
                        <div className="flex flex-col justify-start">
                          <p className="text-2xl text-white">KEVLAR</p>
                          <p className="text-sm text-white -mt-2">
                            SECURITY SOLUTIONS
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center gap-6 pb-4">
                        <a href="0408303603" target="blank">
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
                    <div className="bg-white">
                      <h4 className="py-4 mx-4 text-kss-text pb-2">
                        Submit the form below to hear from one of our security
                        professionals:
                      </h4>
                      <div className="px-4 py-2">
                        <div className="h-[2px] w-full bg-gradient-to-r from-kss-blue to-black"></div>
                      </div>

                      <form onSubmit={handleSubmit} className="pt-2">
                        <div className="px-4 pt-6 pb-2">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-kss-text"
                          >
                            Name:
                          </label>
                          <div className="mt-1">
                            <input
                              required
                              rows={4}
                              name="name"
                              id="name"
                              className="shadow-sm bg-gma-modal-inner border border-gray-300 block w-full sm:text-sm focus:outline-none focus:border focus:border-black text-kss-text p-2 "
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="px-4 pt-6 pb-2">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-kss-text"
                          >
                            Email:
                          </label>
                          <div className="mt-1">
                            <input
                              required
                              rows={4}
                              name="email"
                              id="email"
                              className="shadow-sm bg-gma-modal-inner border border-gray-300 block w-full sm:text-sm focus:outline-none focus:border focus:border-black text-kss-text p-2 "
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="px-4 pt-6 pb-2">
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-kss-text"
                          >
                            Company:
                          </label>
                          <div className="mt-1">
                            <input
                              rows={4}
                              name="company"
                              id="company"
                              className="shadow-sm bg-gma-modal-inner border border-gray-300 block w-full sm:text-sm focus:outline-none focus:border focus:border-black text-kss-text p-2 "
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="px-4 py-6">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-kss-text"
                          >
                            Brief description of required services:
                          </label>
                          <div className="mt-1">
                            <textarea
                              required
                              rows={4}
                              name="message"
                              id="message"
                              className="shadow-sm bg-gma-modal-inner border border-gray-300 block w-full sm:text-sm focus:outline-none focus:border focus:border-black focus:ring-0 text-kss-text p-2 "
                              defaultValue={""}
                            />
                          </div>
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
                                        onClick={() =>
                                          window.location.reload(false)
                                        }
                                        className="inline-flex p-1.5 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-50 focus:ring-black-600"
                                      >
                                        <span className="sr-only">Dismiss</span>
                                        <Close
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
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
                        <div className="flex items-center justify-center">
                          <Popover.Button className="w-1/2 text-center text-white hover:bg-opacity-80 py-3 bg-[#6f6f6f]">
                            Cancel
                          </Popover.Button>
                          {state.submitting ? (
                            <button
                              className="w-1/2 text-center flex items-center justify-center text-white hover:bg-opacity-80 py-3 bg-black"
                              type="submit"
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
                              className="w-1/2 text-center text-white hover:bg-opacity-80 py-3 bg-black"
                              type="submit"
                            >
                              Submit
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      )}
      {showButton && (
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block rounded-full p-3 bg-black  text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-black hover:shadow-lg focus:bg-gma-dd-hover focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-gma-red focus:ring-offset-2 active:bg-gma-dd-hover active:shadow-lg transition ease-in-out bottom-5 right-5 fixed z-10"
          id="btn-back-to-top"
          aria-label="back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth", // for smoothly scrolling
            })
          }
        >
          <UpToTop className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default BackToTopBtn;
