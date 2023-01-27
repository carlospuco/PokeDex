import React, { FC } from "react";
import "./inputnew.scss";

interface InputNewProps {
  placeholder: string;
  size?: "search" | "values";
  value: string;
  onChange: (e: any) => void;
}

const InputNew: FC<InputNewProps> = ({
  placeholder="",
  size = "search",
  value,
  onChange
}) => {
  return (
    <div className={`input input--${size}`}>
        <input 
          type="text"
          className="input__inputStyle"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
    </div>
  );
};

export default InputNew;