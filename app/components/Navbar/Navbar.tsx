import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Button from "../Button/Button";
import Image from "next/image";
import { navigation } from "../nav/nav";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar border-b-2 border-[#17C3B2] bg-transparent w-full absolute top-0 z-50">
      <>
        <div className="mx-auto container p-3 md:p-4 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}
              <Link href={"/"} className="flex flex-shrink-0 items-center">
                <Image
                  width={100}
                  height={100}
                  className="block h-10 w-20px lg:hidden"
                  src={"/images/Logo/logo.svg"}
                  alt="Crypto-Logo"
                />
                <Image
                  width={100}
                  height={100}
                  className="hidden h-48px w-48px lg:block"
                  src={"/images/Logo/logo.svg"}
                  alt="Crypto-Logo"
                />
              </Link>

              {/* LINKS */}
              <div className="hidden lg:flex   items-center border-right ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900"
                          : "navlinks text-white  relative group transition duration-300 ease-in-out",
                        "px-3 py-4 rounded-md text-lg font-normal"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      <span className="group-hover:text-[#17C3B2] group-hover:translate-x-4 group-hover:scale-110 transform transition duration-300 ease-in-out">
                        {item.name}
                      </span>
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#17C3B2] transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-[1px] group-hover:transform group-hover:scale-y-125"></span>
                    </Link>
                  ))}
                </div>
              </div>

              <Button buttonText="Play" btncolor="#0023ff" href={"/game/index.html"} />

              {/* DRAWER FOR MOBILE VIEW */}
              <div className="block lg:hidden">
                <Bars3Icon
                  className="block h-6 w-6 text-white"
                  aria-hidden="true"
                  onClick={() => setIsOpen(true)}
                />
              </div>

              {/* DRAWER LINKS DATA */}
              <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <Drawerdata />
              </Drawer>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
