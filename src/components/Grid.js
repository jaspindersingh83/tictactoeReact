import { useState } from "react";
import Square from "./Square";

const Grid = ({ matrix, handleSquareClick, hasGameStarted }) => {
  return (
    <div id="grid">
      {matrix.map((sq, idx) => {
        return (
          <Square
            sq={sq}
            idx={idx}
            key={idx}
            handleSquareClick={handleSquareClick}
            hasGameStarted={hasGameStarted}
          />
        );
      })}
    </div>
  );
};

export default Grid;
