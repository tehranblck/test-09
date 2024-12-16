import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  buttonText?: string;
  href?: string;
  onClick?: () => void;
  btncolor?: string;
  btnTxtColor?: string;
  className?: string;
  formType?: "signIn" | "signUp"; // Specifies whether the button opens a sign-in or sign-up form
}

const Button: React.FC<ButtonProps> = ({
  buttonText = "Click Me",
  href,
  onClick,
  btncolor,
  btnTxtColor,
  className = "",
  formType,
}) => {
  const handleButtonClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    // Set the form type in localStorage if provided
    if (formType) {
      localStorage.setItem("formType", formType);
    }

    // Trigger the custom onClick handler if provided
    if (onClick) {
      event.preventDefault(); // Prevent navigation if onClick is handled
      onClick();
    }
  };

  const buttonClasses = `relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all rounded-md group ${btncolor} ${className}`;

  const textClasses = `relative w-full text-left ${btnTxtColor} transition-colors duration-200 ease-in-out group-hover:text-white`;

  return href ? (
    <Link
      href={href}
      onClick={handleButtonClick}
      className={buttonClasses}
      aria-label={formType ? `Open ${formType} form` : "Button"}
    >
      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
      </span>
      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
      </span>
      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0" />
      <span className={textClasses}>{buttonText}</span>
    </Link>
  ) : (
    <button
      onClick={handleButtonClick}
      className={buttonClasses}
      aria-label={formType ? `Open ${formType} form` : "Button"}
    >
      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
      </span>
      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
      </span>
      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0" />
      <span className={textClasses} >{buttonText}</span>
    </button>
  );
};

export default Button;
