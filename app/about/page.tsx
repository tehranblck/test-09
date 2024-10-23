"use client";
import React from 'react';

const Page = () => {
 


  return (
    <div className="flex container mx-auto flex-col mt-32 items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-transparent text-white bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
          Experience the Future of Social Gaming
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Dive into a world of interactive and immersive social gaming experiences, where the boundaries of fun and community are limitless. Explore different games, connect with friends, and create lasting memories.
        </p>
       
      </div>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 border-t-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Accessible Gaming</h2>
          <p className="text-gray-400 leading-relaxed">
            Play your favorite social games anytime, anywhere, with just an internet connection.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 border-t-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Friendly Gameplay</h2>
          <p className="text-gray-400 leading-relaxed">
            Enjoy relaxed and friendly gameplay, suitable for players of all skill levels.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 border-t-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Continuous Updates</h2>
          <p className="text-gray-400 leading-relaxed">
            Experience continuous updates with new levels, themes, and events to keep you engaged.
          </p>
        </div>
      </section>

      {/* Types of Social Games Section */}
      <section className="max-w-4xl mx-auto space-y-8 mb-16">
        <h2 className="text-3xl font-semibold text-blue-400 text-center mb-8">Types of Social Games</h2>
        <div className="space-y-4">
          <p className="text-gray-400 leading-relaxed">
            Social games cover a wide range of genres, from puzzles and word games to adventure and simulation games. Play solo or with friends, and enjoy features that encourage collaboration and friendly competition.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-b-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-400">Puzzle Games</h3>
            <p className="text-gray-400 leading-relaxed">
              Solve challenging puzzles and brain teasers that you can share with friends.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-b-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-400">Strategy Games</h3>
            <p className="text-gray-400 leading-relaxed">
              Plan and build virtual worlds, make decisions, and collaborate with others.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-b-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-400">Simulation Games</h3>
            <p className="text-gray-400 leading-relaxed">
              Manage virtual communities or lifestyles and explore a variety of creative possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 p-12 rounded-lg shadow-xl text-center space-y-6 max-w-5xl mx-auto hover:bg-gradient-to-l hover:from-gray-700 hover:to-gray-800 transition-colors duration-500">
        <h2 className="text-3xl font-semibold text-blue-400">Community and Social Interaction</h2>
        <p className="text-gray-400 leading-relaxed">
          Social games are designed to bring people together. Enjoy sharing achievements, competing on leaderboards, and collaborating to overcome challenges. These features foster a strong sense of community and make social gaming a truly engaging experience.
        </p>
      </section>

      {/* Call to Action */}
   
    
    </div>
  );
};

export default Page;
