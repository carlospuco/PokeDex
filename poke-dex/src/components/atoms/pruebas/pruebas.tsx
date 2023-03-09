import { ClassNames } from "@emotion/react";
import React, { FC } from "react";
import "./pruebas.scss";


interface PruebasProps {
  disabled?: boolean;
  onClick?: () => void;
  size?: "medium" |"small" |"large"|"extra-large";
  color?: "primary" | "secondary"|"tertiary"|"complementary"|"destructive";
  children?:React.ReactNode;
  iconRigth?:React.ReactNode;
  iconLeft?:React.ReactNode;
  loading?:React.ReactNode;
  
  
}

const Pruebas: FC<PruebasProps> = ({

    children,
    loading,
    iconRigth,
    iconLeft,
    disabled = false,
    onClick,
    size = "small",
    color ="primary"
}) => {

  
    return (
        <button
        className={`button button--${size} button--${color}`}
        disabled={disabled}
        onClick={onClick}
        >{iconLeft}{children}{iconRigth}{loading}</button>
    );
};

export default Pruebas;