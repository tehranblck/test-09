"use client";
import React from 'react';
import Image from 'next/image';
import Button from '../components/Button/Button';

const SlotPan = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 mt-32 to-gray-800 text-white">
      {/* Hero Section */}
     
    

      {/* About Slot Pan Section */}
      <section className="py-16 bg-gray-800 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-blue-400">What is Slot Pan?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Slot Pan is a simple yet thrilling game that combines elements of traditional slot machines with the excitement of quick decision-making. In this game, players spin the reels and aim to align matching symbols across paylines to win rewards.
          </p>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-purple-400">How to Play</h2>
            <ul className="list-decimal list-inside text-gray-300 space-y-4">
              <li><strong>Place Your Bet:</strong> Select your bet size to determine your potential winnings.</li>
              <li><strong>Spin the Reels:</strong> Hit the spin button and watch the reels rotate.</li>
              <li><strong>Match Symbols:</strong> Align specific symbols across active paylines to win.</li>
              <li><strong>Win Prizes:</strong> If the symbols align, you win a prize based on the paytable.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/pandaslot.png"
              alt="How to Play Slot Pan"
              width={400}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Types of Slot Pan Games Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-400">Types of Slot Pan Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-400">Classic Slot Pan</h3>
              <p className="text-gray-300 mt-4">
                Stick to the basics with three reels and simple paylines.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-400">Multi-Line Slot Pan</h3>
              <p className="text-gray-300 mt-4">
                Offers multiple paylines, increasing your chances of winning with each spin.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-400">Bonus Slot Pan</h3>
              <p className="text-gray-300 mt-4">
                Includes special features like free spins, bonus rounds, and multipliers for bigger rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Play Slot Pan Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-blue-400">Why Play Slot Pan?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Slot Pan is perfect for players who enjoy fast-paced action with straightforward rules. The game offers a mix of excitement and simplicity, making it a great choice whether you’re looking for a quick game or aiming to hit big payouts with strategic spins.
          </p>
        </div>
      </section>

      {/* Play Now Section */}
      <section className="py-16 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-400">Ready to Spin?</h2>
          <p className="text-lg text-gray-300 mt-4">Start playing Slot Pan now and enjoy the thrill of spinning the reels!</p>
          <div className="mt-8">
          <Button btncolor="#ff00e0" btnTxtColor='black' buttonText="Play Now" href="/game/index.html"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlotPan;
