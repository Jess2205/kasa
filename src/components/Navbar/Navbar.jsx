import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Accueil</Link>
      <Link to="/A-propos">A propos</Link> 
    </nav>
  );
};

export default Navbar;
