import { loadGameState } from "../loadGameState";

describe("loadGameState function", () => {
  it("returns null when localStorage is empty", () => {
    expect(loadGameState()).toBeNull();
  });

  it("returns the loaded game state from localStorage", () => {
    // Mock localStorage.getItem to return a stringified game state
    const gameState = {
      board: ["X", null, "O", "X", "O", null, null, null, null],
      xIsNext: true,
      scoreboard: [],
    };
    localStorage.setItem("ticTacToeGameState", JSON.stringify(gameState));

    // Call loadGameState and expect it to return the parsed game state
    expect(loadGameState()).toEqual(gameState);
  });
});
