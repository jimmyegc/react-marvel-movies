import { Link } from "react-router-dom";
import styles from "./CaracterItem.module.css";

const CaracterItem = ({ caracter }) => {
  return (
    <Link
      to={`/caracter/${caracter.id}`}
      key={`caracter-item-${caracter.id}`}
      className={styles.caracterCard}
    >
      <img
        src={`${caracter.thumbnail.path}.${caracter.thumbnail.extension}`}
        alt={`${caracter.name}`}
        className={styles.caracterImage}
      />
      <h2>{caracter.name}</h2>
      <p className={styles.caracterInfo}>
        Present in {caracter.comics.available} commics
      </p>
    </Link>
  );
};

export default CaracterItem;
