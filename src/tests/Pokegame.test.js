import { render, screen } from "@testing-library/react";
import { Pokegame } from "../pages/Pokegame";
import { usePokegameContext } from "../PokegameContext";

jest.mock("../PokegameContext");

describe("Pokegame component", () => {
  test("renders balance correctly", () => {
    const mockGameState = {
      balance: 100,
      hand1: [],
      hand2: [],
      totalExp1: 0,
      totalExp2: 0,
      rolling: false,
    };
    usePokegameContext.mockReturnValue({ gameState: mockGameState });
    render(<Pokegame />);
    const balanceElement = screen.getByText(/Your Balance:/i);
    expect(balanceElement).toBeInTheDocument();
    expect(balanceElement).toHaveTextContent("Your Balance: 100 €");
  });

  test("renders Result component", () => {
    const mockGameState = {
      balance: 100,
      hand1: [],
      hand2: [],
      totalExp1: 0,
      totalExp2: 0,
      rolling: false,
    };

    usePokegameContext.mockReturnValue({ gameState: mockGameState });
    render(<Pokegame />);
    const resultElement = screen.getByText("Draw!");
    expect(resultElement).toBeInTheDocument();
  });

  test("renders Button component", () => {
    const mockGameState = {
      balance: 100,
      hand1: [],
      hand2: [],
      totalExp1: 0,
      totalExp2: 0,
      rolling: false,
    };
    usePokegameContext.mockReturnValue({ gameState: mockGameState });
    render(<Pokegame />);
    const buttonElement = screen.getByText(/ROLL/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
