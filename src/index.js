import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { PokegameProvider } from "./PokegameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PokegameProvider>
      <App />
    </PokegameProvider>
  </React.StrictMode>,
);
