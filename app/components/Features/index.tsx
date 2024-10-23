"use client";
import Image from "next/image";
import React from "react";
import { IoIosPeople } from "react-icons/io";

// Data for the features section
interface Feature {
  imgSrc?: string | JSX.Element; // imgSrc can be a string (URL) or JSX (Icon component)
  heading: string;
  subheading: string;
}

const features: Feature[] = [
  {
    imgSrc: "/images/Features/featureOne.svg",
    heading: "Advanced Security",
    subheading:
      "Enjoy safe and secure gaming with advanced encryption and data protection protocols.",
  },
  {
    imgSrc: "/images/Features/featureTwo.svg",
    heading: "Informative Reviews",
    subheading:
      "Explore the best social casino games without any financial risks, with in-depth reviews.",
  },
  {
    imgSrc: "/images/Features/featureThree.svg",
    heading: "User-Friendly Design",
    subheading:
      "Our platform is designed with ease of use in mind, allowing you to find and read reviews effortlessly.",
  },
  {
    imgSrc: <IoIosPeople className="text-white w-10 h-10" />, // Changed the color to a modern blue shade
    heading: "Interactive Community",
    subheading:
      "Join a vibrant community of players where you can share achievements, compete, and collaborate.",
  },
];

const Features = () => {
  return (
    <div className="relative mx-auto max-w-6xl px-6 py-20" id="features-section">
      {/* Background Shape - Changed style */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 opacity-40 w-full h-full blur-[150px] rounded-full"></div>

      {/* Features Section Title */}
      <div className="relative z-10 text-center mb-20">
        <h3 className="text-md font-semibold text-white tracking-wider">
          DISCOVER OUR PLATFORM
        </h3>
        <h2 className="text-4xl font-bold text-white mb-4">
          Key Features at a Glance
        </h2>
        <p className="text-md text-white max-w-xl mx-auto">
          Dive into our unique features designed to offer you a secure and engaging experience. Discover what sets us apart!
        </p>
      </div>

      {/* Features Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 p-8 rounded-lg shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Icon or Image */}
            <div className="flex items-center justify-center mb-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-green-400 rounded-full shadow-lg">
              {typeof feature.imgSrc === "string" ? (
                <Image
                  src={feature.imgSrc}
                  alt={feature.heading}
                  width={40}
                  height={40}
                />
              ) : (
                feature.imgSrc
              )}
            </div>

            {/* Heading */}
            <h5 className="text-xl font-semibold text-white mb-2">
              {feature.heading}
            </h5>

            {/* Subheading */}
            <p className="text-white text-sm">{feature.subheading}</p>
          </div>
        ))}
      </div>

      {/* New Feature Card - Redesigned with New Layout */}
    
    </div>
  );
};

export default Features;
