import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string;
  href: string;
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Nützliche Links",
    link: ["Startseite", "Spiele", "Funktionen", "FAQ"],
  },
];



const footer = () => {
  return (
    <footer style={{backdropFilter:"blur(15px)"}}  className=" w-full relative">
      <div className="  hidden lg:block"></div>
      <div className="mx-auto bg-[#000000cc]   pb-16 px-4 sm:px-6 py-10 ">
        <div className="container mx-auto grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-6  lg:mr-14">
            <Image
            width={200}
            height={200}
              className="block h-12 w-20px mb-6"
              src={"/images/Logo/logo.svg"}
              alt="Crypto-Logo"
            />
            <h1 className="text-white font-bold mb-5">Haftungsausschluss</h1>
            <h3 className="text-lightblue text-sm font-normal leading-6 mb-4 lg:mb-16">
              {" "}
              Auf zockerwelt-de.com konzentrieren wir uns darauf, einen sicheren und unterhaltsamen Raum für Spieler zu schaffen, um Social-Casino-Spiele ohne Geldeinsatz zu erkunden. Wir sind keine Partner oder Aggregatoren; stattdessen ist es unser Ziel, Benutzer über Social-Casino-Spiele aufzuklären und Informationen über beliebte Optionen bereitzustellen. Unsere Plattform ist darauf ausgerichtet, wertvolle Einblicke und Bewertungen anzubieten, ohne Zahlungen oder sensible Informationen anzufordern. Es ist wichtig zu beachten, dass das Gewinnen in Social-Casino-Spielen keine Gewinnaussichten in Echtgeld-Casinos garantiert. Viel Spaß beim Durchstöbern unserer Inhalte und beim Entdecken der besten Social-Casino-Spiele ohne Risiken!
            </h3>
            
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-medium mb-2">
                {product.section}
              </p>
              <ul className="mt-2">
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-4">
                    <Link
                      href="/"
                      className="text-offwhite  text-sm font-normal mb-6 space-links"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-4">
            <h3 className="text-white text-xl font-medium mb-2">Kontakt</h3>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2 mt-16">
              <Image
                src={"/images/Footer/email.svg"}
                alt="email-icon"
                width={20}
                height={20}
              />
              contact@zockerwelt-de.com
            </h4>
          </div>
        </div>
      </div>
      <div className="flex gap-4 bg-[#000000cc]  flex-wrap justify-center items-center  py-2">
        <a href="https://www.gamcare.org.uk/">
          <Image
            src={"/gamcare.svg"}
            alt="email-icon"
            width={220}
            height={20}
          />
        </a>
        <a href="/">
          <Image
            src={"/18+disclaimer.svg"}
            alt="email-icon"
            width={70}
            height={100}
          />
        </a>
        <a href="https://www.gambleaware.org/">
          <Image
            src={"/gamblingaware.svg"}
            alt="email-icon"
            width={220}
            height={120}
          />
        </a>
      </div>
      {/* All Rights Reserved */}

      <div className="py-8 px-4 border-t bg-[#000000cc]  border-t-lightblue">
        <h3 className="text-center text-offwhite">
          @2024 - Alle Rechte vorbehalten von{" "}
          <Link
            href="https://yourgamedestination.com/"
            target="_blank"
            className="text-wrap"
          >
            {" "}
            zockerwelt-de.com
          </Link>
        </h3>
      </div>
    </footer>
  );
};

export default footer;
