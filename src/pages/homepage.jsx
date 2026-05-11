import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./navbar.jsx";
import FavoriteButton from "./FavoriteButton.jsx";
import headerstyles from "./Header.module.css";
import productstyles from "./Product.module.css";

export function HomePage({ products, setQuery, isLoading }) {
  const navigateTo = useNavigate();
  const [searchValue, setSearchValue] = useState("");

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
          <div key={product.idDrink}>
            <div className={`${productstyles.card} ${productstyles.details}`}>
              <Link to={`/products/${product.idDrink}`}>
                <img
                  src={`${product.strDrinkThumb}/medium`}
                  alt={product.strDrink}
                  width="50"
                />
                <br />
                <span className={productstyles.name}>{product.strDrink}</span>
              </Link>
            </div>
            <FavoriteButton id={product.idDrink} />
          </div>
        ))}
      </main>
    </div>
  );
}
