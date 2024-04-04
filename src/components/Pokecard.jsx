const Poke_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number > 999 ? number : `00${number}`.slice(-3));
export const Pokecard = ({ id, name, type, exp }) => {
  let imgSrc = `${Poke_API}${padToThree(id)}.png`;

  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <div className="Pokecard-image">
        <img src={imgSrc} alt="" />
      </div>
      <p className="Pokecard-data">Type : {type}</p>
      <p className="Pokecard-data">EXP: {exp}</p>
    </div>
  );
};
