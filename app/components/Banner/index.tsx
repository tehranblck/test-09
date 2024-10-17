"use client";
import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Banner = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    <div  className="bg-image relative" id="home-section">
      <div className="arrowOne"></div>
      <div className="radial-banner hidden lg:block"></div>
      {/* <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hYyMDvRQMAk"
        onClose={() => setOpen(false)}
      /> */}

      <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">
        <div className="height-work">
          <div className="flex justify-center items-center flex-col-reverse">
            {/* <div className="arrowTwo"></div> */}
            <div className="col-span-7">
              <h1 className="text-3xl lg:text-6xl font-bold mb-5 !backdrop-brightness-50 text-white md:4px md:text-center text-center w-70%">
                Find Your Best Social Casino Game
              </h1>
              <p className="text-white md:text-sm space-x-1 font-normal mb-10 md:text-center text-center">
                Welcome to yourgamedestination.org, the ultimate destination for
                social casino game reviews! Our platform is dedicated to
                providing insightful and engaging reviews of a wide variety of
                popular casino-style games. We focus on games that are purely
                for entertainment purposes, allowing players to enjoy slots,
                poker, blackjack, and more without the need for real money.
                Explore our reviews to discover the best social casino game and
                enjoy a safe, fun, and risk-free gaming experience.
              </p>
              {/* <div className="flex align-middle justify-center md:justify-center">
                <button
                  onClick={() => setOpen(true)}
                  className="bg-transparent flex justify-center items-center text-white"
                >
                  <Image
                    src={"/images/Banner/playbutton.svg"}
                    alt="button-image"
                    className="mr-3"
                    width={67}
                    height={67}
                  />
                </button>
              </div> */}
            </div>

            <div className="col-span-5 lg:mb-10">
              <div className="arrowThree"></div>
              <div className="arrowFour"></div>
              <div className="arrowFive"></div>
              <a href="game/index.html">
                <Image
                  className="m-auto hidden md:block"
                  src="/images/Logo/ban.png"
                  alt="nothing"
                  width={400}
                  height={460}
                />
              </a>
              <div className="arrowSix"></div>
              <div className="arrowSeven"></div>
              <div className="arrowEight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
