import React, { FC } from "react";
import "./button.scss";

interface ButtonProps {
  children: React.ReactNode;
  picture?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  size?: "small" | "large";

}

const Button: FC<ButtonProps> = ({
  children,
  picture,
  disabled = false,
  onClick,
  size = "large",
}) => {
  return (
    <button
      className={`button button--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {picture} {children}
    </button>
  );
};

export default Button;