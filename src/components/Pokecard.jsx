
import { useState } from "react";
import "../styles/Pokecard.scss";
const img_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number > 999 ? number : `00${number}`.slice(-3));
export const Pokecard = ({ pokemonSet}) => {
    const { name, type, base_experience: exp } = pokemonSet[0];
    const [isVisible, setIsVisible] = useState(false);

    const images = pokemonSet.map((element) => {
        const imgSrc = `${img_URL}${padToThree(element.id)}.png`;
        return <img key={element.id} src={imgSrc} alt="" />;
    });

    const onAnimationEnd = () => {
        setIsVisible(true);
    };

    return (
        <div className="Pokecard">
        <h3 className={isVisible ? '' : 'hidden'}>{name}</h3>
        <div className="slot" onAnimationEnd={onAnimationEnd}><div>{images}</div></div> 
        <p className={isVisible ? '' : 'hidden'}>Type : {type}</p>
        <p className={isVisible ? '' : 'hidden'}>Exp: {exp}</p>
      </div>
    );
};
