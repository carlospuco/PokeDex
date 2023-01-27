import React, { FC } from "react";
import "./button.scss";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
  size?: "small" | "large";
  type?: "submit";
  picture: string;
}

const Button: FC<ButtonProps> = ({
  text,
  picture,
  disabled = false,
  size = "large",
  type, 
  onClick
}) => {

  return (
    <button
      className={`button button--${size}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      <div className="button__icon">
        <span><img src={picture} alt="button icon" width="20px"/></span>
        <p>{text}</p>
      </div>
    </button>
  )
};

export default Button;