"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const navigateToGames = () => {
    router.push('/games'); // Replace with the actual route to your games page or list
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-500 text-white py-12 px-6">
      <div  style={{zIndex:'-1'}} className='layer top-0'>

      </div>
      <div className="bg-red-400 rounded-lg mt-16 shadow-lg p-8 max-w-5xl w-full ">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center  text-blue-400 mb-4">
          Free Social Gaming Experience
        </h1>

        {/* Introduction Section */}
        <section className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Discover the world of free social gaming! Enjoy a wide variety of games that offer the excitement and fun of traditional gaming but without real money. Our platform brings together popular social games where you can play, connect, and compete with friends, all within a risk-free environment.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Why Choose Social Games?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Play without any financial risk.</li>
            <li>Connect with friends and make new ones in a virtual environment.</li>
            <li>Experience the excitement of popular games without spending.</li>
            <li>Enjoy different themes and styles, from card games to puzzles.</li>
          </ul>
        </section>

        {/* Popular Games Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Popular Social Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg shadow-md text-center">
              <Image
                src="/images/poker.jpg" // Replace with actual game images
                alt="Video Poker"
                width={200}
                height={150}
                className="rounded-md mb-3"
              />
              <p className="font-bold text-lg">Video Poker</p>
              <p className="text-gray-300">Experience a classic card game with a social twist.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-md text-center">
              <Image
                src="/images/slots.jpg" // Replace with actual game images
                alt="Slots"
                width={200}
                height={150}
                className="rounded-md mb-3"
              />
              <p className="font-bold text-lg">Slots</p>
              <p className="text-gray-300">Spin and win with a variety of themed slot games.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-md text-center">
              <Image
                src="/images/blackjack.jpg" // Replace with actual game images
                alt="Blackjack"
                width={200}
                height={150}
                className="rounded-md mb-3"
              />
              <p className="font-bold text-lg">Blackjack</p>
              <p className="text-gray-300">Challenge your friends and test your strategy skills.</p>
            </div>
          </div>
        </section>

        {/* Play Now Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={navigateToGames}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 shadow-lg"
          >
            Discover More Games
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
