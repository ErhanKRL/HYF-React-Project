import { usePokegameContext } from "../PokegameContext";
import "../styles/Result.scss";
export const Result = () => {
  const {
    gameState: { totalExp1, totalExp2, rolling },
  } = usePokegameContext();
  let title;
  if (rolling) {
    title = <h1>Rolling...</h1>;
  } else if (totalExp1 < totalExp2) {
    title = (
      <h1>
        YOU <span className="winner">WIN!</span>
      </h1>
    );
  } else if (totalExp1 > totalExp2) {
    title = (
      <h1>
        YOU <span className="loser">LOSE!</span>
      </h1>
    );
  } else {
    title = <h1>Draw!</h1>;
  }
  return <div className="Result">{title}</div>;
};
