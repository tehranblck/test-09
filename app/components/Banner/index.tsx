"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button/Button";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-image pt-16 mb-16 sm:mt-0 relative" id="home-section">
      <div className="arrowOne"></div>
      <div className="radial-banner hidden lg:block"></div>

      <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">
        <div className="height-work">
          <div className="flex justify-center items-center flex-col-reverse">
            <div className="col-span-7">
              <h1 className="text-3xl lg:text-6xl font-bold mb-5 !backdrop-brightness-50 text-white text-center">
              Finde das beste Social-Casino-Spiel
              </h1>
              <p className="text-white md:text-sm space-x-1 font-normal mb-10 text-center">
              Willkommen auf zockerwelt-de.com, dem besten Ort, um Rezensionen über Social-Casino-Spiele zu finden! Unsere Website widmet sich der Bereitstellung aufschlussreicher und fesselnder Bewertungen einer Vielzahl beliebter Casino-ähnlicher Spiele. Wir konzentrieren uns auf Spiele, die ausschließlich zur Unterhaltung dienen und es den Nutzern ermöglichen, Poker, Blackjack, Slots und andere Spiele zu spielen, ohne etwas zu riskieren. Entdecke das beste Social-Casino-Spiel, indem du unsere Rezensionen liest, und genieße ein risikofreies, angenehmes und sicheres Spielerlebnis.
              </p>

              {/* Centered Button */}
              <div className="flex justify-center">
                <Button buttonText="Spielen" href="/game/index.html" />
              </div>
            </div>

            <div className="col-span-5 lg:mb-10">
              <div className="arrowThree"></div>
              <div className="arrowFour"></div>
              <div className="arrowFive"></div>
              <a href="game/index.html">
                <Image
                  className="m-auto hidden md:block"
                  src="/images/Logo/ban.png"
                  alt="banner-image"
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
