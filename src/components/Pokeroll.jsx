import { Pokecard } from "./Pokecard";
export const Pokeroll = ({ isWinner, who, hand, exp }) => {
  let title;
  if (isWinner) {
    title = <h1 className="Pokedex-winner">WIN!</h1>;
  } else {
    title = <h1 className="Pokedex-loser">LOSE!</h1>;
  }

  return (
    <div className="Pokeroll">
      <h1>{who}</h1>
      {title}
      <h4>Total Experience: {exp}</h4>
      <div className="Pokedex-cards">
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
    </div>
  );
};
