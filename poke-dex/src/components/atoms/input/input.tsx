import React, { FC } from "react";
import "./input.scss";

interface InputProps {
  children?: React.ReactNode;
  onClick?: () => void;
  size?: "search" | "values";
}

const Input: FC<InputProps> = ({
  children,
  onClick,
  size = "search",
}) => {
  return (
        <div className={`input input--${size}`}>
            <input type="search" className="input__inputStyle" placeholder="Buscar"></input>
            <svg xmlns="http://www.w3.org/2000/svg" className="input__inputIcon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z " clip-rule="evenodd"/>
            </svg>
        </div>
  );
};

export default Input;