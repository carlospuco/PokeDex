import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from './components/atoms/button/button';
import Input from './components/atoms/input/input';
import Slider from './components/atoms/slider/slider';
import Label from './components/atoms/label/label';
import Table from './components/molecules/table/table';

function App() {
  return (
    <div>
      <Button disabled={false}>Button</Button>
      <Input></Input>
      <Slider></Slider>
      <Label change=''>Hola</Label>
      <Table></Table>
    </div>
  );
}

export default App;
