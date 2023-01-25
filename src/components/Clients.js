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
    autoplay:true,
    autoplaySpeed: 0,
    speed:5000,
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
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 pb-12" id="clients">
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
          <div className="px-6  flex justify-center items-center h-36 w-36 relative">
            <StaticImage
              className="!absolute !top-8 !left-36"
              src="https://images.ctfassets.net/lfrbwr0lmnkj/4cZ046544bQNzkDxuLfU0O/fb7c8e6a655e8ca5cf33a7ededcf5843/csiro.png"
              alt="CSIRO"
            />
          </div>
          <div className="px-6  flex justify-center items-center h-36 w-36 relative">
            <StaticImage
              className="!absolute !top-6 !left-20"
              src="https://images.ctfassets.net/lfrbwr0lmnkj/39kdInSHTQizfAvuw0b8Fc/5489adf7bde40f101d1ae697264bb35c/Tasnetworks.png"
              alt="Tas Networks"
            />
          </div>
          <div className="px-6  flex justify-center items-center h-36 w-36 relative">
            <StaticImage
              className="!absolute !top-0 !left-20"
              src="https://images.ctfassets.net/lfrbwr0lmnkj/56ScwbSiJk5cuE68uq0O1V/1e4f79b7d7c9f406e1d67f01a3605028/hcc.png"
              alt="Hobart City Council"
            />
          </div>
          <div className="px-6  flex justify-center items-center h-36 w-36 relative">
            <StaticImage
              className="!absolute !top-12 !left-20"
              src="https://images.ctfassets.net/lfrbwr0lmnkj/43DQG8r6RxwyynXtSeRK33/3e4e8091b7e4e6908ab3c33f56d4dba8/Fernwood.png"
              alt="Fernwood"
            />
          </div>
          <div className="px-6  flex justify-center items-center h-36 w-36 relative">
            <StaticImage
              className="!absolute !top-10 !left-20"
              src="https://images.ctfassets.net/lfrbwr0lmnkj/4oTwiYYQS5KZJ2uzEQvVJD/844a1e2397d546bb845ea3d09f1b744d/kalis.png"
              alt="Kalis Property"
            />
          </div>
          <div className="px-6  flex justify-center items-center h-36 w-36 relative">
            <StaticImage
              className="!absolute !top-12 !left-20"
              src="https://images.ctfassets.net/lfrbwr0lmnkj/5Zztf94qryJIMZP501330H/c4b053aa175fba1cc8c76b6d4dd7ee09/gcc.png"
              alt="Glenorchy City Council"
            />
          </div>
          <div className="px-6  flex justify-center items-center h-36 w-36 relative">
            <StaticImage
              className="!absolute !top-14 !left-20"
              src="https://images.ctfassets.net/lfrbwr0lmnkj/3jIYhtL02xD6Nyr9jXbh1m/fa7ce0b6ece50a12de94805e0e2e2ab6/mitre-10.png"
              alt="Clennets Mitre 10"
            />
          </div>
          <div className="px-6  flex justify-center items-center h-36 w-36 relative">
            <StaticImage
              className="!absolute !top-14 !left-20"
              src="https://images.ctfassets.net/lfrbwr0lmnkj/4kSFF7sopbMshLzp4txTHE/33e9ae27e3b3244d4c76682c86663c16/mystate-bank-arena.png"
              alt="Mystate Bank Arena"
            />
          </div>
          <div className="px-6  flex justify-center items-center h-36 w-36 relative">
            <StaticImage
              className="!absolute !top-10 !left-20"
              src="https://images.ctfassets.net/lfrbwr0lmnkj/7qEGcyISN0hvrwEiFMw6LP/d29ae57160ec1a74413dfb7ddd68fdce/blundstone-arena.png"
              alt="Blundstone Arena"
            />
          </div>
        </Slider>

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

          <div className="py-12 flex items-center max-w-7xl gap-8">
            <StaticImage
              src="../assets/images/logos/ASIAL-logo.png"
              className="!w-24 !h-auto"
            />
            <StaticImage
              src="../assets/images/logos/ISO9001-logo.png"
              className="!w-24 !h-auto"
            />
            <StaticImage
              src="../assets/images/logos/ISO45001-logo.png"
              className="!w-24 !h-auto"
            />
            <StaticImage
              src="../assets/images/logos/Carbon-logo.png"
              className="!w-24 !h-auto"
            />
            <StaticImage
              src="../assets/images/logos/JAS-logo.png"
              className="!w-24 !h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
