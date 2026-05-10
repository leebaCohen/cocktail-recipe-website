import { useState, useEffect } from "react";
import { MdStarRate, MdOutlineStarOutline } from "react-icons/md";
import styles from "./FavoriteButton.module.css";

const FavoriteButton = ({ id }) => {
  // state logic for favorites
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavoriteClick(e) {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    addToFavorites(e.product.id);
  }

  function addToFavorites() {}

  // load the favorites from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]",
    );
    setIsFavorite(savedFavorites.includes(id));
  }, [id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();

    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]",
    );
    let updatedFavorites;

    if (savedFavorites.includes(id)) {
      updatedFavorites = savedFavorites.filter((favId) => favId !== id);
      setIsFavorite(false);
    } else {
      updatedFavorites = [...savedFavorites, id];
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <button onClick={toggleFavorite} className={styles.favBtn}>
      {isFavorite ? (
        <>
          Added to Favorites <MdStarRate color="#ffee00" />
        </>
      ) : (
        <>
          Add to Favorites <MdOutlineStarOutline color="#ffee00" />
        </>
      )}
    </button>
  );
};

export default FavoriteButton;
