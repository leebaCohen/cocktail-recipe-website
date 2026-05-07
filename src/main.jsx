import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

export default createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/cocktail-recipe-website/">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
