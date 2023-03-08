import React, { useState } from 'react';
import './app.scss';
import Todo from './components/organisms/todo/todo';

interface PokemonType{
  nombre: string;
  imagen: string;
  ataque: number;
  defensa: number;
}

function App() {

  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  return (
    <div>
      <Todo pokemons={pokemons} handleChangePokemons={setPokemons}/>
    </div>
  );
}

export default App;
