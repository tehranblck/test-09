"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const navigateToMoreInfo = () => {
    router.push('/more-info'); // Replace with the actual route to a detailed info page if available
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white  px-6">
      <div style={{ zIndex: '-1' }} className="layer top-0"></div>
      <div style={{ backdropFilter: 'blur(10px)' }}>
      
      <div className="bg-gray-700 pt-24 rounded-lg mt-16 shadow-lg p-8  w-full ">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-4">
          Free Social Gaming Experience
        </h1>

        {/* Introduction Section */}
        <section className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Social gaming provides a fantastic way to enjoy various games and connect with others in a virtual environment. Unlike traditional gaming formats, social games are designed purely for fun, offering players the chance to explore different game styles, build skills, and enjoy unique experiences with friends.
          </p>
        </section>

        {/* Features Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Key Features of Social Games</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Access games anytime, anywhere, with just an internet connection.</li>
            <li>Enjoy casual, friendly gameplay suitable for all skill levels.</li>
            <li>Compete in leaderboards and complete challenges with friends.</li>
            <li>Experience continuous updates with new levels, themes, and events.</li>
          </ul>
        </section>

        {/* Types of Social Games Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Types of Social Games</h2>
          <p className="text-gray-300 leading-relaxed">
            Social games cover a wide range of genres, from puzzles and word games to adventure and simulation. These games can be played solo or with others, and they often include features that encourage collaboration and friendly competition. Here are some popular types of social games:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Puzzle Games:</strong> Solve challenging puzzles and brain teasers that can be shared with friends.
            </li>
            <li>
              <strong>Strategy Games:</strong> Plan and build virtual worlds, make decisions, and collaborate with others.
            </li>
            <li>
              <strong>Simulation Games:</strong> Manage virtual communities or lifestyles, offering a variety of creative possibilities.
            </li>
          </ul>
        </section>

        {/* Community and Social Interaction Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Community and Social Interaction</h2>
          <p className="text-gray-300 leading-relaxed">
            Social games are designed to bring people together. They often include chat features, social media integration, and the ability to form groups or teams. Many players enjoy sharing achievements, competing on leaderboards, and working together to complete challenges. These elements create a sense of community and make social gaming an engaging experience.
          </p>
        </section>

        {/* More Information Button */}
       
      </div>
    </div>
    </div>
  );
};

export default Page;
