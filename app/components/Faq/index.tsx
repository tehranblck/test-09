// pages/InfoComponent.tsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface InfoSection {
  title: string;
  content: string;
}

const infoSections: InfoSection[] = [
  {
    title: "What Are Social Casino Games?",
    content:
      "Social casino games are free-to-play games that simulate casino-like experiences. Unlike traditional casino games, they use virtual currencies, so there are no real payouts or financial risks involved.",
  },
  {
    title: "Benefits of Our Games",
    content:
      "These games provide entertainment and social interactions without the need for real money. Players can enjoy popular casino-like games while connecting with friends, sharing achievements, and competing on leaderboards.",
  },
  {
    title: "Popular Game Types",
    content:
      "Social casino games include a variety of types such as slots, poker, and blackjack. Players can enjoy these games across various devices and participate in daily challenges, quests, and events to earn in-game rewards.",
  },
  {
    title: "Accessibility and Availability",
    content:
      "Social casino games are widely available on mobile devices, tablets, and computers. Many games can be played through apps or web browsers, offering convenient play on the go. These games are typically free to download and play.",
  },
];

const InfoComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  // To trigger animations on scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative my-20 px-6 max-w-7xl mx-auto" id="info-section">
      {/* Decorative Wave Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400 to-purple-600 opacity-30 transform skew-y-6"></div>

      {/* Section Title */}
      <div
        className={`text-center mb-16 transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-5xl font-extrabold text-white mb-6 tracking-wide animate-fadeInUp">
          Discover Our Casino Games
        </h3>
        <p className="text-xl text-white max-w-3xl mx-auto">
          Learn about the exciting world of social casino games, from popular types to accessibility features.
        </p>
      </div>

      {/* Floating Info Sections with Slide-in Animation */}
      <div className="relative space-y-16">
        {infoSections.map((section, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } transition-all duration-700 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Curved Decorative Shape */}
            <div
              className={`absolute w-[300px] h-[300px] bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full ${
                index % 2 === 0 ? "-left-32" : "-right-32"
              } transform rotate-12 animate-pulse`}
            ></div>

            {/* Content Area with Backdrop Blur and Fade-in */}
            <div
              className={`relative p-10 text-white max-w-lg z-10 bg-black/30 rounded-lg backdrop-blur-sm transition-all duration-700 ease-in-out transform ${
                isVisible
                  ? index % 2 === 0
                    ? "translate-x-0"
                    : "translate-x-0"
                  : index % 2 === 0
                  ? "-translate-x-20"
                  : "translate-x-20"
              } hover:scale-105`}
            >
              <h4 className="text-3xl font-bold mb-4">{section.title}</h4>
              <p className="text-lg leading-relaxed">{section.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Section - Full Width Background with Zoom-in on Scroll */}
      <div className="relative mt-32">
        <div className="relative w-full h-[500px] overflow-hidden rounded-xl transition-transform duration-2000 ease-in-out transform hover:scale-105">
          <Image
            src="/pandaslot.png"
            alt="informative graphic"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="text-4xl font-bold">Stay Informed with Our Games</h3>
            <p className="text-lg mt-4 max-w-lg">
              Get the latest updates and insights into the world of social casino gaming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
