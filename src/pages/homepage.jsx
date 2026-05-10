import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./navbar.jsx";
import FavoriteButton from "./FavoriteButton.jsx";
import headerstyles from "./Header.module.css";
import productstyles from "./Product.module.css";

export function HomePage() {
  const navigateTo = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("margarita");

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
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

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchValue);
  };

  const navigateToPage = (idDrink) => {
    navigateTo(`/products/${idDrink}`);
  };

  if (isLoading) return <div>Loading cocktails...</div>;

  return (
    <div>
      <header className={headerstyles.header}>
        <h2 className={headerstyles.h2}>Cocktail Recipes</h2>
        <Navbar />
      </header>
      <main className={productstyles.container}>
        <div>
          <form
            className={productstyles.searchForm}
            onSubmit={handleSearch}
            value={searchValue}
          >
            <input
              type="text"
              placeholder="Search cocktails..."
              className={productstyles.searchInput}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className={productstyles.searchButton}>
              Search
            </button>
          </form>
        </div>

        {products.map((product) => (
          <Link to={`/products/${product.idDrink}`}>
            <div
              key={product.idDrink}
              className={`${productstyles.card} ${productstyles.details}`}
            >
              <img
                src={`${product.strDrinkThumb}/medium`}
                alt={product.strDrink}
                width="50"
              />
              <FavoriteButton />
              <br />
              <span className={productstyles.name}>{product.strDrink}</span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
