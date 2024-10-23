import Image from "next/image";
import Link from "next/link";
import { navigation } from "../nav/nav"; // Navigation verisini içe aktarıyoruz

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      {/* Container Wrapper */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo & Disclaimer */}
          <div>
            <Link href="/" className="flex mb-6">
              <Image
                width={150}
                height={150}
                src="/images/Logo/logo.svg"
                alt="Crypto-Logo"
              />
            </Link>
            <h1 className="text-lg font-bold mb-4">Disclaimer</h1>
            <p className="text-sm text-gray-400 leading-relaxed">
              At zockerwelt-de.com, we focus on creating a safe and fun space for players to explore social casino games without any monetary investment. Please note, winning in social casino games does not guarantee success in real-money casinos. Enjoy discovering the best social casino games without risks!
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Useful Links</h2>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Social Media */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <div className="flex items-center mb-6">
              <Image
                src="/images/Footer/email.svg"
                alt="email-icon"
                width={24}
                height={24}
                className="mr-4"
              />
              <span className="text-sm">contact@zockerwelt-de.com</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Lower Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex space-x-6">
            <a
              href="https://www.gamcare.org.uk/"
              className="text-gray-400 hover:text-white transition"
            >
              <Image
                src="/gamcare.svg"
                alt="gamcare-logo"
                width={120}
                height={40}
              />
            </a>
            <a href="/" className="text-gray-400 hover:text-white transition">
              <Image
                src="/18+disclaimer.svg"
                alt="18+-logo"
                width={50}
                height={50}
              />
            </a>
            <a
              href="https://www.gambleaware.org/"
              className="text-gray-400 hover:text-white transition"
            >
              <Image
                src="/gamblingaware.svg"
                alt="gamblingaware-logo"
                width={120}
                height={50}
              />
            </a>
          </div>

          <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            ©2024 - All rights reserved by{" "}
            <Link
              href="https://yourgamedestination.com/"
              target="_blank"
              className="underline hover:text-white"
            >
              zockerwelt-de.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
