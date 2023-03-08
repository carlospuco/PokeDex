import React, { FC } from "react";
import "./button.scss";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
  size?:  "large";
  type?: "submit";
  picture: string;
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
      className={`button button--${size} button__${action} `}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      <div className="button__icon">
        <span><img src={picture} alt="button icon" width="20px"/></span>
        <p>{children}</p>
      </div>
    </button>
  )
};

export default Button;