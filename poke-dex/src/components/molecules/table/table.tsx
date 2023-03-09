import React, { FC } from "react";
import Button from "../../atoms/button/button";
import Label from "../../atoms/label/label";
import "./table.scss";
import DeleteIcon from "../../../assets/delete.svg";
import EditIcon from "../../../assets/edit.svg";

interface PokemonType {
  nombre: string;
  imagen: string;
  ataque: number;
  defensa: number;
}

interface TableProps {
  pokemons: PokemonType[];
}

const Table: FC<TableProps> = ({ pokemons }) => {
  return (
    <div className="table">
      <table>
        <tr>
          <th>
            <Label change="style">Nombre</Label>
          </th>
          <th>
            <Label change="style">Imagen</Label>
          </th>
          <th>
            <Label change="style">Ataque</Label>
          </th>
          <th>
            <Label change="style">Defensa</Label>
          </th>
          <th>
            <Label change="style">Acciones</Label>
          </th>
        </tr>
        {pokemons?.map((pokemon) => (
          <tr>
            <td>{pokemon.nombre}</td>
            <td>
              <img src={pokemon.imagen} alt="new pokemon image" width="90px" />
            </td>
            <td>{`${pokemon.ataque}`}</td>
            <td>{`${pokemon.defensa}`}</td>
            <td>
              <div className="table__tableIcon">
                <Button action="icon-actions" picture={EditIcon}></Button>
                <Button action="icon-actions" picture={DeleteIcon}></Button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
