import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import headerstyles from "./Header.module.css";
import Navbar from "./navbar";
import productstyles from "./Product.module.css";
import FavoriteButton from "./FavoriteButton";

function ProductDetails({ isLoading, setIsLoading }) {
  const { idDrink } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);

        //fetch cocktail details by id sent from homepage click
        const response = await fetch(
          `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`,
        );
        const data = await response.json();

        setProduct(data.drinks ? data.drinks[0] : null);
      } catch (error) {
        console.error("Error fetching cocktail:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (idDrink) {
      fetchProduct();
    }
  }, [idDrink]);

  if (isLoading) return <div>Searching...</div>;
  if (!product) return <div>Cocktail not found!</div>;

  return (
    <>
      <header className={headerstyles.header}>
        <h2 className={headerstyles.h2}>Cocktail Recipe: {product.strDrink}</h2>
        <Navbar />
      </header>
      <main className={productstyles.singleContainer}>
        <div className={`${productstyles.card} ${productstyles.largeCard}`}>
          <h2>{product.strDrink}</h2>
          <FavoriteButton id={idDrink} />
          <img src={product.strDrinkThumb} alt={product.strDrink} width="200" />
          <div className={productstyles.details}>
            <p>Category: {product.strCategory}</p>
            <p>Instructions: {product.strInstructions}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductDetails;
