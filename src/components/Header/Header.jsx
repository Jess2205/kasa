import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import logo from "/Logo-Header.png"; // Importation de l'image du logo

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <img src={logo} alt="Logo de Kasa" className={styles.logo} />

      {/* Barre de navigation */}
      <Navbar />
    </header>
  );
};

export default Header;
