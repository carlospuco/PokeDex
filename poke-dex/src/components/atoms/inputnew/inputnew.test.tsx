import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputNew from "./inputnew";



describe("InputNew component", () => {
  it("should render the input element with the correct placeholder text", () => {
    const placeholderText = "Enter some text...";
    const { getByPlaceholderText } = render(
      <InputNew placeholder={placeholderText} />
    );
    const inputElement = getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render the input element with the default 'search' size", () => {
     render(<InputNew placeholder="hola"/>);
     const inputElement = screen.getByPlaceholderText("hola");
     expect(inputElement).toHaveClass("input--search");
  });

  it("should call the onChange callback function when the input value changes", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<InputNew onChange={handleChange} />);
    const inputElement = getByRole("textbox");
    const inputValue = "Some text";
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should set the value of the input element to the prop value", () => {
    const value = "Initial value";
    const { getByDisplayValue } = render(<InputNew value={value} />);
    const inputElement = getByDisplayValue(value);
    expect(inputElement).toBeInTheDocument();
  });
});
