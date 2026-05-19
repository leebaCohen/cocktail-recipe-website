import Navbar from "./navbar";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import { useFavorites } from "./FavoritesProvider";
import productstyles from "./Product.module.css";
import styles from "./FavoritesPage.module.css";
import Footer from "./Footer";

function FavoritesPage({ products }) {
  const { favorites } = useFavorites();
  if (favorites.length === 0) {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <p className={styles.defaultText}>
            Click the star on a cocktail image to add it to your Favorites!
          </p>
        </main>
      </>
    );
  }

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.idDrink),
  );

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h2 className={styles.favoritesTitle}>My Favorites</h2>
        <div className={styles.productsContainer}>
          {favoriteProducts.map((product) => (
            <Link key={product.idDrink} to={`/products/${product.idDrink}`}>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <img
                    src={`${product.strDrinkThumb}/medium`}
                    alt={product.strDrink}
                  />
                  <FavoriteButton id={product.idDrink} />
                </div>
                <p className={styles.name}>{product.strDrink}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default FavoritesPage;
