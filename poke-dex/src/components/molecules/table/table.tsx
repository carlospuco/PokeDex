import React, { FC } from "react";
import { Grid } from "../../atoms/grid/grid";
import Label from "../../atoms/label/label";
import "./table.scss";

interface PokemonType{
  nombre: string;
  imagen: string;
  ataque: number;
  defensa: number;
}

interface TableProps {
  pokemons: PokemonType[],
}

const Table: FC<TableProps> = ({
  pokemons
}) => {
  return (
    <div className="table">
      <table>
        <tr>
          <th><Label change="style">Nombre</Label></th>
          <th><Label change="style">Imagen</Label></th>
          <th><Label change="style">Ataque</Label></th>
          <th><Label change="style">Defensa</Label></th>
          <th><Label change="style">Acciones</Label></th>
        </tr>
        {
          pokemons?.map(pokemon => (
            <tr>
              <td>{pokemon.nombre}</td>
              <td><img src={pokemon.imagen} alt="new pokemon image" width="90px"/></td>
              <td>{`${pokemon.ataque}`}</td>
              <td>{`${pokemon.defensa}`}</td>
              <td>acciones</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
};

export default Table;
