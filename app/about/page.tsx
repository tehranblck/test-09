"use client";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-800 text-center py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl font-extrabold text-yellow-400 mb-6">
            About Mystery Mice
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Uncover the story behind Mystery Mice! From its playful origins to becoming a global favorite, this is where gaming meets creativity, community, and pure fun.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-6 text-center bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            At Mystery Mice, our mission is to bring players together through
            engaging and accessible gaming experiences. We believe in creating
            moments of joy, discovery, and collaboration for everyone—no matter
            their skill level or location.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-center md:text-left">
        <div className="flex flex-col justify-center items-center md:items-start space-y-6">
          <h2 className="text-4xl font-bold text-yellow-400">
            Why Mystery Mice?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Mystery Mice isn’t just a game—it’s an adventure! We combine the
            thrill of solving puzzles with the joy of social gaming, offering a
            unique platform that’s completely free and endlessly entertaining.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our dynamic gameplay and vibrant community make every moment
            exciting. Join us and see why players around the world love Mystery
            Mice.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/mystery-hero.png"
            alt="Mystery Mice Adventure"
            className="rounded-lg shadow-lg"
            width={400} height={500}
          />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                Fun for Everyone
              </h3>
              <p className="text-gray-300">
                Games should be accessible to all. That’s why we make sure
                everyone can play and enjoy, with no hidden fees or requirements.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                Community First
              </h3>
              <p className="text-gray-300">
                We believe gaming is better with friends. Our platform fosters
                collaboration, competition, and connections.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                Creativity Unleashed
              </h3>
              <p className="text-gray-300">
                From innovative puzzles to engaging events, we’re always
                crafting fresh ways to keep you entertained.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 px-6 bg-gray-900 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">Meet the Team</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-12">
            Mystery Mice is brought to life by a passionate team of designers, developers, and dreamers. Together, we’ve crafted an experience that’s fun, innovative, and inclusive.
          </p>

        </div>
      </section>

      {/* Call to Action */}

    </div>
  );
};

export default AboutPage;
