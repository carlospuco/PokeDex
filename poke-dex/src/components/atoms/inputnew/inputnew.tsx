import React, { FC } from "react";
import "./inputnew.scss";

interface InputNewProps {
  placeholder?: string;
  value?: string;
  iconLeft?: React.ReactNode;
  searchStyle?: React.ReactNode;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNew: FC<InputNewProps> = ({
  placeholder,
  value,
  onChange,
  iconLeft,
  searchStyle,
  children,
}) => {
  let inputClasses = "input";
  if (iconLeft) {
    inputClasses += "__icon-search";
  } else inputClasses += "__icon-add";

  return (
    <div className="input">
      {iconLeft && <div className="input__icon-left">{iconLeft}</div>}
      <input
        type="search"
        className={`input ${inputClasses}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputNew;
