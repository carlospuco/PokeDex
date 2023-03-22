import React, { FC } from "react";
import "./button.scss";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
  size?:  "large";
  type?: "submit";
  picture: React.ReactNode;
  action?: "icon"|"icon-actions";
}

const Button: FC<ButtonProps> = ({
  children,
  picture,
  disabled = false,
  size = "large",
  type, 
  onClick,
  action
}) => {

  return (
    <button
      className={`button button--${size} button__${action}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {picture && picture }
       
        {children}
   
    </button>
  )
};

export default Button;