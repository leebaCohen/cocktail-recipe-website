import { useState, useEffect, createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import ProductDetails from "./pages/product";
import FavoritesPage from "./pages/FavoritesPage";
import { FavoritesProvider } from "./pages/FavoritesProvider";

import "./App.css";

export default function App() {
  //fetch api here so products can be access by homepage and favoritespage
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("cocktail");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${query}`,
        );
        const data = await response.json();

        setProducts(data.drinks || []);
      } catch (error) {
        console.error("Error fetching cocktails:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCocktails();
  }, [query]);

  return (
    <FavoritesProvider>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={products}
              setQuery={setQuery}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/products/:idDrink"
          element={
            <ProductDetails isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
        <Route
          path="/favorites"
          element={<FavoritesPage products={products} />}
        />
        //routes for additional pages
        {/* <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/privacy" element={<PrivacyPage />} /> */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </FavoritesProvider>
  );
}
