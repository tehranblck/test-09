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
    section: "Useful Links",
    link: ["Home", "Games", "Features", "FAQ"],
  },
];

const socialLinks: Social[] = [
  { imgsrc: "/images/Footer/insta.svg", href: "https://instagram.com/" },
  { imgsrc: "/images/Footer/dribble.svg", href: "https://dribble.com/" },
  { imgsrc: "/images/Footer/twitter.svg", href: "https://twitter.com/" },
  { imgsrc: "/images/Footer/youtube.svg", href: "https://youtube.com/" },
];

const footer = () => {
  return (
    <footer style={{backdropFilter:"blur(10px)"}}  className=" relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl  pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-6 lg:mr-14">
            <Image
            width={200}
            height={200}
              className="block h-12 w-20px mb-6"
              src={"/images/Logo/logo.svg"}
              alt="Crypto-Logo"
            />
            <h1 className="text-white font-bold mb-5">Disclaimer</h1>
            <h3 className="text-lightblue text-sm font-normal leading-6 mb-4 lg:mb-16">
              {" "}
              At yourgamedestination.org, we focus on creating a secure and
              enjoyable space for players to explore social casino games without
              any real money gambling involved. We’re not affiliates or
              aggregators; instead, we aim to educate users about social casino
              games and offer information on popular options. Our platform is
              dedicated to providing valuable insights and reviews without
              requesting payment or sensitive information. Enjoy browsing our
              content and discovering top social casino games without any risks.
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i}>
                  <Image
                  width={400}
                  height={400}
                    src={items.imgsrc}
                    alt={items.imgsrc}
                    className="footer-icons"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-medium mb-9">
                {product.section}
              </p>
              <ul className="mt-16">
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
            <h3 className="text-white text-xl font-medium mb-9">Contact Us</h3>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2 mt-16">
              <Image
                src={"/images/Footer/email.svg"}
                alt="email-icon"
                width={20}
                height={20}
              />
              contact@yourgamedestination.com
            </h4>
          </div>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap justify-center items-center bg-white py-2">
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

      <div className="py-8 px-4 border-t border-t-lightblue">
        <h3 className="text-center text-offwhite">
          @2024 - All Rights Reserved by{" "}
          <Link
            href="https://yourgamedestination.com/"
            target="_blank"
            className="text-wrap"
          >
            {" "}
            yourgamedestination.com
          </Link>
        </h3>
      </div>
    </footer>
  );
};

export default footer;
