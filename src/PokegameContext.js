import { createContext, useContext, useState } from "react";
import { roll } from "./utils/roll";
import { sampleData } from "./utils/sampleData";

const { hand1, hand2 } = sampleData;
const initialState = {
  hand1,
  hand2,
  totalExp1: 0,
  totalExp2: 0,
  rolling: false,
  balance: 100,
  className: "images",
  isVisible: true,
  error: null,
};

const PokegameContext = createContext();

export const usePokegameContext = () => useContext(PokegameContext);

export const PokegameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(initialState);
  const { hand1, hand2, balance } = gameState;

  const countBalance = () => {
    const totalExp1 = hand1.reduce(
      (acc, pokemon) => acc + pokemon[0].base_experience,
      0,
    );
    const totalExp2 = hand2.reduce(
      (acc, pokemon) => acc + pokemon[0].base_experience,
      0,
    );
    const totalBalance = totalExp1 < totalExp2 ? balance + 1 : balance - 1;
    return {
      totalExp1,
      totalExp2,
      totalBalance,
    };
  };

  const rollAHand = async () => {
    try {
      const newHand = await roll({ hand1, hand2 });
      setGameState((prevState) => ({
        ...prevState,
        hand1: newHand.newHand1,
        hand2: newHand.newHand2,
        className: "images animation",
        rolling: true,
        isVisible: false,
        error: null,
      }));
    } catch (error) {
      setGameState((prevState) => ({
        ...prevState,
        error: "Error rolling the hand. Please try again.",
      }));
    }
  };

  return (
    <PokegameContext.Provider
      value={{ gameState, setGameState, rollAHand, countBalance }}
    >
      {children}
    </PokegameContext.Provider>
  );
};
