import React, { FC } from "react";
import Button from "../../atoms/button/button";
import Label from "../../atoms/label/label";
import "./table.scss";
import DeleteIcon from "../../../assets/delete.svg";
import EditIcon from "../../../assets/edit.svg";

interface Pokemon {
  nombre: string;
  imagen: string;
  ataque: number;
  defensa: number;
  id:number;
}

interface TableProps {
  pokemons: Pokemon[];
}

const Table: FC<TableProps> = ({ pokemons }) => {

  return (
    <div className="table">
      <table className="table__element">
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
        {pokemons?.map((pokemon) => (
          <tr key={pokemon.id} className="table__row" >
            <td className="table__colum">{pokemon.nombre}</td>
            <td className="table__colum">
              <img src={pokemon.imagen} alt="new pokemon image" width="90px" />
            </td>
            <td className="table__colum">{`${pokemon.ataque}`} </td>
            <td className="table__colum">{`${pokemon.defensa}`}</td>
            <td className="table__colum">
              <div className="table__actions">
                <Button action="icon-actions" picture={<img src={EditIcon} alt="button-icon-edit " width="20px"/>}></Button>
                <Button action="icon-actions" picture={<img src={DeleteIcon} alt="button-icon-delete" width="20px"/>}></Button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
