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
          <th><Label change="style">Imagen</Label></th>
          <th>Lastname</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
        </tr>
        <tr>
          <td>Lois</td>
          <td>Griffin</td>
        </tr>
      </table>

 </form>
    
  );
};

export default Table;
