import React, { useEffect, useState, Fragment } from "react";
import {
  UpToTop,
  Chat,
  Screen,
  PaintBrush,
  Bullhorn,
  Events,
} from "@carbon/icons-react";

import { Popover, Transition, RadioGroup } from "@headlessui/react";
import { StaticImage } from "gatsby-plugin-image";

import { Phone, Email } from "@carbon/icons-react";
import { Link } from "gatsby";
import { LocationCompany } from "@carbon/icons-react";

const services = [
  { name: "Ads", icon: <Bullhorn className="text-kss-text h-6 w-6" /> },
  { name: "Web", icon: <Screen className="text-kss-text h-6 w-6" /> },
  { name: "Brand", icon: <PaintBrush className="text-kss-text h-6 w-6" /> },
  { name: "PR", icon: <Events className="text-kss-text h-6 w-6" /> },
];

const BackToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);
  const [service, setService] = useState(services[2]);

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
                <Chat
                  className={`${open ? "" : "text-opacity-70"}
                  h-5 w-5`}
                  aria-hidden="true"
                />
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
                <Popover.Panel className="[z-index:100] fixed bottom-0 w-full md:right-8 md:bottom-40 z-10 mt-3 md:w-96 md:max-w-md transform md:px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-x-hidden overflow-y-scroll max-h-[600px] shadow-lg contact rounded-md">
                    <div className="bg-gradient-to-br from-[#002a45] to-[#03070a] px-4 flex flex-col items-center">
                      <div className="flex gap-2 py-6 justify-center lg:justify-start">
                        <StaticImage
                          src="../assets/images/kss-logo-white.png"
                          className="w-10 h-12"
                        />
                        <div className="flex flex-col justify-start">
                          <p className="text-2xl text-white">KEVLAR</p>
                          <p className="text-sm text-white -mt-2">
                            SECURITY SOLUTIONS
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center gap-6 pb-4">
                        <a href="0408303603"><Phone className="h-6 w-6 text-white"/></a>
                        <a href="mailto:info@kevlarsecuritysolutions.com.au"><Email className="h-6 w-6 text-white"/></a>
                        <a href="https://www.google.com/maps/place/Kevlar+Security+Solutions+Pty+Ltd/@-42.8435445,147.2880071,17z/data=!3m1!4b1!4m5!3m4!1s0xaa6e74954dbad463:0x5fed1effc80b79a2!8m2!3d-42.8435678!4d147.290211"><LocationCompany className="h-6 w-6 text-white"/></a>
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
                              className="shadow-sm bg-gma-modal-inner border-b border-gray-300 block w-full sm:text-sm focus:outline-none focus:border focus:border-black text-kss-text p-2 "
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
                              className="shadow-sm bg-gma-modal-inner border-b border-gray-300 block w-full sm:text-sm focus:outline-none focus:border focus:border-black text-kss-text p-2 "
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
                              className="shadow-sm bg-gma-modal-inner border-b border-gray-300 block w-full sm:text-sm focus:outline-none focus:border focus:border-black text-kss-text p-2 "
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
                              className="shadow-sm bg-gma-modal-inner border-b border-gray-300 block w-full sm:text-sm focus:outline-none focus:border focus:border-black text-kss-text p-2 "
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <Popover.Button className="w-1/2 text-center text-white hover:bg-opacity-80 py-3 bg-[#6f6f6f]">
                            Cancel
                          </Popover.Button>
                          <button className="w-1/2 text-center text-white hover:bg-opacity-80 py-3 bg-black">
                            Submit
                          </button>
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
