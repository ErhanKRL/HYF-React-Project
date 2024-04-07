import { createContext, useContext, useState } from "react";
import { roll } from "./utils/roll";

const initialState = {
  hand1: [
    [
        { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
        { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
        { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
        { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
        
    ],
    [   
        { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
        { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
        { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
        { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    ],
    [
        
        { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
        { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
        { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
        { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    ],
    [
        
        { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
        { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
        { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
        { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    ],
  ],
  hand2: [
    [
        { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
        { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
        { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
        { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
    [
        { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
        { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
        { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
        { id: 25, name: "Pikachu", type: "electric", base_experience: 112 }
    ],
    [
        { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
        { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
        { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
        { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    ],
    [
        { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
        { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
        { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
        { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    ],

  ],
  totalExp1: 0,
  totalExp2: 0,
  rolling: false,
  point: 0,
  className: 'images',
};

const PokegameContext = createContext();

export const usePokegameContext = () => useContext(PokegameContext);

export const PokegameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(initialState);

  const rollAHand = async () => {
    
    setGameState((prevState) => ({
      ...prevState,
      rolling: true,
      className: 'images animation',
    }));
    const newHand = await roll(gameState);
    setGameState((prevState) => ({
      ...prevState,
      ...newHand,
      rolling: false
    }));
  };
  return (
    <PokegameContext.Provider value={{ gameState, setGameState, rollAHand }}>
      {children}
    </PokegameContext.Provider>
  );
};
