"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover' }} className=" relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 pt-24 pb-20 lg:pt-36 lg:pb-24 mb-16" id="home-section">
      {/* Wavy shapes for creative background */}

      <div className=" w-full h-full  absolute top-0 bottom-0"></div>
      <div className="relative  mx-auto container px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Section */}
          <div className="lg:pr-10 text-center lg:text-left animate__animated animate__fadeInLeft">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Solve the Mystery and discover Big  Mystery of Mice! 🕵️🐭
            </h1>
            <p className="text-lg  lg:text-lg text-white mb-8 leading-relaxed">
              Join the adventure in Mystery Mice, a thrilling free-to-play social casino game! Spin the 6×6 tumbling reel grid alongside a clever detective mouse and uncover hidden rewards with no deposit needed. Collect Power Wilds that boost your chances of forming clusters, trigger exciting free spins with spyglass scatter symbols, and keep the fun going as sticky symbols and level-ups bring even more surprises. Play now and enjoy the ultimate entertainment experience—completely free!
            </p>

            {/* Call to Action Button */}
            <div className="flex justify-center lg:justify-start">
              <Button btncolor="text-white" buttonText="About us" href="/about" />
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
            {/* <a href="/game/index.html" className="relative z-20 hover:scale-110 transition-transform duration-700">
              <Image
                className="rounded-full shadow-2xl border-8 border-gray-100 hover:border-primary-500 transition-all duration-500"
                src="/pandaslot.png"
                alt="Banner Image"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 opacity-0 hover:opacity-80 transition-opacity duration-700"></div>
            </a> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
