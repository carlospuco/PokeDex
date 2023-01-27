import React, { FC, useState } from "react";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import InputNew from "../../atoms/inputnew/inputnew";
import Label from "../../atoms/label/label";
import { Layer } from "../../atoms/layer/layer";
import Slider from "../../atoms/slider/slider";
import Table from "../../molecules/table/table";
import "./todo.scss";
import SaveIcon from "../../../assets/save.svg"
import CancelIcon from "../../../assets/cancel.svg"
import AddIcon from "../../../assets/add.svg"

interface PokemonType{
  nombre: string;
  imagen: string;
  ataque: number;
  defensa: number;
}
interface TodoProps {
  pokemons: PokemonType[],
  setPokemons: React.Dispatch<React.SetStateAction<PokemonType[]>>
}

const Todo: FC<TodoProps> = ({
  pokemons, 
  setPokemons
}) => {
  
  const [nombre, setNombre] = useState<string>("");
  const [imagen, setImagen] = useState<string>("");
  const [ataque, setAtaque] = useState<number>(0);
  const [defensa, setDefensa] = useState<number>(0);

  function handleSubmit() {
    if(nombre === "" || imagen === "")
      alert("Favor lllenar todos los campos");

    const newPokemon = {
      nombre,
      imagen,
      ataque,
      defensa
    }

    setPokemons([...pokemons, newPokemon])
    alert(`Pokemon ${newPokemon.nombre} agregado satisfactoriamente!`)
  }

  function handleCancel() {
    
  }

  function handleCreate(): void {
    
  }

  return (
    <div className="todo">
      <div className="todo--header">
        <Label change="title">Listado de Pokemon</Label>
        <div className="todo--search">
          <Input></Input>
          <Button text="Nuevo" onClick={handleCreate} picture={AddIcon} />
        </div>
        <div className="todo--table">
          <Table pokemons={pokemons} />
        </div>
      </div>
      <div className="todo--header">
        <Label change="title">Nuevo Pokemon</Label>
        <div className="todo--searchnew">
          <Label change="title">Nombre: </Label>
          <InputNew 
            placeholder="Nombre" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <Label change="title">Ataque: </Label>
          <Slider
            value={ataque}
            onChange={(e) => setAtaque(e.target.value)}
          />
        </div>
        <div className="todo--searchnew">
          <Label change="title">Imagen: </Label>
          <InputNew 
            placeholder="URL" 
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
          <Label change="title">Defensa: </Label>
          <Slider
            value={defensa}
            onChange={(e) => setDefensa(e.target.value)}
          />
        </div>
        <div className="todo--searchnew">
          <Button text="Guardar" onClick={handleSubmit} picture={SaveIcon} />
          <Button text="Cancelar" onClick={handleCancel} picture={CancelIcon} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
