import { ColorRing } from "react-loader-spinner";
import styles from "./LoaderSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.spinnerContainer}>
      <ColorRing
        className={styles.spinner}
        visible={true}
        height="100"
        width="100"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#d6464f", "#d67259", "#eca156", "#c7c78f", "#313390"]}
      />
    </div>
  );
}
