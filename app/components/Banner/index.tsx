"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 pt-24 pb-20 lg:pt-36 lg:pb-24 mb-16" id="home-section">
      {/* Wavy shapes for creative background */}
      <div className="absolute -top-10 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-400 via-pink-500 to-purple-900 rounded-full mix-blend-overlay opacity-20 blur-2xl"></div>
      <div className="absolute -bottom-20 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500 via-purple-400 to-purple-700 rounded-full mix-blend-overlay opacity-20 blur-2xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Section */}
          <div className="lg:pr-10 text-center lg:text-left animate__animated animate__fadeInLeft">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Boost Your Casino Experience
            </h1>
            <p className="text-lg lg:text-xl text-white mb-8 leading-relaxed">
            At panslotfi.com, we bring you top-notch evaluations of social slot games. Enjoy a completely safe, risk-free, and entertaining gaming experience with our slot game selections.
            </p>

            {/* Call to Action Button */}
            <div className="flex justify-center lg:justify-start">
              <Button btncolor="#ff00e0" buttonText="Play Now" href="/game/index.html"/>
            </div>
          </div>

          {/* Image Section with Brush Stroke and Creative Elements */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative brush stroke */}
            <div className="absolute -top-16 -left-16 lg:-top-20 lg:-left-24 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] opacity-50 rotate-12">
              {/* <Image
                src="/stroke.png" // Fırça darbesi görseli (SVG format)
                alt="Brush Stroke"
                layout="fill"
                objectFit="contain"
              /> */}
            </div>

            {/* Main Image */}
            <a href="/game/index.html" className="relative z-20 hover:scale-110 transition-transform duration-700">
              <Image
                className="rounded-full shadow-2xl border-8 border-gray-100 hover:border-primary-500 transition-all duration-500"
                src="/pandaslot.png"
                alt="Banner Image"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 opacity-0 hover:opacity-80 transition-opacity duration-700"></div>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
