import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Accueil</Link>
      <Link to="/logement/1">A propos</Link>
    </nav>
  );
};

export default Navbar;
