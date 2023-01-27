import React, { FC, useState } from "react";
import "./slider.scss";

interface SliderProps {
  onChange: (e:any) => void;
  value: number;
}

const Slider: FC<SliderProps> = ({
  value,
  onChange
}) => {

  return (
    <div className="slider">
    <span className="slider__sliderInput">0</span>
      <input
        type="range"
        id="power"
        min="0"
        max="100"
        onChange={onChange}
        value={value}
      ></input>
      <span className="slider__sliderInput">{value}</span>
    </div>
  );
};

export default Slider;
