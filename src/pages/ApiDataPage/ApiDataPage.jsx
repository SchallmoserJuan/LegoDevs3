import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"; // Importamos motion y AnimatePresence
import styles from "./ApiDataPage.module.css";
const PAGE_SIZE = 20;

const ApiDataPage = () => {
  const [sets, setSets] = useState([]); // Sets que se muestran en la UI
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearch, setActiveSearch] = useState(""); // Para mantener la búsqueda activa durante la paginación

  // --- Estados de Paginación ---
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(count / PAGE_SIZE);

  // Variants para animaciones de Framer Motion
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Retraso entre la aparición de cada tarjeta
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }, // Animación de salida para tarjetas individuales
  };

  const fetchLegoSets = async (page, search = "") => {
    setLoading(true);
    setError(null);
    const apiKey = "12d7bc4adb28a3cb10dcf9afc64bed32";
    let url = `https://rebrickable.com/api/v3/lego/sets/?page_size=${PAGE_SIZE}&theme_id=158&page=${page}`;

    if (search) {
      url += `&search=${search}`;
    }

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `key ${apiKey}`,
        },
      });
      if (!response.ok) {
        throw new Error("La respuesta de la red no fue satisfactoria");
      }
      const data = await response.json();
      setSets(data.results);
      setCount(data.count); // Guardamos el total de resultados para la paginación
    } catch (error) {
      setError(error.message);
      setSets([]); // Limpiamos los sets en caso de error
      setCount(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLegoSets(currentPage, activeSearch);
  }, [currentPage, activeSearch]); // Se re-ejecuta si la página o la búsqueda activa cambian

  const handleSearch = () => {
    setCurrentPage(1); // Resetea a la primera página en cada nueva búsqueda
    setActiveSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
    setActiveSearch("");
    if (currentPage !== 1) {
      setCurrentPage(1); // Vuelve a la página 1 si no lo está ya
    }
  };

  // Manejar Enter en el input para buscar
  const handleKeyPress = (e) => e.key === "Enter" && handleSearch();

  // --- Funciones de Paginación ---
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <motion.header // Animación para el encabezado
        className={styles.header}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Sets de LEGO StarWars (desde API)</h1>
        <p>
          Estos sets de Star Wars se cargan desde la API de{" "}
          <code>rebrickable.com</code>.
        </p>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Buscar sets por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            className={styles.searchInput}
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            Buscar
          </button>
          <button onClick={handleClear} className={styles.clearButton}>
            Limpiar
          </button>
        </div>
      </motion.header>

      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loading" // Clave única para AnimatePresence
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.statusMessage}
          >
            Cargando sets de LEGO...
          </motion.div>
        )}
        {error && (
          <motion.div
            key="error" // Clave única para AnimatePresence
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${styles.statusMessage} ${styles.error}`}
          >
            Error: {error}
          </motion.div>
        )}
        {!loading && !error && (
          <motion.section // Contenedor principal del contenido (grilla + paginación)
            key="content" // Clave única para AnimatePresence
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div // El contenedor de la grilla de sets
              className={styles.gridContainer}
              variants={gridContainerVariants} // Aplica las variantes para el escalonamiento
              initial="hidden"
              animate="visible"
            >
              {sets.length === 0 ? (
                <motion.div
                  key="no-results"
                  variants={itemVariants}
                  className={styles.statusMessage}
                >
                  No se encontraron sets con ese nombre.
                </motion.div>
              ) : (
                <AnimatePresence>
                  {" "}
                  {/* AnimatePresence para las tarjetas individuales */}
                  {sets.map((set) => (
                    <motion.div
                      key={set.set_num}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={styles.setCard}
                    >
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
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </motion.div>

            {/* --- Controles de Paginación --- */}
            {count > PAGE_SIZE && (
              <motion.div // Animación para el contenedor de paginación
                className={styles.paginationContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className={styles.paginationButton}
                >
                  Anterior
                </button>
                <span className={styles.paginationInfo}>
                  Página {currentPage} de {totalPages}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className={styles.paginationButton}
                >
                  Siguiente
                </button>
              </motion.div>
            )}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ApiDataPage;
