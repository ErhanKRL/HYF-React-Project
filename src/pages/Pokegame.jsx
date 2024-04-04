import { useState } from "react";
import { Pokeroll } from "../components/Pokeroll";

const initilalState = {
  hand1: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  ],
  hand2: [
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ],
  totalExp1: 0,
  totalExp2: 0,
  rekt: false,
  rolling: false,
  time: 1,
};
export const Pokegame = () => {
  const [gameState, setGameState] = useState(initilalState);

  return (
    <div className="pokegame">
      <Pokeroll
        hand={gameState.hand1}
        exp={gameState.exp1}
        isWinner={gameState.exp2 < gameState.exp1}
        who="PEPE"
      />
      <Pokeroll
        hand={gameState.hand2}
        exp={gameState.exp2}
        isWinner={gameState.exp2 > gameState.exp1}
        who="YOU"
      />
      <button className="Pokedex-button" disabled={gameState.rolling}>
        {gameState.rolling ? "Rolling!" : "Roll"}
      </button>
      <p className="Pokedex">Your Balance: {"51"}</p>
      {gameState.rekt === true && <h2>Your Balance is Zero</h2>}
    </div>
  );
};
