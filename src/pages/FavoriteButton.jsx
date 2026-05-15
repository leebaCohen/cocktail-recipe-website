import { useFavorites } from "./FavoritesProvider";
import { MdStarRate, MdOutlineStarOutline } from "react-icons/md";
import styles from "./FavoriteButton.module.css";

function FavoriteButton({ id }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  function handleFavoriteClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  }

  return (
    <button className={styles.favBtn} onClick={handleFavoriteClick}>
      {isFavorite(id) ? (
        <>
          <MdStarRate className={styles.yellowStar} />
        </>
      ) : (
        <>
          <MdOutlineStarOutline className={styles.grayStar} />
        </>
      )}
    </button>
  );
}

export default FavoriteButton;
