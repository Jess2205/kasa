import styles from "./Footer.module.scss";
import logo from "/Logo-Footer.png"; // Correct chemin relatif vers le logo

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Logo dans le footer */}
      <img src={logo} alt="Logo de Kasa" className={styles.logo} />

      <p>© 2024 Kasa. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;

