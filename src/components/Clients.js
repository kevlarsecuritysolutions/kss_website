import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight, ArrowLeft } from "@carbon/icons-react";

const Clients = () => {
  const settings = {
    className: "flex justify-center items-center px-4",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-6 pb-12 relative overflow-hidden">
      <div className="hidden xl:block absolute -left-[650px] -bottom-[375px]">
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          width="1500"
          height="987"
          viewBox="0 0 684.85 450.608"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="-0.528"
              y1="0.613"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#0b2338" stop-opacity="0.616" />
              <stop offset="1" stop-color="#fff" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="0.56"
              y1="0.959"
              x2="0.5"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#0b2338" />
              <stop offset="1" stop-color="#fff" />
            </linearGradient>
          </defs>
          <g
            id="Group_4"
            data-name="Group 4"
            transform="translate(-2015.182 1037.108)"
          >
            <path
              id="Path_8"
              data-name="Path 8"
              d="M350.636,0,258.579,511.138,0,606.389Z"
              transform="matrix(0.174, 0.985, -0.985, 0.174, 2639.145, -1037.108)"
              opacity="0.332"
              fill="url(#linear-gradient)"
            />
            <path
              id="Path_9"
              data-name="Path 9"
              d="M255.374,441.644,188.328,69.373,0,0Z"
              transform="matrix(0.174, -0.985, 0.985, 0.174, 2015.182, -690.85)"
              opacity="0.06"
              fill="url(#linear-gradient-2)"
            />
          </g>
        </svg>
      </div>
      <div className="hidden xl:block absolute -right-[650px] -bottom-[450px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="987"
          viewBox="0 0 658.064 450.608"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.56"
              y1="0.041"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#0b2338" />
              <stop offset="1" stop-color="#fff" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="0.56"
              y1="0.959"
              y2="0"
            />
          </defs>
          <g
            id="Group_3"
            data-name="Group 3"
            transform="translate(-1438.182 -405.892)"
          >
            <path
              id="Path_3"
              data-name="Path 3"
              d="M323.543-212.9,231.486,298.24-27.093,393.491Z"
              transform="matrix(-0.174, -0.985, 0.985, -0.174, 1704.028, 792.849)"
              opacity="0.102"
              fill="url(#linear-gradient)"
            />
            <path
              id="Path_4"
              data-name="Path 4"
              d="M255.374,441.644,188.328,69.373,0,0Z"
              transform="matrix(0.174, -0.985, 0.985, 0.174, 1601.182, 685.15)"
              opacity="0.219"
              fill="url(#linear-gradient-2)"
            />
          </g>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl sm:text-left">
          <div className="h-1 my-4 bg-kss-text w-12"></div>
          <h2 className="text-xl xl:text-3xl text-kss-text font-bold pb-2 uppercase">
            Acknowledgement of Country
          </h2>
        </div>
        <p className="text-md text-kss-text">
          We acknowledge the Traditional Custodians of the land on which we
          work, the Palawa people of Lutruwita (Tasmania). We recognise and
          celebrate their deep spiritual connection to Country, and their
          strength, resilience and contribution to our community. We pay our
          respects to all Aboriginal and Torres Strait Islander cultures, and to
          all Elders, past and present.
        </p>
        {/* <div className="flex flex-col pt-12 px-4">
          <div className="max-w-3xl sm:text-left">
            <div className="h-1 my-4 bg-kss-text w-12"></div>
            <h2 className="text-3xl xl:text-4xl text-kss-text font-bold pb-8 uppercase">
              Compliance Standards
            </h2>
            <div className="max-w-5xl">
              <p className="text-lg text-kss-text pb-4">
                Our commitment to the highest level of compliance and
                performance is demonstrated by our ISO accreditations for
                Quality Management Systems (ISO 9001) and Occupational Health &
                Safety Management Systems (ISO 45001).
              </p>
              <p className="text-lg text-kss-text pb-4">
                We are audited and assessed annually to ensure ongoing
                compliance.
              </p>
              <p className="pb-4 text-lg text-kss-text">
                In addition to our ISO compliances, we have voluntarily adopted
                a variety of policies and practices to demonstrate our
                commitment to best practice business operation, including:
              </p>
              <ul className="pb-4 text-lg text-kss-text list-disc pl-4 lg:pl-8">
                <li className="py-1">
                  <p>Modern slavery and supply chain integrity policy</p>
                </li>
                <li className="py-1">
                  <p>
                    Use of comprehensive visa and work rights compliance checks
                    and tracking software
                  </p>
                </li>
                <li className="py-1">
                  <p>Data breach response plan</p>
                </li>
                <li className="py-1">
                  <p>Environmental impact policy</p>
                </li>
                <li className="py-1">
                  <p>Equity and diversity policy</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-12 flex items-center w-full lg:w-[750px] max-w-7xl gap-8">
            <StaticImage
              src="https://images.ctfassets.net/lfrbwr0lmnkj/2Xs2bRQBl50QbSRXqPDzYg/251ae23ff80cd80b51e99faf7988f00e/kss-signature.png"
              className=""
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Clients;
