import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./navbar.jsx";
import FavoriteButton from "./FavoriteButton.jsx";
import homepageStyles from "./Homepage.module.css";
import LoaderSpinner from "./LoaderSpinner.jsx";

export function HomePage({ products, setQuery, isLoading }) {
  const navigateTo = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    //set the query to search for cocktails by name using the search value from the input
    setQuery(`search.php?s=${searchValue}`);
  };

  const navigateToPage = (idDrink) => {
    navigateTo(`/products/${idDrink}`);
  };

  if (isLoading)
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <LoaderSpinner />
        </main>
      </>
    );

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div>
          <form
            className={homepageStyles.searchForm}
            onSubmit={handleSearch}
            value={searchValue}
          >
            <input
              type="text"
              name="searchField"
              placeholder="Search cocktails..."
              className={homepageStyles.searchInput}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className={homepageStyles.searchButton}>
              Search
            </button>
          </form>
        </div>

        <div className={homepageStyles.productsContainer}>
          {products.map((product) => (
            <Link key={product.idDrink} to={`/products/${product.idDrink}`}>
              <div className={homepageStyles.card}>
                <div className={homepageStyles.imageContainer}>
                  <img
                    src={`${product.strDrinkThumb}/medium`}
                    alt={product.strDrink}
                  />

                  <FavoriteButton id={product.idDrink} />
                </div>
                <p>{product.strDrink}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
