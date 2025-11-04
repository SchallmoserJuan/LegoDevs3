import React from "react";
import styles from "./DiagramsPage.module.css";
import arbolDiagram from "../../img/arbol.png";
import estructuraMd from "../../../Estructura.md?raw";

const DiagramsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Diagramas del Proyecto</h1>
        <p>
          A continuación se presentan los diagramas de estructura requeridos por
          la consigna del TP2.
        </p>
      </header>

      <section className={styles.diagramSection}>
        <h2>1. Árbol de Renderizado y Rutas</h2>
        <p className={styles.description}>
          Este diagrama muestra la jerarquía de los componentes de React, cómo
          se anidan entre sí y a qué ruta de la aplicación corresponde cada
          página principal.
        </p>
        <div className={styles.imageContainer}>
          <img
            src={arbolDiagram}
            alt="Diagrama del árbol de renderizado"
            className={styles.diagramImage}
          />
        </div>
      </section>

      <section className={styles.diagramSection}>
        <h2>2. Organización de Carpetas</h2>
        <p className={styles.description}>
          Este diagrama ilustra la estructura de carpetas y archivos del
          proyecto, mostrando dónde se ubican los componentes, páginas, estilos,
          datos y assets públicos.
        </p>
        <div className={styles.imageContainer}>
          <pre className={styles.structurePre}>{estructuraMd}</pre>
        </div>
      </section>
    </div>
  );
};

export default DiagramsPage;
