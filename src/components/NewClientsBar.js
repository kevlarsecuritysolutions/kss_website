import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "../components/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewClientsBar = () => {
  return (
    <section
      className="bg-[#f6f6f6] py-6 relative overflow-hidden"
      id="clients"
    >
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
      <div className="hidden 2xl:block absolute -right-[650px] -bottom-[450px] z">
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
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 xl:grid-cols-8">
        <div className="col-span-2">
          <div className="flex flex-col px-4">
            <div className="max-w-3xl sm:text-left">
              <div className="h-1 my-4 bg-kss-text w-12"></div>
              <h2 className="text-3xl xl:text-3xl text-kss-text font-bold pb-2 uppercase">
                Our Clients
              </h2>
              <p className="mt-2 text-sm text-kss-text pb-4 pr-20 z-20 relative">
                We service more than 3000 sites for over 300 clients across Tasmania.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          
          <Slider/>
        </div>
      </div>
    </section>
  );
};

export default NewClientsBar;
