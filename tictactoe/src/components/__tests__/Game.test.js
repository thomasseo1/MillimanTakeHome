import { render, screen } from "@testing-library/react";
import Game from "../Game";

describe("The Game component", () => {
  it("what you see when you first start the game", () => {
    render(<Game />);
    expect(screen.getByText("Milliman Tic-Tac-Toe")).toBeVisible();
  });
});
