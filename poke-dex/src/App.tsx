import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from './components/atoms/button/button';
import Input from './components/atoms/input/input';
import Slider from './components/atoms/slider/slider';

function App() {
  return (
    <div>
      <Button disabled={false}>Hola</Button>
      <Input></Input>
      <Slider></Slider>
    </div>
  );
}

export default App;
