import "../styles/Pokecard.scss";
const img_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number > 999 ? number : `00${number}`.slice(-3));
export const Pokecard = ({ id, name, type, exp }) => {
  let imgSrc = `${img_URL}${padToThree(id)}.png`;

  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <p>Type : {type}</p>
      <p>Exp: {exp}</p>
    </div>
  );
};
