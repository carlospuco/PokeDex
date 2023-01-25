import React, { FC } from "react";
import "./inputnew.scss";

interface InputNewProps {
  children?: React.ReactNode;
  onClick?: () => void;
  placeholder:String;
  size?: "search" | "values";
}

const InputNew: FC<InputNewProps> = ({
  children,
  onClick,
  placeholder="",
  size = "search",
}) => {
  return (
        <div className={`input input--${size}`}>
            <input type="search" className="input__inputStyle" placeholder=""></input>
        </div>
  );
};

export default InputNew;