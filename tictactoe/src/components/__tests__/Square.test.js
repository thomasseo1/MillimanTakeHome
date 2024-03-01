import { render, fireEvent, screen } from "@testing-library/react";
import Square from "../Square";

describe("Square Component", () => {
  it("renders with value X", () => {
    render(<Square value="X" onClick={() => {}} />);
    const squareButton = screen.getByRole("button");
    expect(squareButton).toHaveTextContent("X");
  });

  it("renders with value O", () => {
    render(<Square value="O" onClick={() => {}} />);
    const squareButton = screen.getByRole("button");
    expect(squareButton).toHaveTextContent("O");
  });

  it("calls onClick function when clicked", () => {
    const mockFunc = jest.fn();
    render(<Square value="O" onClick={mockFunc} />);
    const squareButton = screen.getByRole("button");
    fireEvent.click(squareButton);
    expect(mockFunc).toHaveBeenCalled();
  });
});
