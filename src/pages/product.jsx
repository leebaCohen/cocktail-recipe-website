import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import productstyles from "./Product.module.css";
import FavoriteButton from "./FavoriteButton";
import LoaderSpinner from "./LoaderSpinner";

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

  if (isLoading)
    return (
      <div>
        <LoaderSpinner />
      </div>
    );
  if (!product) return <div>Cocktail not found!</div>;

  let ingredient = "";
  let measure = "";
  const ingredientArr = [];
  for (let i = 1; i <= 15; i++) {
    ingredient = "strIngredient" + i;
    measure = "strMeasure" + 1;
    if (product[ingredient] !== null) {
      ingredientArr.push({
        name: product[ingredient],
        measure: product[measure] ? product[measure] : "",
      });
      console.log(ingredientArr);
    } else {
      break;
    }
  }

  // use a regular expression because of the different formats within the API
  let instructionsArr = (
    product?.strInstructions?.split(/\.\s*|\d+\.\s*/) || []
  )
    .map((step) => step.trim())
    .filter((step) => step !== "");
  const isAlcoholic = product?.strAlcoholic === "Alcoholic" ? "Yes" : "No";
  const glass = product?.strGlass;

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={productstyles.singleContainer}>
        <div className={productstyles.card}>
          <h2>{product.strDrink}</h2>
          <div className={productstyles.imageContainer}>
            <img
              src={`${product.strDrinkThumb}/medium`}
              alt={product.strDrink}
            />
            <FavoriteButton id={idDrink} />
          </div>

          <div className={productstyles.details}>
            <div className={productstyles.leftPanel}>
              <p>
                <span className={productstyles.subheader}>
                  Drink Category:{" "}
                </span>
                {product.strCategory}
              </p>
              <p>
                <span className={productstyles.subheader}>Alcoholic: </span>
                {isAlcoholic}
              </p>
              <p>
                <span className={productstyles.subheader}>Glass: </span>
                {product.strGlass}
              </p>
            </div>

            <div className={productstyles.rightPanel}>
              <p className={productstyles.subheader}>Ingredients:</p>
              <ul className={productstyles.ingredientList}>
                {ingredientArr.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.measure} {ingredient.name}{" "}
                  </li>
                ))}
              </ul>
              <p className={productstyles.subheader}>Directions:</p>
              <ol className={productstyles.instructionList}>
                {instructionsArr.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductDetails;
