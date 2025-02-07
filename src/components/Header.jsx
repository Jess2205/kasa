// src/components/Header.jsx
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/logement/1">Logement 1</Link>
      </nav>
    </header>
  );
};

export default Header;
