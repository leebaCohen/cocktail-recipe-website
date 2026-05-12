import Navbar from "./navbar";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import { useFavorites } from "./FavoritesProvider";
import productstyles from "./Product.module.css";

function FavoritesPage({ products }) {
  const { favorites } = useFavorites();
  if (favorites.length === 0) {
    return (
      <>
        <Navbar />
        <p>You do not have any favorites yet</p>
      </>
    );
  }

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.idDrink),
  );

  return (
    <>
      <Navbar />
      <h2>Here are your favs:</h2>
      {favoriteProducts.map((product) => (
        <div key={product.idDrink}>
          <Link to={`/products/${product.idDrink}`}>
            <div className={`${productstyles.card} ${productstyles.details}`}>
              <img
                src={`${product.strDrinkThumb}/medium`}
                alt={product.strDrink}
                width="50"
              />
              <br />
              <span className={productstyles.name}>{product.strDrink}</span>
            </div>
          </Link>
          <FavoriteButton id={product.idDrink} />
        </div>
      ))}
    </>
  );
}

export default FavoritesPage;
