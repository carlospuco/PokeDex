import React, { FC } from "react";
import "./input.scss";

interface InputProps {
  placeholder?: string;
  value?: string;
  iconLeft?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  placeholder="Text",
  value,
  onChange,
  iconLeft,
}) => {
  let inputClasses = "input";
  if (iconLeft) {
    inputClasses += "__icon-search";
  } else inputClasses += "__input-new";

  return (
    <div className="input">
      {iconLeft && <div className="input__icon-left">{iconLeft}</div>}
      <input
        className={`input ${inputClasses}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
