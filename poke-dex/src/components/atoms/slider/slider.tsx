import React, { FC, useState } from "react";
import "./slider.scss";

interface SliderProps {
  onChange: (value:number) => void;
  value: number;
}

const Slider: FC<SliderProps> = ({
  value,
  onChange,
}) => {

  const handlerOnChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
      onChange(Number(e.target.value))
  }

  return (
    <div className="slider">
    <span className="slider__sliderInput">0</span>
      <input
        type="range"
        min="0"
        max="100"
        onChange={handlerOnChange}
        value={value}
        data-testid="slider"
      ></input>
      <span className="slider__sliderInput">{value}</span>
    </div>
  );
};

export default Slider;
