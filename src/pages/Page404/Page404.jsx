import { Link } from "react-router-dom";  
import styles from "./Page404.module.scss";  

export function Page404() {
  return (
    <div className={styles.notFoundContainer}>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
      <Link to="/">Retour sur la page d&apos;accueil</Link>
    </div>
  );
}

  