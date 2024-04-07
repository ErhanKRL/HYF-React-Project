import { Pokeroll } from "../components/Pokeroll";
import "../styles/Pokegame.scss";
import { Button } from "../components/Button";
import { Result } from "../components/Result";
import { usePokegameContext } from "../PokegameContext";

export const Pokegame = () => {
  const { gameState, rollAHand } = usePokegameContext();
  return (
    <div className="pokegame">
      <h2 className="Pokedex">
        {`Your Balance: ${gameState.balabce < 0 ? 0 : gameState.balance} €`}
      </h2>
      <Pokeroll hand={gameState.hand1} totalExp={gameState.totalExp1} />
      <Result />
      <Pokeroll hand={gameState.hand2} totalExp={gameState.totalExp2} />
      <Button onClick={rollAHand} disabled={gameState.rolling}>
        {gameState.rolling ? "Rolling!" : "Roll"}
      </Button>
    </div>
  );
};
