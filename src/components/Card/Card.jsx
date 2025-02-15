import PropTypes from "prop-types";
import styles from "./Card.module.scss";

const Card = ({ title, image }) => {
  return (
    <div className={styles.card}>
      {/* Affichage de l'image de couverture comme arrière-plan */}
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
