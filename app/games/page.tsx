'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../components/Button/Button';

const VideoPoker = () => {
  const router = useRouter();

  const navigateToGame = () => {
    router.push('/play-game');
  };

  return (
    <div >
        <div style={{zIndex:'-1'}} className='layer'></div>
        <div style={{backdropFilter:'blur(10px)'}} className="flex flex-col items-center justify-center min-h-screen bg-gray-900 py-12 px-6 text-white">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl w-full space-y-6">
        {/* Page Header */}
        <h1 className="text-4xl mt-12 font-bold text-center text-blue-400 mb-4">
          Video Poker
        </h1>

        {/* Game Image */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/Logo/videopoker.png" // Replace with the actual image path
            alt="Video Poker Game"
            width={600}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">
            What is Video Poker?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Video poker combines the strategy of traditional card games with the ease of digital play. You get to decide which cards to keep and which to discard, directly influencing the outcome. This makes video poker a great choice for those who enjoy strategic decision-making.
          </p>
        </section>

        {/* How to Play Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">How to Play</h2>
          <ul className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Place your bet and begin the game.</li>
            <li>Receive five cards and decide which to keep.</li>
            <li>Replace discarded cards and reveal your final hand.</li>
            <li>Compare your hand to the paytable to see if you’ve won.</li>
          </ul>
        </section>

        {/* Payouts and Winning Hands Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">
            Payouts and Winning Hands
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Each hand offers different payouts, depending on the combination. Winning hands range from a Pair, Three of a Kind, to higher hands like Four of a Kind or a Royal Flush, each with increasing payouts.
          </p>
        </section>

        {/* Types of Video Poker Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">
            Types of Video Poker
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Common versions include:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Jacks or Better:</strong> Win with a pair of jacks or higher.
            </li>
            <li>
              <strong>Deuces Wild:</strong> All twos act as wild cards.
            </li>
            <li>
              <strong>Joker Poker:</strong> Includes a joker card as an additional wild card.
            </li>
          </ul>
        </section>

        {/* Play Now Button */}
        <div className="flex justify-center mt-8">
         
         <Button buttonText="Play" href={'/game/index.html'}/>
        </div>
      </div>
    </div>
        
    </div>
  );
};

export default VideoPoker;
