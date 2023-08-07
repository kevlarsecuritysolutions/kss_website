import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewClientsBar = () => {
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
    pauseonFocus: false,
    swipe: false,
    touchMove: false,
    draggable: false,
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
    <section className="bg-[#f6f6f6] py-6 relative overflow-hidden" id="clients">
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
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 xl:grid-cols-8">
        <div className="col-span-2">
          <div className="flex flex-col px-4">
            <div className="max-w-3xl sm:text-left">
              <div className="h-1 my-4 bg-kss-text w-12"></div>
              <h2 className="text-3xl xl:text-3xl text-kss-text font-bold pb-2 uppercase">
                Our Clients
              </h2>
              <p className="mt-2 text-sm text-kss-text pb-4 pr-20">
                We have more than 150 clients, and service more than 1800 sites
                in Tasmania.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <Slider {...settings}>
            <div className="px-0 lg:px-6  flex justify-center items-center h-36 w-36 relative">
              <StaticImage
                className=""
                src="https://images.ctfassets.net/lfrbwr0lmnkj/22CS7zfdsPxeTN02WSNvxT/7166d4de024953660bdb4aa5fb57735c/CSIRO__1_.png"
                alt="CSIRO"
                loading="eager"
              />
            </div>
            <div className="px-6  flex justify-center items-center h-36 w-36 relative">
              <StaticImage
                className=""
                src="https://images.ctfassets.net/lfrbwr0lmnkj/oR384KmkLWW68QhTNvL6w/74b47bca76c44694ac6977625980a620/TasNetworks.png"
                alt="TasNetworks"
                loading="eager"
              />
            </div>
            <div className="px-6  flex justify-center items-center h-36 w-36 relative">
              <StaticImage
                className=""
                src="https://images.ctfassets.net/lfrbwr0lmnkj/V0JFL7cChc9P2wLH0QdEX/248327cdf7c14b6b6562706987eb1356/HCC.png"
                alt="HCC"
                loading="eager"
              />
            </div>
            <div className="px-6  flex justify-center items-center h-36 w-36 relative">
              <StaticImage
                className=""
                src="https://images.ctfassets.net/lfrbwr0lmnkj/1nDjx5LGo7rUBmhjSRv0UX/46060553f3ac4d09f4efd9709d655b48/Fernwood.png"
                alt="Fernwood"
                loading="eager"
              />
            </div>
            <div className="px-6  flex justify-center items-center h-36 w-36 relative">
              <StaticImage
                className=""
                src="https://images.ctfassets.net/lfrbwr0lmnkj/2ohSCbz7BqWPjbtymPPott/4db300407e11ebb7427b298e1576a7d4/Kalis.png"
                alt="Kalis"
                loading="eager"
              />
            </div>
            <div className="px-6  flex justify-center items-center h-36 w-36 relative">
              <StaticImage
                className=""
                src="https://images.ctfassets.net/lfrbwr0lmnkj/7hw6HCTOgmeggP35hUQw3N/e943da8ad08376018b2151b51fe7bd80/Hazell.png"
                alt="Hazell"
                loading="eager"
              />
            </div>
            <div className="px-6  flex justify-center items-center h-36 w-36 relative">
              <StaticImage
                className=""
                src="https://images.ctfassets.net/lfrbwr0lmnkj/7pH7CGz4Dztu2yAHW9smPv/f6e2214abae0cf7ee1826e4edba7c7b0/HockeyTas.png"
                alt="HockeyTas"
                loading="eager"
              />
            </div>
            <div className="px-6  flex justify-center items-center h-36 w-36 relative">
              <StaticImage
                className=""
                src="https://images.ctfassets.net/lfrbwr0lmnkj/59iyNKXoVdnXJl2ntlhWfI/d25f3b1d38e6689c8c710aa0fa8a8960/GCC.png"
                alt="GCC"
                loading="eager"
              />
            </div>
            <div className="px-6  flex justify-center items-center h-36 w-36 relative">
              <StaticImage
                className=""
                src="https://images.ctfassets.net/lfrbwr0lmnkj/6SQBu6xsVWuFrUsv4gScu1/5ff73514858e4987299c56f0b4198745/Mitre10.png"
                alt="Mitre10"
                loading="eager"
              />
            </div>
            <div className="px-6  flex justify-center items-center h-36 w-36 relative">
              <StaticImage
                className=""
                src="https://images.ctfassets.net/lfrbwr0lmnkj/1jSgmJDqI37dKSzd1VHd8j/3b81dc49dae32ad1760fdb4e782e5d82/MyState.png"
                alt="MyState"
                loading="eager"
              />
            </div>
            <div className="px-6  flex justify-center items-center h-36 w-36 relative">
              <StaticImage
                className=""
                src="https://images.ctfassets.net/lfrbwr0lmnkj/5zS9W16qsYi8C9eWzwvXSc/fc6a9be6132fc102d07c076bf10d390a/Blundstone.png"
                alt="Blundstone"
                loading="eager"
              />
            </div>
            <div className="px-6 flex justify-center items-center h-36 w-36 relative">
              <StaticImage
                className=""
                src="https://images.ctfassets.net/lfrbwr0lmnkj/6NhghJyNzAP06LbVBaqKes/8aac53a50649d941b96ba2bfbe55e3c9/Hutchinson.png"
                alt="Hutchinson"
                loading="eager"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewClientsBar;
