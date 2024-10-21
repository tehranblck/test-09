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
    heading: "Sicherheit",
    subheading:
      "Fortschrittliche Verschlüsselung und Sicherheitsverfahren schützen Ihre persönlichen Daten und gewährleisten ein sicheres Online-Erlebnis.",
  },
  {
    imgSrc: "/images/Features/featureTwo.svg",
    heading: "Informativ",
    subheading:
      "Entdecken Sie die beliebtesten Social-Casino-Spiele, ohne finanzielle Verpflichtungen eingehen zu müssen.",
  },
  {
    imgSrc: "/images/Features/featureThree.svg",
    heading: "Benutzerfreundlich",
    subheading:
      "Unsere Plattform ist einfach zu bedienen und zu navigieren, sodass Sie schnell Rezensionen finden und lesen können.",
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
            FUNKTIONEN
          </h3>
          <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">
          Die zuverlässigste Website für Informationen zu Social-Casino-Spielen
          </h2>
          <p className="lg:text-lg font-normal text-bluish text-center md:text-start">
          Ihre Sicherheit und Ihr Vertrauen stehen bei yourgamedestination.org an erster Stelle. Anstatt Casinospiele anzubieten, konzentrieren wir uns darauf, Benutzer über Social-Casino-Spiele zu informieren und die beliebtesten hervorzuheben. Wir haben fortschrittliche Sicherheitsverfahren implementiert, um sicherzustellen, dass Ihre Daten immer geschützt sind. Entdecken Sie unsere geprüften Bewertungen, um wertvolle Informationen über die besten Social-Casino-Spiele in einer sicheren Umgebung zu erhalten.
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
