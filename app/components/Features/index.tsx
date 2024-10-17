"use client";
import Image from "next/image";

interface featuresdata {
  imgSrc: string;
  heading: string;
  subheading: string;
}

const featuresdata: featuresdata[] = [
  {
    imgSrc: "/images/Features/featureOne.svg",
    heading: "Security",
    subheading:
      "Your personal information is safeguarded with advanced encryption and security protocols, guaranteeing a secure browsing experience.",
  },
  {
    imgSrc: "/images/Features/featureTwo.svg",
    heading: "Informative",
    subheading:
      "Explore social casino games and discover the most popular ones with no financial commitment required.",
  },
  {
    imgSrc: "/images/Features/featureThree.svg",
    heading: "User-Friendly",
    subheading:
      "Our platform is user-friendly and easy to navigate, allowing you to quickly find and read reviews.",
  },
];

const Features = () => {
  return (
    <div
      className="mx-auto max-w-7xl my-0 md:my-10  px-6 relative"
      id="features-section"
    >
      <div className="radial-bg hidden lg:block"></div>
      <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
        {/* Column-1 */}
        <div>
          <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">
            FEATURES
          </h3>
          <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">
            The Most Trusted Social Casino Information Platform
          </h2>
          <p className="lg:text-lg font-normal text-bluish text-center md:text-start">
            At yourgamedestination.org, your safety and trust are our highest
            priorities. Rather than offering casino games, we focus on educating
            users about social casino games and showcasing the most popular
            ones. We&apos;ve implemented advanced security measures to keep your data
            secure at all times. Browse our trusted reviews and gain valuable
            insights into top social casino games in a safe and secure
            environment.
          </p>
        </div>
        {/* Column-2 */}
        <div className=" lg:w-1/2 bord md:w-64 ">
          <div className=" flex flex-wrap gap-x-6 gap-y-4 lg:-mr-56 ">
            {featuresdata.map((items, i) => (
              <div
                className="bg-[#090909c2] backdrop-blur-lg backdrop-brightness-200 py-10 pr-12 pl-6 rounded-lg feature "
                key={i}
              >
                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10 img">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={24}
                    height={30}
                  />
                </div>
                <div>
                  {" "}
                  <h5 className="text-offwhite text-lg font-medium mb-4">
                    {items.heading}
                  </h5>
                  <p className="text-lightblue text-sm font-normal">
                    {items.subheading}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
