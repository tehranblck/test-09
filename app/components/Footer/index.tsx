import Image from "next/image";
import Link from "next/link";
import { navigation } from "../nav/nav"; // Navigation verisini içe aktarıyoruz

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 relative">
      {/* Upper Section: Useful Links and Contact */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-0">
        
        {/* Column 1: Useful Links */}
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-4">Explore</h2>
          <ul className=" flex flex-wrap  gap-2 justify-start items-center">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-blue-500 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Contact */}
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-4">Get in Touch</h2>
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/Footer/email.svg"
                alt="email-icon"
                width={24}
                height={24}
              />
              <span className="text-sm">contact@slotpanfi.com</span>
            </div>
          </div>
        </div>

        {/* Column 3: Logo */}
        <div className="flex-1 flex justify-end">
          <Link href="/" className="flex mb-4">
            <Image
              width={120}
              height={120}
              src="/logo.svg"
              alt="Crypto-Logo"
            />
          </Link>
        </div>
      </div>

      {/* Lower Section: Legal Info */}
      <div className="mt-12 border-t border-gray-700 pt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400">
            ©2024 - All rights reserved by {"slotpanfi.com"}
           
          </p>

          <div className="mt-4 md:mt-0 flex items-center justify-center space-x-6">
            <Link 
              href="https://www.gamcare.org.uk/"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <Image
                src="/gamcare.svg"
                alt="gamcare-logo"
                width={100}
                height={100}
              />
            </Link>
            <Link href="/" className="text-gray-400 hover:text-blue-500 transition">
              <Image
                src="/18+disclaimer.svg"
                alt="18+-logo"
                width={50}
                height={50}
              />
            </Link>
            <Link
              href="https://www.gambleaware.org/"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <Image
                src="/gamblingaware.svg"
                alt="gamblingaware-logo"
                width={200}
                height={200}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
