"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "../Button/Button";
import Modal from "../Button/Modal";
import SignInForm from "../Button/Signin";
import SignUpForm from "../Button/SignUp";
import { navigation } from "../nav/nav";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null); // User email state
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
  const [formType, setFormType] = useState<"signIn" | "signUp" | null>(null); // Form type state

  // Load user email from localStorage
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const handleOpenForm = (type: "signIn" | "signUp") => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormType(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem("userEmail");
    setUserEmail(null);
    setIsDropdownOpen(false);
  };

  return (
    <Disclosure as="nav" className="navbar bg-transparent w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              width={100}
              height={100}
              className="h-24 w-24 sm:h-32 sm:w-32 lg:h-48 lg:w-48"
              src="/logo.svg"
              alt="Logo"
            />
          </Link>

          {/* Links for large screens */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900"
                    : "navlinks text-white group transition duration-300 ease-in-out",
                  "px-3 py-2 rounded-md text-base font-medium relative"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                <span className="group-hover:text-[#17C3B2] transition duration-300 ease-in-out">
                  {item.name}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#17C3B2] transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* User Email or Buttons */}
          <div className="hidden lg:flex gap-3 items-center">
            {userEmail ? (
              <div className="relative">
                <button
                  className="text-white bg-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {userEmail}
                </button>
                {isDropdownOpen && (
                  <div className="absolute  right-0 mt-2 w-48 bg-gray-900 rounded-md border-2 bg-white ">
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-black  hover:bg-gray-200"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button
                  buttonText="Sign In"
                  btncolor="#6C63FF"
                  btnTxtColor="text-white"
                  onClick={() => handleOpenForm("signIn")}
                />
                <Button
                  buttonText="Sign Up"
                  btncolor="#FF6347"
                  btnTxtColor="text-white"
                  onClick={() => handleOpenForm("signUp")}
                />
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Disclosure.Button
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Disclosure.Panel className="lg:hidden">
        <div className="px-4 pt-4 pb-3 space-y-1 bg-gray-900 text-white">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? "bg-gray-900" : "text-white hover:bg-gray-700",
                "block px-3 py-2 rounded-md text-base font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* User Email or Buttons in Mobile Menu */}
          <div className="flex flex-col items-start py-5 space-y-3 mt-3">
            {userEmail ? (
              <>
                <button
                  className="w-full text-left px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {userEmail}
                </button>
                {isDropdownOpen && (
                  <button
                    className="w-full text-left px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-600"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </button>
                )}
              </>
            ) : (
              <>
                <Button
                  buttonText="Sign In"
                  btncolor="#6C63FF"
                  btnTxtColor="black"
                  onClick={() => handleOpenForm("signIn")}
                />
                <Button
                  buttonText="Sign Up"
                  btncolor="#FF6347"
                  btnTxtColor="black"
                  onClick={() => handleOpenForm("signUp")}
                />
              </>
            )}
          </div>
        </div>
      </Disclosure.Panel>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {formType === "signIn" && <SignInForm />}
        {formType === "signUp" && <SignUpForm />}
      </Modal>
    </Disclosure>
  );
};

export default Navbar;
