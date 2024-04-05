import "../styles/Result.scss";
export const Result = ({ isWinner, exp }) => {
    let title;
        if(isWinner) {
            title = <span className="winner">WIN!</span>
        } else {
            title = <span className="loser">LOSE!</span>
        }
    return (
        <div className="Result">
        <h1>YOU {title}</h1>
        <h4>Total Experience: {exp}</h4>
        </div>
    );
}