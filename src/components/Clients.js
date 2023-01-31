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
    <section className="bg-gray-100 pb-12 py-12 lg:py-24" id="clients">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col pt-12 pb-12 px-4">
          <div className="max-w-3xl sm:text-left">
            <div className="h-1 my-4 w-full bg-kss-text w-12"></div>
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
        </Slider>

        <div className="max-w-7xl px-4 lg:pb-12">
          <p className="mt-12 text-lg text-kss-text pb-4 font-semibold">
            We work closely with the Tasmanian Government to provide leading
            security services to the following departments
          </p>
          <div className="flex flex-col lg:flex-row pt-12 lg:gap-12 items-center">
            <div className="hidden lg:flex items-center h-52 w-52 lg:h-full lg:w-auto">
              <StaticImage src="https://images.ctfassets.net/lfrbwr0lmnkj/Kf81SPCxFj4zPmORKqANk/e6d89c56d2d9dee1a65a259764e3dceb/C4_1-removebg-preview.png" />
            </div>
            <div className="lg:hidden w-full pb-12 ">
              <StaticImage src="https://images.ctfassets.net/lfrbwr0lmnkj/6iPr67RWU5cjw3g27KRAiU/646a00b97c6d24e10ca5cd3e4b6186c7/Tas-Gov-logo__2_.png" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div to="/services/static-guards" className="flex gap-4 group">
                <div className="min-w-[3px] max-w-[3px] rounded-xl bg-black"></div>
                <div className="flex flex-col">
                  <h4 className="text-kss-text font-semibold text-lg">
                    Department for Education, Children and Young People
                  </h4>
                </div>
              </div>
              <div to="/services/static-guards" className="flex gap-4 group">
                <div className="min-w-[3px] max-w-[3px] rounded-xl bg-black"></div>
                <div className="flex flex-col">
                  <h4 className="text-kss-text font-semibold text-lg">
                    Department of Police, Fire & Emergency Management
                  </h4>
                </div>
              </div>
              <div to="/services/site-entry" className="flex gap-4 group">
                <div className="min-w-[3px] max-w-[3px] rounded-xl bg-black"></div>
                <div className="flex flex-col">
                  <h4 className="text-kss-text font-semibold text-lg">
                    Department of Health
                  </h4>
                </div>
              </div>
              <div to="/services/static-guards" className="flex gap-4 group">
                <div className="min-w-[3px] max-w-[3px] rounded-xl bg-black"></div>
                <div className="flex flex-col">
                  <h4 className="text-kss-text font-semibold text-lg">
                    Department of Parks, Wildlife and Environment
                  </h4>
                </div>
              </div>
              <div to="/services/site-entry" className="flex gap-4 group">
                <div className="min-w-[3px] max-w-[3px] rounded-xl bg-black"></div>
                <div className="flex flex-col">
                  <h4 className="text-kss-text font-semibold text-lg">
                    Department of Treasury and Finance
                  </h4>
                </div>
              </div>
              <div to="/services/site-entry" className="flex gap-4 group">
                <div className="min-w-[3px] max-w-[3px] rounded-xl bg-black"></div>
                <div className="flex flex-col">
                  <h4 className="text-kss-text font-semibold text-lg">
                    Department of State Growth
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-24 px-4">
          <div className="max-w-3xl sm:text-left">
            <div className="h-1 my-4 w-full bg-kss-text w-12"></div>
            <h2 className="text-3xl xl:text-4xl text-kss-text font-bold pb-8 uppercase">
              Compliance Standards
            </h2>
            <div className="max-w-5xl">
              <p className="mt-2 text-lg text-kss-text pb-4">
                We have earned a reputation as a market leader in providing a
                wide range of security services including vehicle-based security
                patrols, 24 hour alarm / duress response, static guards, armed
                cash-in-transit and Automatic Teller Machine first-line response
                and maintenance, event security, concierge guard services, risk
                assessments.
              </p>
              <p className="mt-2 text-lg text-kss-text">
                We set ourselves apart by providing services which are
                responsive and flexible to our clients’ needs, and security
                personnel who are highly trained, reliable and skilled in a wide
                range of security and related roles.
              </p>
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
