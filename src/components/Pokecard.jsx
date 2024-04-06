
import "../styles/Pokecard.scss";
const img_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number > 999 ? number : `00${number}`.slice(-3));
export const Pokecard = ({ pokemonSet}) => {
    const { id, name, type, base_experience: exp } = pokemonSet[pokemonSet.length - 1];
    console.log(id, name ,type, exp);

    const images = pokemonSet.map((element) => {
        const imgSrc = `${img_URL}${padToThree(element.id)}.png`;
        return <img key={element.id} src={imgSrc} alt="" />;
    });

    return (
      <div className="Pokecard">
        <h3>{name}</h3>
        

        <div className="slot"><div>{images}</div></div>
        
        <p>Type : {type}</p>
        <p>Exp: {exp}</p>
      </div>
    );
};
