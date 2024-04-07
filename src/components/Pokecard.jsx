
import { useState } from "react";
import { usePokegameContext } from "../PokegameContext";
import "../styles/Pokecard.scss";
const img_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number > 999 ? number : `00${number}`.slice(-3));
export const Pokecard = ({ pokemonSet}) => {
    const { name, type, base_experience: exp } = pokemonSet[0];
    const { gameState } = usePokegameContext();
    const [isVisible, setIsVisible] = useState(false);

    const images = pokemonSet.map((element,index) => {
        const imgSrc = `${img_URL}${padToThree(element.id)}.png`;
        return <img key={index} src={imgSrc} alt="" />;
    });
    
    const onAnimationEnd = () => {
        setIsVisible(true);
    };

    return (
        <div className="Pokecard">
        <h3 className={isVisible ? '' : 'hidden'}>{name}</h3>
        <div className="slot" onAnimationEnd={onAnimationEnd}><div className={gameState.className}>{images}</div></div> 
        <p className={isVisible ? '' : 'hidden'}>Type : {type}</p>
        <p className={isVisible ? '' : 'hidden'}>Exp: {exp}</p>
      </div>
    );
};
