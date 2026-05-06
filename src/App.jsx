import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import ProductDetails from "./pages/product";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/products/:idDrink" element={<ProductDetails />} />

      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}
