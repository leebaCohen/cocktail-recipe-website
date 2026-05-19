import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import productstyles from "./Product.module.css";
import FavoriteButton from "./FavoriteButton";
import LoaderSpinner from "./LoaderSpinner";
import Footer from "./Footer.jsx";

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

  const navigate = useNavigate();

  if (isLoading)
    return (
      <div aria-busy="true">
        <LoaderSpinner />
      </div>
    );
  if (!product) return <div role="alert">Cocktail not found!</div>;

  let ingredient = "";
  let measure = "";
  const ingredientArr = [];
  for (let i = 1; i <= 15; i++) {
    ingredient = "strIngredient" + i;
    measure = "strMeasure" + i;
    if (product[ingredient] !== null) {
      ingredientArr.push({
        name: product[ingredient],
        measure: product[measure] ? product[measure] : "",
      });
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
      <main className={productstyles.pageContainer}>
        <div className={productstyles.singleContainer}>
          <div className={productstyles.card}>
            <h1>{product.strDrink}</h1>
            <div className={productstyles.imageContainer}>
              <img
                src={`${product.strDrinkThumb}/medium`}
                alt={`Picture of a ${product.strDrink}.`}
              />
              <FavoriteButton id={idDrink} />
            </div>

            <div className={productstyles.details}>
              <section className={productstyles.leftPanel}>
                <h2 className={productstyles.subheader}>Drink Category:</h2>
                <p>{product.strCategory}</p>
                <h2 className={productstyles.subheader}>Alcoholic:</h2>
                <p>{isAlcoholic}</p>
                <h2 className={productstyles.subheader}>Glass:</h2>
                <p>{product.strGlass}</p>
              </section>

              <section className={productstyles.rightPanel}>
                <h2 className={productstyles.subheader}>Ingredients:</h2>
                <ul className={productstyles.ingredientList}>
                  {ingredientArr.map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.measure} {ingredient.name}{" "}
                    </li>
                  ))}
                </ul>
                <h2 className={productstyles.subheader}>Directions:</h2>
                <ol className={productstyles.instructionList}>
                  {instructionsArr.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </div>
        <button
          className={productstyles.returnBtn}
          onClick={() => navigate("/")}
          aria-label="Return to Home"
        >
          Return to Home
        </button>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ProductDetails;
