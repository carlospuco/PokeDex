import React from "react";
import { render, fireEvent, screen, getByTestId } from "@testing-library/react";
import Slider from "./slider";

describe("Slider", () => {
  test("renders correctly", () => {
    render(<Slider value={50} onChange={() => {}} />);
    const inputElement = screen.getByTestId("slider");
    const minTextElement = screen.getByText("0");
    const maxTextElement = screen.getByText("50");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "range");
    expect(inputElement).toHaveAttribute("min", "0");
    expect(inputElement).toHaveAttribute("max", "100");
    expect(inputElement).toHaveAttribute("value", "50");
    expect(minTextElement).toBeInTheDocument();
    expect(maxTextElement).toBeInTheDocument();
  });

  test("calls onChange correctly", () => {
    const handleChange = jest.fn();
    render(<Slider value={50} onChange={handleChange} />);
    const inputElement = screen.getByTestId("slider");

    fireEvent.change(inputElement, { target: { value: 75 } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(75);
  });

  test("does not change value when disabled", () => {
    render(<Slider value={50} onChange={() => {}} />);
    const inputElement = screen.getByTestId("slider");

    fireEvent.change(inputElement, { target: { value: 75 } });

    expect(inputElement).toHaveAttribute("value", "50");
  });

  test("handles input of non-numeric value", () => {
    const handleChange = jest.fn();
    render(<Slider value={50} onChange={handleChange} />);
    const inputElement = screen.getByTestId("slider");

    fireEvent.change(inputElement, { target: { value: "abc" } });

    expect(inputElement).toHaveAttribute("value", "50");
    expect(handleChange).toHaveBeenCalledTimes(0);
  });
});
