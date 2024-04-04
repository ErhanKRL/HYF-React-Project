import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Pokegame } from "./pages/Pokegame";
import { Landing } from "./pages/Landing";
import { Error } from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pokegame" element={<Pokegame />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
