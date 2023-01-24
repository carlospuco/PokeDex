import React, { FC, useState } from "react";
import "./slider.scss";

interface SliderProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  size?: "small" | "large";
}

const Slider: FC<SliderProps> = ({
  children,
  disabled = false,
  onClick,
  size = "large",
}) => {
  const [power, setPower] = useState(100);

  const getSliderValue = (event: any) => {
    setPower(event.target.value);
  };
  return (
    <div className="slider">
    <span className="slider__sliderInput">0</span>
      <input
        type="range"
        id="power"
        min="0"
        max="100"
        onChange={getSliderValue}
        value={power}
      ></input>
      <span className="slider__sliderInput">{power}</span>
    </div>
  );
};

export default Slider;
