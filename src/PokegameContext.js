import { createContext, useContext, useState } from "react";
import { roll } from "./utils/roll";

const initialState = {
  hand1: [
    [{ id: 12, name: "Butterfree", type: "flying", base_experience: 178 }],
    [{ id: 4, name: "Charmander", type: "fire", base_experience: 62 }],
    [{ id: 7, name: "Squirtle", type: "water", base_experience: 63 }],
    [{ id: 11, name: "Metapod", type: "bug", base_experience: 72 }],
  ],
  hand2: [
    [{ id: 25, name: "Pikachu", type: "electric", base_experience: 112 }],
    [{ id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 }],
    [{ id: 94, name: "Gengar", type: "poison", base_experience: 225 }],
    [{ id: 133, name: "Eevee", type: "normal", base_experience: 65 }],
  ],
  totalExp1: 0,
  totalExp2: 0,
  rolling: false,
  balance: 100,
  className: "images",
  isVisible: true,
};

const PokegameContext = createContext();

export const usePokegameContext = () => useContext(PokegameContext);

export const PokegameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(initialState);

  const countBalance = () => {
    const totalExp1 = gameState.hand1.reduce(
      (acc, pokemon) => acc + pokemon[0].base_experience,
      0,
    );
    const totalExp2 = gameState.hand2.reduce(
      (acc, pokemon) => acc + pokemon[0].base_experience,
      0,
    );
    const balance =
      totalExp1 < totalExp2 ? gameState.balance + 1 : gameState.balance - 1;
    return {
      totalExp1,
      totalExp2,
      balance,
    };
  };

  const rollAHand = async () => {
    const newHand = await roll(gameState);
    setGameState((prevState) => ({
      ...prevState,
      ...newHand,
      rolling: true,
      isVisible: false,
      className: "images animation",
    }));
  };
  return (
    <PokegameContext.Provider
      value={{ gameState, setGameState, rollAHand, countBalance }}
    >
      {children}
    </PokegameContext.Provider>
  );
};
