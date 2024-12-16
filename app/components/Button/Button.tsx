import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface ButtonProps {
  buttonText?: string;
  href?: string;
  onClick?: () => void;
  btncolor?: string;
  btnTxtColor?: string;
  className?: string;
  formType?: "signIn" | "signUp"; // Specifies whether the button opens a sign-in or sign-up form
}

const StyledWrapper = styled.div<{ btncolor?: string; btnTxtColor?: string }>`
  .button {
    padding: 17px 40px;
    border-radius: 50px;
    cursor: pointer;
    border: 0;
    background-color: white;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 15px;
    transition: all 0.5s ease;
    color: ${(props) => props.btnTxtColor || "black"};
  }

  .button:hover {
    letter-spacing: 3px;
    background-color: ${(props) => props.btncolor || "hsl(261deg 80% 48%)"};
    color: white;
    box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
  }

  .button:active {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: white;
    box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }
`;

const Button: React.FC<ButtonProps> = ({
  buttonText,
  href,
  onClick,
  btncolor,
  btnTxtColor,
  className,
  formType,
}) => {
  const handleButtonClick = () => {
    // Set the form type in localStorage
    if (formType) {
      localStorage.setItem("formType", formType);
    }

    // Trigger the custom onClick handler if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledWrapper className={className} btncolor={btncolor} btnTxtColor={btnTxtColor}>
      <Link
        href={href || "#"}
        className="button"
        onClick={handleButtonClick}
        aria-label={formType ? `Open ${formType} form` : "Button"}
      >
        {buttonText}
      </Link>
    </StyledWrapper>
  );
};

export default Button;
