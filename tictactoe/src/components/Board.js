import React from "react";
import Square from "./Square";
import "./styles/Board.scss";

const Board = ({ squares, onClick }) => {
  return (
    <div className="boardSquare">
      {squares.map((square, i) => {
        return <Square key={i} value={square} onClick={() => onClick(i)} />;
      })}
    </div>
  );
};

export default Board;
