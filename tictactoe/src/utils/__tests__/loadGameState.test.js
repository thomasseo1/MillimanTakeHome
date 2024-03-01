import { loadGameState } from "../loadGameState";
import "@testing-library/jest-dom";

describe("loadGameState function", () => {
  it("returns null when localStorage is empty", () => {
    expect(loadGameState()).toBeNull();
  });

  it("returns the loaded game state from localStorage", () => {
    const gameState = {
      board: ["X", null, "O", "X", "O", null, null, null, null],
      xIsNext: true,
      scoreboard: [],
    };
    localStorage.setItem("ticTacToeGameState", JSON.stringify(gameState));

    expect(loadGameState()).toEqual(gameState);
  });
});
