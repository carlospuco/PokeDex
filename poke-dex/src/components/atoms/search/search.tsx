import React, { FC } from "react";
import "./search.scss";

interface SearchProps {
  children?: React.ReactNode;
  onClick?: () => void;
  size?: "search" | "values";
}

const Search: FC<SearchProps> = ({ children, onClick, size = "search" }) => {
  return (
    <div className="input__position">
      {children && <div className="input__icon-left">{children}</div>}
      <input type="search" className="input__searchStyle" placeholder="Buscar"/>
    </div>
  );
};

export default Search;
