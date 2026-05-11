import { useState, useEffect } from "react";
import { MdStarRate, MdOutlineStarOutline } from "react-icons/md";
import styles from "./FavoriteButton.module.css";

function FavoriteButton({ id }) {
  // state logic for favorites
  const [isFavorite, setIsFavorite] = useState(false);

  // load the favorites from localStorage
  useEffect(() => {
    let savedFavorites = localStorage.getItem("favorites");
    const favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    setIsFavorite(favorites.includes(id));
    console.log(favorites);
  }, [id]);

  function handleFavoriteClick(e) {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]",
    );

    let updatedFavorites;
    if (savedFavorites.includes(id)) {
      updatedFavorites = savedFavorites.filter((favId) => favId !== id);
      setIsFavorite(false);
    } else {
      updatedFavorites = id ? [...savedFavorites, id] : savedFavorites;
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  return (
    <button onClick={(e) => handleFavoriteClick(e)}>
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
}

export default FavoriteButton;
