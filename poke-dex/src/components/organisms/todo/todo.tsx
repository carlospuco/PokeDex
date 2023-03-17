import React, { FC, useState } from "react";
import Button from "../../atoms/button/button";
import Search from "../../atoms/search/search";
import InputNew from "../../atoms/inputnew/inputnew";
import Label from "../../atoms/label/label";

import Slider from "../../atoms/slider/slider";
import Table from "../../molecules/table/table";
import "./todo.scss";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';


interface PokemonType{
  id:number;
  nombre: string;
  imagen: string;
  ataque: number;
  defensa: number;
}
interface TodoProps {
  pokemons: PokemonType[],
  //setPokemons: React.Dispatch<React.SetStateAction<PokemonType[]>>
  handleChangePokemons:(newPokemons: PokemonType[])=>void;
}

const Todo: FC<TodoProps> = ({
  pokemons, 
  handleChangePokemons
}) => {
  const [id, setId] = useState<number>(0);
  const [nombre, setNombre] = useState<string>("");
  const [imagen, setImagen] = useState<string>("");
  const [ataque, setAtaque] = useState<number>(0);
  const [defensa, setDefensa] = useState<number>(0);
  const [showForm, setShowForm] = useState<boolean>(false);


  function handleSubmit() {
    if(nombre === "" || imagen === "")
      alert("Favor lllenar todos los campos");

    const newPokemon = {
      id,
      nombre,
      imagen,
      ataque,
      defensa
    }

    handleChangePokemons([...pokemons, newPokemon])
    alert(`Pokemon ${newPokemon.nombre} agregado satisfactoriamente!`)
  }

  function handleCancel() {
    setNombre("");
    setImagen("");
    setAtaque(0);
    setDefensa(0);
  }

  function handleCreate(): void {
    setShowForm(!showForm);
  }
  
  function handleDeletePokemon(pokemon: PokemonType): void {
    const filteredPokemons = pokemons.filter((p) => p !== pokemon);
    handleChangePokemons(filteredPokemons);
  }

  return (
    <div className="todo">
      <div className="todo--header">
        <Label change="title">Listado de Pokemon</Label>
        <div className="todo--search">
          <Search children={<SearchIcon/>}></Search>
          <Button text="Nuevo" onClick={handleCreate} picture={<AddIcon/>} >Nuevo</Button>
        </div>
        <div className="todo--table">
          <Table pokemons={pokemons}/>
        </div>
      </div>
      {showForm && <div className="todo--header">
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
            onChange={(e) => setAtaque(e)}
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
            onChange={(e) => setDefensa(e)}
          />
        </div>
        <div className="todo--searchnew">
          <Button  onClick={handleSubmit} picture={<SaveIcon/>} >Guardar</Button>
          <Button  onClick={handleCancel} picture={<CancelIcon/>}>Cancelar</Button>
        </div>
      </div>}
      
    </div>
  );
};

export default Todo;
