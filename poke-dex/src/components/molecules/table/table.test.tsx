import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./table";

const testPokemons = [
  {
    nombre: "Pikachu",
    imagen: "https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
    ataque: 55,
    defensa: 40,
  },
  {
    nombre: "Charmander",
    imagen: "https://cdn.bulbagarden.net/upload/0/0a/Spr_5b_004.png",
    ataque: 52,
    defensa: 43,
  },
];

describe("Table component", () => {
  test("renders table headers", () => {
    render(<Table pokemons={testPokemons} />);
    const headers = ["Nombre", "Imagen", "Ataque", "Defensa", "Acciones"];
    headers.forEach((header) => {
      const headerElement = screen.getByText(header);
      expect(headerElement).toBeInTheDocument();
    });
  });

  test("renders edit and delete buttons for each row", () => {
    render(<Table pokemons={testPokemons} />);
    const editButtons = screen.getAllByRole("button", { name: "edit" });
    const deleteButtons = screen.getAllByRole("button", { name: "delete" });
    expect(editButtons.length).toBe(testPokemons.length);
    expect(deleteButtons.length).toBe(testPokemons.length);
  });
});
