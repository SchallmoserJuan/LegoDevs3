import React, { useState, useEffect } from "react";
import styles from "./ApiDataPage.module.css";

const ApiDataPage = () => {
  const [sets, setSets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLegoSets = async () => {
      const apiKey = "12d7bc4adb28a3cb10dcf9afc64bed32";

      try {
        const response = await fetch(
          "https://rebrickable.com/api/v3/lego/sets/?page_size=20&theme_id=158", // Star Wars theme
          {
            headers: {
              Authorization: `key ${apiKey}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("La respuesta de la red no fue satisfactoria");
        }
        const data = await response.json();
        setSets(data.results); // Los datos de los sets están en la propiedad 'results'
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLegoSets();
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez.

  if (loading) {
    return <div className={styles.statusMessage}>Cargando sets de LEGO...</div>;
  }

  if (error) {
    return (
      <div className={`${styles.statusMessage} ${styles.error}`}>
        Error: {error}
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Sets de LEGO (desde API)</h1>
        <p>
          Estos sets de Star Wars se cargan desde la API de{" "}
          <code>rebrickable.com</code>.
        </p>
      </header>

      <div className={styles.gridContainer}>
        {sets.map((set) => (
          <div key={set.set_num} className={styles.setCard}>
            <img
              src={set.set_img_url}
              alt={set.name}
              className={styles.setImage}
              loading="lazy"
            />
            <div className={styles.setInfo}>
              <h3>{set.name}</h3>
              <p>{set.num_parts} piezas</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiDataPage;
