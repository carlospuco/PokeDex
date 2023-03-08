import React, { FC } from "react";
import "./label.scss";

interface LabelProps {
  children?: React.ReactNode;
  change?:"style"|"title"|"";
}

const Label: FC<LabelProps> = ({ children, change=""}) => {
  return <span className={`label label--${change}`}>{children}</span>;
};

export default Label;
