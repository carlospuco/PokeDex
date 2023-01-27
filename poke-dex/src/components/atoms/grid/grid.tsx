import React, { FC } from "react";
import "./grid.scss";


interface GridProps {
  gifList: string[]
}

export const Grid = ({gifList}: GridProps) => {
  return (
    <section className="grid">
      {
        gifList.map((gif) => (
          <div className="box">
            <img
              key={gif}
              src={gif}
              height="150"
            />
          </div>
        ))
      }
    </section>
  );
};
