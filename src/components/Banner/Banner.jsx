import PropTypes from "prop-types";
import styles from "./Banner.module.scss";

const Banner = ({ image, title }) => {
  return (
    <div className={styles.banner}>
      <img src={image} alt={title} className={styles.image} />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Banner;
