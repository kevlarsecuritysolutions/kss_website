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
    <section className="bg-gray-100 pb-12 py-12 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* <div className="flex flex-col pt-12 pb-12 px-4">
          <div className="max-w-3xl sm:text-left">
            <div className="h-1 my-4 bg-kss-text w-12"></div>
            <h2 className="text-3xl xl:text-4xl text-kss-text font-bold pb-8 uppercase">
              Our Clients
            </h2>
            <div className="max-w-5xl">
              <p className="mt-2 text-lg text-kss-text pb-4">
                We have more than 150 clients, and service more than 1800 sites
                in Tasmania. Some of our clients are listed below
              </p>
            </div>
          </div>
        </div>
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
          <div className="px-6  flex justify-center items-center h-36 w-36 relative">
            <StaticImage
              className=""
              src="https://images.ctfassets.net/lfrbwr0lmnkj/79bLyCzUD0boZUHQP6B7Ih/95e88bbab4f5167c27d6b8b3afb4f471/Hutchinson.png"
              alt="Hutchinson Builders"
              loading="eager"
            />
          </div>
        </Slider> */}

        <div className="flex flex-col pt-12 px-4">
          <div className="max-w-3xl sm:text-left">
            <div className="h-1 my-4 bg-kss-text w-12"></div>
            <h2 className="text-3xl xl:text-4xl text-kss-text font-bold pb-8 uppercase">
              Compliance Standards
            </h2>
            <div className="max-w-5xl">
              <p className="mt-2 text-lg text-kss-text pb-4">
                Our commitment to the highest level of compliance and
                performance is demonstrated by our ISO accreditations for
                Quality Management Systems (ISO 9001) and Occupational Health &
                Safety Management Systems (ISO 45001).
              </p>
              <p className="mt-2 text-lg text-kss-text">
                We are audited and assessed annually to ensure ongoing
                compliance.
              </p>
              <p className="mt-2 text-lg text-kss-text">
                In addition to our ISO compliances, we have voluntarily adopted
                a variety of policies and practices to demonstrate our
                commitment to best practice business operation, including:
              </p>
              <ul className="py-4 text-lg text-kss-text list-disc pl-4 lg:pl-8">
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
        </div>
      </div>
    </section>
  );
};

export default Clients;
