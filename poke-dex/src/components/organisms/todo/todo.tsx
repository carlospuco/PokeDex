import React, { FC, useState } from "react";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import InputNew from "../../atoms/inputnew/inputnew";
import Label from "../../atoms/label/label";
import Slider from "../../atoms/slider/slider";
import Table from "../../molecules/table/table";
import "./todo.scss";

interface TodoProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  size?: "small" | "large";
}

const Todo: FC<TodoProps> = ({
  children,
  disabled = false,
  onClick,
  size = "large",
}) => {
  return (
    <div className="todo">
      <div className="todo--header">
        <Label change="title">Listado de Pokemon</Label>
        <div className="todo--search">
          <Input></Input>
          <Button> + Nuevo</Button>
        </div>
        <div className="todo--table">
          <Table></Table>
        </div>
      </div>
      <div className="todo--header">
        <Label change="title">Nuevo Pokemon</Label>
        <div className="todo--searchnew">
          <Label change="title">Nombre: </Label>
          <InputNew placeholder="Nombre"></InputNew>
          <Label change="title">Ataque: </Label>
          <Slider></Slider>
        </div>
        <div className="todo--searchnew">
          <Label change="title">Imagen: </Label>
          <InputNew placeholder="Imagen"></InputNew>
          <Label change="title">Defensa: </Label>
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
};

export default Todo;
