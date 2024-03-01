import { render, screen } from "@testing-library/react";
import Game from "../Game";
import "@testing-library/jest-dom";

describe("The Game component", () => {
  it("should display", () => {
    render(<Game />);
    expect(screen.getByText("Milliman Tic-Tac-Toe")).toBeVisible();
  });
});
