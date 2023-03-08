import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./button";
import AddIcon from "../../../assets/add.svg";
//pruebas unitarias
describe("Button tests", () => {
  //primera prueba unitaria It= debe
  it("should render a custom text", () => {
    // renderizar el componente
    render(<Button picture={AddIcon}>Nuevo</Button>);
    //buscar el input guardar en un variable
    const button = screen.getByText("Nuevo");
    //expectativa
    expect(button).toBeInTheDocument();
  });

  it("shuould not render disable state", () => {
    render(<Button disabled={false} picture={AddIcon}></Button>);

    //getByRole busca un elemento Html
    const button = screen.getByRole("button");
    expect(button).not.toHaveAttribute("disabled");
  });

  it("shuold execute event onClick", () => {
    // crea una funcion espia
    const mockOnClick = jest.fn();
    render(
      <Button disabled={false} picture={AddIcon} onClick={mockOnClick}></Button>
    );
    //consigo el boton
    const button = screen.getByRole("button");
    //doy click en el boton fireevent interacciones
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

 
  it("should have action icon class", () => {
    render(
      <Button picture={AddIcon} action="icon" onClick={() => {}}>
        Text
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button__icon");
  });


  it("should have action icon-actions class", () => {
    render(
      <Button picture={AddIcon} action="icon-actions" onClick={() => {}}>
        Text
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button__icon-actions");
  });

});
