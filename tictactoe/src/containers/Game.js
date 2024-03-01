import React, { useEffect, useState } from "react";
import { calcWinner } from "../utils/calcWinner";
import Board from "../components/Board";
import { loadGameState } from "../utils/loadGameState";
import { saveGameState } from "../utils/saveGameState";
import "./styles/Game.scss";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scoreboard, setScoreboard] = useState([]);
  const [showResetButton, setShowResetButton] = useState(false);
  const [showPlayAgainButton, setShowPlayAgainButton] = useState(false);

  const isDraw = () => {
    return board.every((square) => square !== null);
  };

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (calcWinner(boardCopy) || boardCopy[i]) return;

    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
    saveGameState({ board: boardCopy, xIsNext: !xIsNext, scoreboard });
    setShowResetButton(true);
    setShowPlayAgainButton(true);
  };

  const restartGame = () => {
    localStorage.removeItem("ticTacToeGameState");
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setScoreboard([]);

    setShowResetButton(false);
  };

  const playAgain = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setShowPlayAgainButton(false);
  };

  useEffect(() => {
    const savedGameState = loadGameState();
    if (savedGameState) {
      const {
        board: savedBoard,
        xIsNext: savedXIsNext,
        scoreboard: savedScoreboard,
      } = savedGameState;

      setBoard(savedBoard);
      setXIsNext(savedXIsNext);
      setScoreboard(savedScoreboard);
      setShowPlayAgainButton(true);
      setShowResetButton(true);
    }
  }, []);

  useEffect(() => {
    const winner = calcWinner(board);
    if (winner) {
      setScoreboard([...scoreboard, winner]);
      setShowPlayAgainButton(true);
    }
  }, [board]);

  return (
    <>
      <h1>Milliman Tic-Tac-Toe</h1>
      <Board squares={board} onClick={handleClick} />
      <div>
        <h2 className="playerText">
          {calcWinner(board)
            ? "Winner: " + calcWinner(board)
            : isDraw()
            ? "It's a Draw!"
            : "Current player: " + (xIsNext ? "X" : "O")}
        </h2>
        <ol className="scoreboard">
          {scoreboard.map((winner, i) => (
            <li key={i}>{winner}</li>
          ))}
        </ol>
        <div className="gameButtons">
          {showPlayAgainButton && (
            <button className="playAgainButton" onClick={playAgain}>
              Play Again
            </button>
          )}
          {showResetButton && (
            <button className="resetGameButton" onClick={restartGame}>
              Reset Game
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Game;
