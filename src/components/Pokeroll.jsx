import { Pokecard } from "./Pokecard";
import "../styles/Pokegame.scss";
export const Pokeroll = ({ hand,}) => {
  return (
    <div className="Pokeroll">
        {hand.map((pokemon) => {
          return (
            <Pokecard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              exp={pokemon.base_experience}
            />
          );
        })}
    </div>
  );
};
