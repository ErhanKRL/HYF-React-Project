import "../App.css";
import { Button } from "../components/Button";
export const Landing = () => {
  return (
    <div className="landing-page">
      <div className="center-content">
        <h1 className="title">Poke Game Center</h1>
        <img
          className="pokemon-image"
          src="https://via.placeholder.com/600x400"
          alt="Popular Pokemons"
        />
        <p className="description">
          Welcome to the ultimate Poke Game Center where you can embark on
          exciting adventures with your favorite Pokemons!
        </p>
        <Button to="/pokegame">Go to App</Button>
      </div>
    </div>
  );
};
