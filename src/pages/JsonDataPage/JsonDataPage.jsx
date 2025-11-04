import React from "react";
import productsData from "../../assets/data/products.json";
import ProductCard from "../../components/productCard/ProductCard"; // Ajusta la ruta según tu estructura
import styles from "./JsonDataPage.module.css";

const JsonDataPage = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Catálogo de Productos (desde JSON)</h1>
        <p>
          Estos datos se están cargando localmente desde un archivo{" "}
          <code>products.json</code>.
        </p>
      </header>

      <div className={styles.gridContainer}>
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default JsonDataPage;
