import { Pokecard } from "./Pokecard";
import "../styles/Pokegame.scss";
export const Pokeroll = ({ hand, totalExp }) => {
  return (
    <div>
      <div className="Pokeroll">
        {hand.map((pokemonSet, index) => {
          return (
            <Pokecard
              key={index}
              pokemonSet={pokemonSet}
            />
          );
        })}
      </div>
      <h4>Total Experience: {totalExp}</h4>
    </div>
  );
};
