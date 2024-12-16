"use client";
import React, { useState } from "react";
import Image from "next/image";

const MysteryMice = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handlePlayNowClick = () => {
    setShowIframe(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-800 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold text-yellow-400 drop-shadow-lg">
            Welcome to Mystery Mice
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Sniff out clues and uncover surprises in this thrilling adventure!
            Join the detective mouse on a journey full of fun, strategy, and
            unexpected discoveries.
          </p>

          <p className="text-sm text-gray-400 mt-4">
            100% Free to Play! No Deposit Required.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-teal-400">
            What&apos;s Mystery Mice?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Join a detective mouse on a 6×6 tumbling reel grid as it hunts for
            surprises and builds clusters of excitement. Look out for symbols
            like the suspect, policeman, cap, and pipe, and don’t miss the
            Power Wilds—they can help you form bigger clusters and stay sticky
            for longer tumbles!
          </p>
          <div className="mt-6">
            <Image
              src="/mystery-mice-grid.png"
              alt="Mystery Mice Gameplay"
              width={900}
              height={900}
              quality={100}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Gameplay Features Section */}
      <section className="bg-gradient-to-b from-purple-900 to-gray-800 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-yellow-400">
              Game Features
            </h2>
            <ul className="text-gray-300 space-y-4">
              <li>
                <strong>Power Wilds:</strong> Special sticky symbols with levels
                (1 to 10) that help form clusters.
              </li>
              <li>
                <strong>Spyglass Scatter Symbols:</strong> Landing three or more
                awards between 10 and 18 free spins.
              </li>
              <li>
                <strong>Level Ups:</strong> Power Wilds can gain extra lifespan
                during tumbles.
              </li>
              <li>
                <strong>Bonus Feature:</strong> Two or more scatters during free
                spins add extra spins to your count!
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/mystery-mice-hero.png"
              alt="Mystery Mice Features"
              quality={86}
              width={400}
              height={400}
              className="rounded-xl "
            />
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-gray-900 py-16 text-center">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-teal-400">Play for Free</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Mystery Mice is 100% free to play. No deposit, no risks, just pure
            fun and excitement. Dive into the adventure today!
          </p>
          <p className="text-sm text-gray-400">
            Disclaimer: Mystery Mice is a free-to-play game for entertainment
            purposes only. No real money is involved.
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={handlePlayNowClick}
            className="bg-yellow-500 text-white px-6 py-4 rounded-full font-bold shadow-lg hover:bg-yellow-600 hover:scale-105 transition transform duration-300 ease-in-out animate-bounce"
          >
            🐭 Play Mystery Mice Now! 🎉
          </button>
        </div>
      </section>

      {/* Iframe Section */}
      {showIframe && (
        <section className="bg-gray-900 py-16 text-center">
          <div className="max-w-6xl mx-auto">
            <iframe
              src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20powerwild&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F"
              width="100%"
              height="600px"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </section>
      )}
    </div>
  );
};

export default MysteryMice;
