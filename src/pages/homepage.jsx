import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import headerstyles from "./Header.module.css";
import navstyles from "./NavBar.module.css";
import productstyles from "./Product.module.css";

export function HomePage() {
  const navigateTo = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        setIsLoading(true);

        //searching for margarita as default cocktail list to display on homepage
        //change to user search input in the future
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
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
  }, []);

  const navigateToPage = (idDrink) => {
    navigateTo(`/products/${idDrink}`);
  };

  if (isLoading) return <div>Loading cocktails...</div>;

  return (
    <div>
      <header className={headerstyles.header}>
        <h2 className={headerstyles.h2}>Cocktail Recipes</h2>
        <nav className={navstyles.navbar}>
          <ul className={navstyles.navLinks}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={productstyles.container}>
        {products.map((product) => (
          <div key={product.idDrink} className={productstyles.card}>
            <button
              onClick={() => navigateToPage(product.idDrink)}
              className={productstyles.button}
            >
              <div className={productstyles.details}>
                <img
                  src={product.strDrinkThumb}
                  alt={product.strDrink}
                  width="50"
                />
                <span className={productstyles.name}>{product.strDrink}</span>
              </div>
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
