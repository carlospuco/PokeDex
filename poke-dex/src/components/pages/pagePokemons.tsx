import React, { FC, useState } from "react";
import Label from "../atoms/label/label";
import Slider from "../atoms/slider/slider";
import Table from "../molecules/table/table";
import "./pagePokemons.scss";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '../atoms/button/button';
import Input from '../atoms/input/input';
import { v4 as uuidv4 } from 'uuid';




interface Pokemon {
  name: string;
  image: string;
  attack: number;
  defense: number;
  id: string;
}
interface PageProps {
  pokemons: Pokemon[],
  //setPokemons: React.Dispatch<React.SetStateAction<PokemonType[]>>
  handleChangePokemons:(newPokemons: Pokemon[])=>void;
 
}

const PagePokemon: FC<PageProps> = ({
  pokemons, 
  handleChangePokemons
}) => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [attack, setAttack] = useState<number>(0);
  const [defense, setDefense] = useState<number>(0);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  function handleSubmit() {
    if(name === "" || image === "")
      alert("Favor llenar pages los campos");

    const newPokemon = {
      id: uuidv4(),
      name,
      image,
      attack,
      defense
    }

    handleChangePokemons([...pokemons, newPokemon])
    alert(`Pokemon ${newPokemon.name} agregado satisfactoriamente!`)
  }

  function handleCancel() {
    setName("");
    setImage("");
    setAttack(0);
    setDefense(0);
  }

  function handleCreate(): void {
    setShowForm(!showForm);
  } 

  function handleDelete(id: string): void {
    const pokemonToDelete = pokemons.find((pokemon) => pokemon.id === id);
    if (pokemonToDelete) {
      const newPokemons = pokemons.filter((pokemon) => pokemon.id !== id);
      handleChangePokemons(newPokemons);
      alert(`Pokemon ${pokemonToDelete.name} eliminado satisfactoriamente!`);
    }
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(event.target.value);
  }

  const filteredPokemons = pokemons.filter(p => {
    return p.name.toLowerCase().includes(searchTerm.toLowerCase())
  });


  return (
    <div className="page">
      <div className="page--header">
        <Label change="title">Listado de Pokemon</Label>
        <div className="page--search">
          <Input iconLeft={<SearchIcon/>} onChange={handleSearch} placeholder="Buscar"/>
          <Button text="Nuevo" onClick={handleCreate} picture={<AddIcon/>} >Nuevo</Button>
        </div>
        <div className="page--table">
          <Table pokemons={filteredPokemons} onDelete={handleDelete} />
        </div>
      </div>
      {showForm && <div className="page--header">
        <Label change="title">Nuevo Pokemon</Label>
        <div className="page--searchnew">
          <Label change="title">Nombre: </Label>
          <Input
            placeholder="Nombre" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label change="title">Ataque: </Label>
          <Slider
            value={attack}
            onChange={(e) => setAttack(e)}
          />
        </div>
        <div className="page--searchnew">
          <Label change="title">Imagen: </Label>
          <Input
            placeholder="URL" 
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Label change="title">Defensa: </Label>
          <Slider
            value={defense}
            onChange={(e) => setDefense(e)}
          />
        </div>
        <div className="page--searchnew">
          <Button  onClick={handleSubmit} picture={<SaveIcon/>} >Guardar</Button>
          <Button  onClick={handleCancel} picture={<CancelIcon/>}>Cancelar</Button>
        </div>
      </div>}
      
    </div>
  );
};

export default PagePokemon;