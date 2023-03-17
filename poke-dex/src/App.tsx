import React, { useState } from 'react';
import './app.scss';
import PagePokemon from './components/pages/pagePokemons';


interface PokemonType{
  name: string;
  image: string;
  attack: number;
  defense: number;
  id: number;
}

function App() {

  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  return (
    <div>
      <PagePokemon pokemons={pokemons} handleChangePokemons={setPokemons}/>
    </div>
  );
}

export default App;
