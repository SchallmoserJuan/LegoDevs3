import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import productsData from "../../assets/data/products.json";
import ProductCard from "../../components/productCard/ProductCard"; // Ajusta la ruta según tu estructura
import styles from "./JsonDataPage.module.css";

const JsonDataPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setActiveSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
    setActiveSearch("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(activeSearch.toLowerCase())
  );

  // Variants para animaciones de Framer Motion
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className={styles.pageContainer}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Catálogo de Productos (desde JSON)</h1>
        <p>
          Estos datos se están cargando localmente desde un archivo{" "}
          <code>products.json</code>.
        </p>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={handleSearchChange}
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

      <motion.div
        className={styles.gridContainer}
        key={activeSearch} // <-- AÑADIMOS ESTA KEY PARA FORZAR EL RE-RENDERIZADO
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))
          ) : activeSearch ? (
            <motion.div
              className={styles.statusMessage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No se encontraron productos con ese nombre.
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default JsonDataPage;
