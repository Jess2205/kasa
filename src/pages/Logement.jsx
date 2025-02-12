import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Logement = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const jsonUrl = import.meta.env.VITE_JSON_URL;

    // Récupérer les données du JSON
    fetch(jsonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Échec de la récupération des données');
        }
        return response.json();
      })
      .then((data) => {
        // Trouver le logement avec l'ID spécifié dans l'URL
        const logementData = data.find((item) => item.id === parseInt(id));
        if (logementData) {
          setLogement(logementData);
        } else {
          setError('Logement introuvable');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]); // Le useEffect se réexécute quand l'ID change

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div>
      <h1>Logement {logement?.id}</h1>
      <p>{logement?.title}</p>
      {/* Ajout ici d'autres détails du logement comme la description, l'image, etc. */}
    </div>
  );
};

export default Logement;
