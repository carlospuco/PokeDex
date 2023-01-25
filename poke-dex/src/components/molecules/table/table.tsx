import React, { FC } from "react";
import Label from "../../atoms/label/label";
import "./table.scss";

interface TableProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  size?: "small" | "large";
}

const Table: FC<TableProps> = ({
  children,
  disabled = false,
  onClick,
  size = "large",
}) => {
  return (
 <form className="table">
    
      <table>
        <tr>
          <th><Label change="style">Nombre</Label></th>
          <th><Label change="style">Imagen</Label></th>
          <th><Label change="style">Ataque</Label></th>
          <th><Label change="style">Defensa</Label></th>
          <th><Label change="style">Acciones</Label></th>
        </tr>
        <tr>
          <td>nombre</td>
          <td>imagen</td>
          <td>80</td>
          <td>68</td>
          <td>Griffin</td>
        </tr>
      </table>

 </form>
    
  );
};

export default Table;
