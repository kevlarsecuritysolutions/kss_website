import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "@carbon/icons-react";

import imgImogen from "../assets/images/employees/imogen.jpg";
import imgMonica from "../assets/images/employees/monica-dias.jpg";
import imgAjaya from "../assets/images/employees/ajaya-shrestha.jpg";
import imgJake from "../assets/images/employees/jake-sivaraman.jpg";
import imgBradley from "../assets/images/employees/bradley-oates.jpg";
import imgMuhammad from "../assets/images/employees/muhammed-haneef.jpg";
import imgWilliam from "../assets/images/employees/william-taylor.jpg";
import imgBraiden from "../assets/images/employees/braiden-graham.jpg";
import imgJim from "../assets/images/employees/jim-christou.jpg";
import imgRyan from "../assets/images/employees/ryan-gengelacki.jpg";

const months = ["Jan 2026", "Feb 2026"];

const winners = {
  "Jan 2026": [
    {
      name: "Imogen Burton",
      image: imgImogen,
      description:
        "Congratulations Imogen Burton, Kevlar's Employee of the Month (January 2026)! As Ground Ops supervisor and leading hand at the Foo Fighters event, Imogen kept calm under pressure, delivered exceptional service and was recognised by the client and KSS management. Thank you Imogen, you make Kevlar proud.",
    },
    {
      name: "Monica Dias",
      image: imgMonica,
      description:
        "Congratulations Monica Dias, Kevlar's Employee of the Month (January 2026)! Recognised for Respect & Courtesy and outstanding Teamwork & Collaboration, Monica's welfare checks, shift support and solution-focused approach keep the team strong. Thank you for living the Kevlar way.",
    },
    {
      name: "Ajaya Shrestha",
      image: imgAjaya,
      description:
        "Congratulations Ajaya Shrestha, Kevlar's Employee of the Month (January 2026)! Recognised for consistent excellence across service, safety, integrity, teamwork and innovation, your client focus, mentorship and dedication lift the whole team.",
    },
    {
      name: "Jake Sivaraman",
      image: imgJake,
      description:
        "Congratulations Jake Sivaraman, Kevlar's Employee of the Month (January 2026)! Recognised for teamwork, integrity and outstanding service at The Great Escape Festival, Jake kept operations running through long shifts and last-minute challenges. Thanks Jake, you make Kevlar proud.",
    },
    {
      name: "Bradley Oates",
      image: imgBradley,
      description:
        "Congratulations Bradley Oates, Kevlar's Employee of the Month (January 2026)! Recognised for Teamwork & Collaboration, Integrity & Accountability and Excellence in Service, Bradley stepped up to cover an Alpha Car shift during a demanding period, showing leadership and steadfast professionalism. Thanks Bradley, you make Kevlar proud.",
    },
    {
      name: "Muhammad Haneef",
      image: imgMuhammad,
      description:
        "Congratulations Muhammad Haneef, Kevlar's Employee of the Month (January 2026)! Recognised for consistent excellence across service, integrity, safety and teamwork. Muhammad's leadership during the Tasports transition, proactive coordination, hands-on support and strong engagement with management, kept operations steady when it mattered most. Thank you for your commitment.",
    },
    {
      name: "William Roy Taylor",
      image: imgWilliam,
      description:
        "Congratulations William Roy Taylor, Kevlar's Employee of the Month (January 2026)! Recognised for Respect & Courtesy and Excellence in Service for his professional, positive presence during the Hobart City Council Waterfront deployment on New Year's Eve, assisting patrons, supporting traffic controllers and keeping the community safe. Thanks William, you make Kevlar proud.",
    },
    {
      name: "Braiden Graham",
      image: imgBraiden,
      description:
        "Congratulations Braiden Graham, Kevlar's Employee of the Month (January 2026)! For decisive leadership at Gate 11 during the Foo Fighters event, Braiden delivered calm, firm and professional service under pressure. Thanks for keeping things running smoothly, you make Kevlar proud.",
    },
  ],
  "Feb 2026": [
    {
      name: "Jim Christou",
      image: imgJim,
      description:
        "Congratulations to Jim Christou, our Employee of the Month for February 2026. Jim consistently demonstrates professionalism, integrity, and a strong commitment to safety and teamwork, delivering service that exceeds expectations. His dedication and high standards make a valuable contribution to Kevlar Security Solutions, well done Jim!",
    },
    {
      name: "Ryan Gengelacki",
      image: imgRyan,
      description:
        "Congratulations to Ryan Gengelacki, our Employee of the Month for February 2026. Ryan continues to exceed expectations through his professionalism, integrity, and commitment to safety and teamwork. It was particularly rewarding to see one of our Team Leaders recognise his efforts, highlighting the high standard he consistently delivers on site. A well-deserved achievement, great work Ryan.",
    },
  ],
};

function WinnerCard({ winner }) {
  return (
    <div className="bg-[#000e17] border border-kss-text-dark/20 flex flex-col h-full">
      {/* Fixed-ratio image area */}
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingBottom: "75%" }}
      >
        <img
          src={winner.image}
          alt={winner.name}
          className="absolute inset-0 w-full h-full object-cover object-top "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000e17] via-transparent to-transparent" />
      </div>

      {/* Text content — grows to fill remaining card height */}
      <div className="p-6 flex flex-col flex-1">
        <div className="h-[2px] bg-gradient-to-r from-[#17415c] via-[#646464] to-[#003d64] mb-4" />
        <h3 className="text-white font-bold text-lg uppercase leading-tight mb-3">
          {winner.name}
        </h3>
        <p className="text-kss-text-dark text-sm leading-relaxed flex-1">
          {winner.description}
        </p>
      </div>
    </div>
  );
}

const EoM = () => {
  const [activeMonth, setActiveMonth] = useState("Jan 2026");
  const sliderRef = useRef(null);

  const currentWinners = winners[activeMonth];
  const useCarousel = currentWinners.length > 3;

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      {/* Slick equal-height override — scoped to this component */}
      <style>{`
        .eom-slider .slick-track {
          display: flex !important;
        }
        .eom-slider .slick-slide {
          height: auto !important;
          display: flex !important;
          flex-direction: column;
        }
        .eom-slider .slick-slide > div {
          display: flex;
          flex: 1;
          width: 100%;
        }
      `}</style>

      <section className="relative bg-gradient-to-b from-[#03070a] to-[#001a2f] overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="hidden xl:block absolute -bottom-32 right-0">
          <svg
            width="1309"
            height="556"
            viewBox="0 0 1309 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 555.722H1307.01L1308.26 0.000183105L0 555.722Z"
              fill="url(#paint0_radial_eom)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_eom"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(654.128 277.861) scale(654.128 277.861)"
              >
                <stop stopColor="#001a2f" />
                <stop offset="0.34" stopColor="#00111e" />
                <stop offset="1" stopColor="#03070A" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 relative z-10">
          {/* Section header — matches Services.js heading block */}
          <div className="pb-12 max-w-5xl">
            <div className="h-1 my-4 bg-white w-12"></div>
            <h2 className="text-3xl xl:text-4xl text-white font-bold pb-4 xl:pb-8 uppercase">
              Employee of the Month
            </h2>
            <p className="text-white text-md lg:text-lg">
              Kevlar Security has launched its Employee of the Year program,
              including Employee of the Month, to properly celebrate the team
              that keeps us safe and professional. Management may award multiple
              winners where deserved.
            </p>
          </div>

          {/* Month tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setActiveMonth(month)}
                className={`px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  activeMonth === month
                    ? "bg-kss-blue border-kss-blue text-white"
                    : "bg-transparent border-white/20 text-kss-text-dark hover:border-white/50 hover:text-white"
                }`}
              >
                {month}
              </button>
            ))}
          </div>

          {/* Cards: static 3-col grid for ≤3 winners, carousel for >3 */}
          {useCarousel ? (
            <div className="relative">
              <div className="eom-slider -mx-3">
                <Slider key={activeMonth} ref={sliderRef} {...sliderSettings}>
                  {currentWinners.map((winner, i) => (
                    <div key={i} className="px-3">
                      <WinnerCard winner={winner} />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Arrow navigation */}
              <div className="flex items-center gap-3 mt-6 justify-end">
                <button
                  onClick={() => sliderRef.current?.slickPrev()}
                  aria-label="Previous"
                  className="flex items-center justify-center w-10 h-10 bg-transparent border border-kss-text-dark/40 text-kss-text-dark hover:bg-white hover:text-black hover:border-white transition"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => sliderRef.current?.slickNext()}
                  aria-label="Next"
                  className="flex items-center justify-center w-10 h-10 bg-transparent border border-kss-text-dark/40 text-kss-text-dark hover:bg-white hover:text-black hover:border-white transition"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {currentWinners.map((winner, i) => (
                <div key={i} className="flex flex-col">
                  <WinnerCard winner={winner} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default EoM;
