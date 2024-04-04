import { Link } from "react-router-dom";
import "../App.css";
export const Button = ({ to, children }) => {
  return (
    <Link to={to} className="button">
      {children}
    </Link>
  );
};
