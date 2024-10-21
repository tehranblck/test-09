import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Button from "../Button/Button";
import Image from "next/image";
// import Contactusform from './Contactus';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Startseite", href: "/", current: false },
  { name: "Über Uns", href: "/about", current: false },
  { name: "Spiele", href: "/games", current: false },
  { name: "Datenschutz & Bedingungen", href: "/privacy", current: false },
  { name: "Kontakt", href: "/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar  bg-transparent w-full absolute top-0 z-50">
      <>
        <div className="mx-auto container  p-3 md:p-4 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}

              <Link href={'/'} className="flex  flex-shrink-0 items-center">
                <Image width={100} height={100}
                  className="block h-10 w-20px lg:hidden"
                  src={"/images/Logo/logo.svg"}
                  alt="Krypto-Logo"
                />
                <Image width={100} height={100}
                  className="hidden h-48px w-48px lg:block"
                  src={"/images/Logo/logo.svg"}
                  alt="Krypto-Logo"
                />
              </Link>

              {/* LINKS */}

              <div className="hidden lg:flex items-center border-right ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900"
                          : "navlinks text-white hover:text-offwhite hover-underline",
                        "px-3 py-4 rounded-md text-lg font-normal"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
             <Button  buttonText="Spielen" href={'/game/index.html'}/>
             
              {/* <Contactusform /> */}
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

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
      </>
    </Disclosure>
  );
};

export default Navbar;
