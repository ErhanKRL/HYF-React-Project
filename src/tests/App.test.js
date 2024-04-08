import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Error } from "../pages/Error";
import { Landing } from "../pages/Landing";

test("renders Landing page by default", () => {
  render(
    <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
    </Router>
  );
  const landingTitle = screen.getByText(/Poke Game Center/i);
  expect(landingTitle).toBeInTheDocument();
});

test("renders Error page for unknown routes", () => {
  render(
    <Router>
    <Routes>
      <Route path="/*" element={<Error />} />
    </Routes>
  </Router>
  );
  const errorTitle = screen.getByText(/404/i);
  expect(errorTitle).toBeInTheDocument();
});
