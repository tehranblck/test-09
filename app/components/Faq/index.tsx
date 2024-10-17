// pages/InfoComponent.tsx
"use client";
import Image from "next/image";

interface InfoSection {
  title: string;
  content: string;
}

const infoSections: InfoSection[] = [
  {
    title: "What Are Social Casino Games?",
    content:
      "Social casino games are free-to-play games that simulate casino-style gaming experiences. Unlike traditional casino games, they use virtual currency, so there is no actual cash payout or financial risk involved.",
  },
  {
    title: "Benefits of Social Casino Games",
    content:
      "These games offer entertainment and social interaction without the need for real money. They provide players with an opportunity to enjoy popular casino-style games while connecting with friends, sharing achievements, and competing on leaderboards.",
  },
  {
    title: "Popular Types of Social Casino Games",
    content:
      "Social casino games include a wide range of game types such as slots, poker, and blackjack. Players can enjoy these games on various devices and participate in daily challenges, quests, and events for rewards within the game.",
  },
  {
    title: "Accessibility and Availability",
    content:
      "Social casino games are widely available on mobile devices, tablets, and computers. Many games can be accessed through apps or web browsers, allowing for convenient, on-the-go play. These games are generally free to download and play.",
  },
  
];

const InfoComponent = () => {
  return (
    <div className="my-20 px-6" id="info-section">
      <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-6">
        Learn More About Social Casino Games
      </h3>
      <p className="text-center lg:text-lg font-normal text-bluish ">
        Discover various aspects of social casino games, including their benefits, accessibility, and safety.
      </p>

      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Image Section */}
        {/* <div className="w-full flex justify-center my-8">
          <Image
            src="/images/Info/infographic.svg"
            alt="info-image"
            width={941}
            height={379}
          />
        </div> */}

        {/* Informational Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-4 pt-8">
          {infoSections.map((section, index) => (
            <div
              className="bg-[#2323239d] rounded-lg p-6 shadow-md text-offwhite"
              key={index}
            >
              <h4 className="text-2xl font-semibold mb-4">{section.title}</h4>
              <p className="text-md text-bluish font-normal opacity-90">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
