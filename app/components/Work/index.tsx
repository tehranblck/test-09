"use client";
import Image from "next/image";

interface workdata {
  imgSrc: string;
  heading: string;
  subheading: string;
  hiddenpara: string;
}

const workdata: workdata[] = [
  {
    imgSrc: "/images/Logo/videopoker.png",
    heading: "Video Poker",
    subheading:
      "The goal of video poker is to make the best possible five-card poker hand. The stronger the hand, the higher the payout. ",
    hiddenpara:
      "You can enjoy the thrill of poker hands without on all devices, often earning virtual rewards or progressing through levels. ",
  },
  // {
  //   imgSrc: "/images/Logo/lucky.png",
  //   heading: "Lucky Slot Machine",
  //   subheading:
  //     "Step into the thrilling world of casinos with Lucky Slot Machine.",
  //   hiddenpara:
  //     "Step into the thrilling world of casinos with Lucky Slot Machine. This HTML5 Casino Slot game, enriched with vibrant graphics and immersive sound effects, offers a realistic casino experience. Spin the reels and watch as symbols line up ...",
  // },
  // {
  //   imgSrc: "/images/Logo/lasvegas.webp",
  //   heading: "Las Vegas Blackjack",
  //   subheading:
  //     "Immerse yourself in the exciting world of Las Vegas Blackjack.",
  //   hiddenpara:
  //     "Immerse yourself in the exciting world of Las Vegas Blackjack. Experience the thrilling vibe of a real Las Vegas casino right from your device.",
  // },
];

const Work = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl mt-16 px-6 mb-20 relative">
        <div className="radial-bgone hidden lg:block"></div>
        <div className="text-center mb-14">
          <h3 className="text-offwhite text-2xl md:text-3xl font-bold mb-3">
            {" "}
            Best Social Casino Game
          </h3>
          <p className="text-bluish md:text-md font-normal leading-8 text-sm">
            Below is the most popular casino game.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-y-20 gap-x-5 mt-32 lg:w-2/3 md:w-full mx-auto">
          {workdata.map((items, i) => (
            <div className="card-b bg-[#ffffffe0] p-8" key={i}>
              <div className="work-img-bg rounded-full   flex justify-center absolute w-[100px] h-[100px] ">
                <Image
                  src={items.imgSrc}
                  alt={items.imgSrc}
                  width={100}
                  height={100}
                  className="rounded-full h-full w-full object-cover"
                />
              </div>
              {/* <div>
                <Image
                  src={"/images/Work/bg-arrow.svg"}
                  alt="arrow-bg"
                  width={85}
                  height={35}
                />
              </div> */}
              <h3 className="text-2xl text-black font-semibold text-center mt-8">
                {items.heading}
              </h3>
              <p className="text-base font-normal text-black text-center mt-2">
                {items.subheading}
              </p>
              <span className="text-base font-normal m-0 text-black text-center hides">
                {items.hiddenpara}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
