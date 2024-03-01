import { calcWinner } from "../calcWinner";
import "@testing-library/jest-dom";

describe("calcWinner", () => {
  it("should return null for an empty board", () => {
    const board = Array(9).fill(null);
    expect(calcWinner(board)).toBe(null);
  });

  it("should return X if X wins horizontally", () => {
    const board = ["X", "X", "X", null, "O", null, "O", null, "O"];
    expect(calcWinner(board)).toBe("X");
  });
});
