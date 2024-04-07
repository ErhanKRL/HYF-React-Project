import "../styles/App.scss";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
export const Landing = () => {
  return (
    <div className="landing-page">
      <div className="center-content">
        <h1>Poke Game</h1>
        <img src="/pngegg.png" alt="Popular Pokemons" />
        <p>
          Welcome to the ultimate Poke Game Center where you can embark on
          exciting adventures with your favorite Pokemons!
        </p>
        <Button>
          <Link className="gotoApp" to={"/pokegame"}>
            Go to App
          </Link>
        </Button>
      </div>
    </div>
  );
};
