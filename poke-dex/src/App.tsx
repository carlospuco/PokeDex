import React, { useState } from 'react';
import './App.scss';
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
      <Todo pokemons={pokemons} setPokemons={setPokemons}></Todo>
    </div>
  );
}

export default App;
