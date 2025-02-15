import { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import styles from "./Home.module.scss";

const Home = () => {
  // State pour stocker les logements
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    // Récupérer les données depuis le fichier JSON local
    fetch("/Data/logements.json")  // Le chemin est relatif à partir du dossier public
      .then((response) => response.json())
      .then((data) => {
        console.log("Données JSON récupérées : ", data); 
        setLogements(data); // Mettre à jour le state avec les données récupérées
      })
      .catch((error) => console.error("Erreur lors du chargement des logements : ", error));
  }, []);

  return (
    <main className={styles.home}>
      <Banner image="/src/assets/images/Image-Banner.png" title="Chez vous, partout et ailleurs" />
      <div className={styles.gridGallery}>
        {logements.map((logement) => {
          if (!logement.cover || !logement.title) {
            return null;  // Ne pas afficher la carte si les données sont incomplètes
          }
          return <Card key={logement.id} title={logement.title} image={logement.cover} />;
        })}
      </div>
    </main>
  );
};

export default Home;
