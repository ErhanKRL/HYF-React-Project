import { useState, useEffect } from "react";
import { Pokeroll } from "../components/Pokeroll";
import "../styles/Pokegame.scss";
import { Button } from "../components/Button";
import { Result } from "../components/Result";

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
  rolling: false,
  point: 0,
};
export const Pokegame = () => {
  const [gameState, setGameState] = useState(initilalState);

  const fetchPokemon = async (pokemonId) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
    const data = await res.json();
    const { id, name, base_experience, types } = data;
    const type = types[0].type.name;
    return {
      id,
      name,
      type,
      base_experience,
    };
  };

  const createRandomIds = () => {
    const ids = [];
    for (let i = 0; i < 4; i++) {
      const id = Math.floor(Math.random() * 898) + 1;
      ids.includes(id) ? ids.push(id + 1) : ids.push(id);
    }
    return ids;
  };

  const createRandomHand = async () => {
    const ids = createRandomIds();
    const hand = await Promise.all(ids.map((id) => fetchPokemon(id)));
    return hand;
  };

  const roll = async () => {
    setGameState((prevState) => ({
      ...prevState,
      rolling: true,
    }));
    const hand1 = await createRandomHand();
    const hand2 = await createRandomHand();
    const totalExp1 = hand1.reduce(
      (acc, pokemon) => acc + pokemon.base_experience,
      0,
    );
    const totalExp2 = hand2.reduce(
      (acc, pokemon) => acc + pokemon.base_experience,
      0,
    );
    const point =
      totalExp1 < totalExp2 ? gameState.point + 1 : gameState.point - 1;

    setGameState((prevState) => ({
      ...prevState,
      hand1,
      hand2,
      totalExp1,
      totalExp2,
      rolling: false,
      point,
    }));
  };

  return (
    <div className="pokegame">
      <h2 className="Pokedex">
        Your Point: {gameState.point < 0 ? 0 : gameState.point}
      </h2>
      <Pokeroll hand={gameState.hand1} totalExp={gameState.totalExp1} />
      <Result totalExp1={gameState.totalExp1} totalExp2={gameState.totalExp2} />
      <Pokeroll hand={gameState.hand2} totalExp={gameState.totalExp2} />
      <Button onClick={roll} disabled={gameState.rolling}>
        {gameState.rolling ? "Rolling!" : "Roll"}
      </Button>
    </div>
  );
};
