import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from './components/atoms/button/button';
import Input from './components/atoms/input/input';
import Slider from './components/atoms/slider/slider';
import Label from './components/atoms/label/label';
import Table from './components/molecules/table/table';
import Todo from './components/organisms/todo/todo';

function App() {
  return (
    <div>
      <Todo></Todo>
    </div>
  );
}

export default App;
