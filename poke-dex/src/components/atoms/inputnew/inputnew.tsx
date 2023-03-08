import React, { FC } from "react";
import "./inputnew.scss";

interface InputNewProps {
  placeholder?: string;
  size?: "search";
  value?: string;
  onChange?: (e: any) => void;
}

const InputNew: FC<InputNewProps> = ({
  placeholder="",
  size = "search",
  value,
  onChange
}) => {
  return (
        <input 
          type="text"
          className="input__inputStyle"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
  );
};

export default InputNew;