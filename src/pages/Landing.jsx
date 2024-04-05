import "../styles/App.scss";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
export const Landing = () => {
  return (
    <div className="landing-page">
      <div className="center-content">
        <h1>Poke Game Center</h1>
        <img src="https://via.placeholder.com/600x400" alt="Popular Pokemons" />
        <p>
          Welcome to the ultimate Poke Game Center where you can embark on
          exciting adventures with your favorite Pokemons!
        </p>
        <Button>
          <Link to={"/pokegame"}>Go to App</Link>
        </Button>
      </div>
    </div>
  );
};
