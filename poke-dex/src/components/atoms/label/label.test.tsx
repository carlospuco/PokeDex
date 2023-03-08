import React from "react";
import { render } from "@testing-library/react";
import Label from "./label";

describe("Label component", () => {
  it("renders correctly with children and no change prop", () => {
    const { getByText } = render(<Label>Test Label</Label>);
    const label = getByText("Test Label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("label");
  });

  it("applies the style class when change prop is set to 'style'", () => {
    const { getByText } = render(<Label change="style">Test Label</Label>);
    const label = getByText("Test Label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("label--style");
  });

  it("applies the title class when change prop is set to 'title'", () => {
    const { getByText } = render(<Label change="title">Test Label</Label>);
    const label = getByText("Test Label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("label--title");
  });
});
