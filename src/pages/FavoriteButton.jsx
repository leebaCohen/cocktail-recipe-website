import { useFavorites } from "./FavoritesProvider";
import { MdStarRate, MdOutlineStarOutline } from "react-icons/md";
import styles from "./FavoriteButton.module.css";

function FavoriteButton({ id }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  function handleFavoriteClick(e) {
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
          Added to Favorites <MdStarRate color="#ffee00" />
        </>
      ) : (
        <>
          Add to Favorites <MdOutlineStarOutline color="gray" />
        </>
      )}
    </button>
  );
}

export default FavoriteButton;
