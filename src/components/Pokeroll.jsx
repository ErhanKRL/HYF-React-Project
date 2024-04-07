import { Pokecard } from "./Pokecard";
import { usePokegameContext } from "../PokegameContext";
import "../styles/Pokegame.scss";
export const Pokeroll = ({ hand, totalExp }) => {
  const { gameState } = usePokegameContext();
  return (
    <div>
      <div className="Pokeroll">
        {hand.map((pokemonSet, index) => {
          return <Pokecard key={index} pokemonSet={pokemonSet} />;
        })}
      </div>
      <h4 className="totalExp">
        Total Experience: {gameState.rolling ? "---" : totalExp}
      </h4>
    </div>
  );
};
