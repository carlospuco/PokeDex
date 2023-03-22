import React, { FC, useState } from "react";
import Button from "../../atoms/button/button";
import Label from "../../atoms/label/label";
import "./table.scss";
import DeleteIcon from "../../../assets/delete.svg";
import EditIcon from "../../../assets/edit.svg";

interface Pokemon {
  name: string;
  image: string;
  attack: number;
  defense: number;
  id: string;
}

interface TableProps {
  pokemons: Pokemon[];
  onDelete: (id: string) => void;
 // onEdit: (pokemon: Pokemon) => void;
  
}

const Table: FC<TableProps> = ({ pokemons,onDelete}) => {
 
  // const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  // const handleEdit = (pokemon: Pokemon) => {
  //   setSelectedPokemon(pokemon);
  //   onEdit(pokemon);
  // };


  return (
    <div className="table">
      <table className="table__element">
        <thead>
          <tr className="table__row">
            <th className="table__colum-header">
              <Label change="style">Nombre</Label>
            </th>
            <th className="table__colum-header">
              <Label change="style">Imagen</Label>
            </th>
            <th className="table__colum-header">
              <Label change="style">Ataque</Label>
            </th>
            <th className="table__colum-header">
              <Label change="style">Defensa</Label>
            </th>
            <th className="table__colum-header">
              <Label change="style">Acciones</Label>
            </th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => (
            <tr key={pokemon.id} className="table__row">
              <td className="table__colum">{pokemon.name}</td>
              <td className="table__colum">
                <img src={pokemon.image} alt="new pokemon" width="90px" />
              </td>
              <td className="table__colum">{`${pokemon.attack}`}</td>
              <td className="table__colum">{`${pokemon.defense}`}</td>
              <td className="table__colum">
                <div className="table__actions">
                  <Button
                    action="icon-actions"
                    picture={
                      <img
                        src={EditIcon}
                        alt="button-icon-edit"
                        width="20px"
                      />
                    }
                   // onClick={() => handleEdit(pokemon)}
                  />
              

                  <Button
                    action="icon-actions"
                    picture={
                      <img
                        src={DeleteIcon}
                        alt="button-icon-delete"
                        width="20px"
                      />
                    }
                    onClick={() => onDelete(pokemon.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
