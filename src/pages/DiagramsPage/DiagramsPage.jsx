import React, { useState } from "react";
import styles from "./DiagramsPage.module.css";
import arbolDiagram from "../../img/arbol.png";
import estructuraMd from "../../../Estructura.md?raw";
import { GitMerge, FolderTree, Layers, X, Copy, Check } from "lucide-react";


const TECH_STACK = [
  {
    name: "React",
    logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    invertInDark: false,
  },
  {
    name: "Vite",
    logo: "https://cdn.worldvectorlogo.com/logos/vitejs.svg",
    invertInDark: false,
  },
  {
    name: "CSS Modules",
    logo: "https://www.svgrepo.com/show/452185/css-3.svg",
    invertInDark: true,
  },
  {
    name: "GitHub",
    logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    invertInDark: true,
  },
  {
    name: "Vercel",
    logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
    invertInDark: true,
  },
  {
    name: "APIs",
    logo: "https://www.svgrepo.com/show/503163/api-settings.svg",
    invertInDark: true,
  },
];


const DiagramsPage = () => {
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);


  const ImageModal = () => (
    <div
      className={styles.modalOverlay}
      onClick={() => setImageModalOpen(false)}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={() => setImageModalOpen(false)}
        >
          <X size={28} />
        </button>
        <img
          src={arbolDiagram}
          alt="Diagrama del árbol de renderizado ampliado"
          className={styles.modalImage}
        />
      </div>
    </div>
  );


  const handleCopyStructure = () => {
    navigator.clipboard.writeText(estructuraMd).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // El mensaje "Copiado" desaparecerá después de 2 segundos
    });
  };


  return (
    <div className={styles.pageContainer}>
      <div className={styles.bentoGrid}>
        {/* --- Tarjeta de Encabezado --- */}
        <div className={`${styles.bentoItem} ${styles.headerCard}`}>
          <h1>Diagramas del Proyecto</h1>
          <p>
            Una mirada a la arquitectura y organización de nuestro universo de
            código.
          </p>
        </div>


        {/* --- Tarjeta del Stack Tecnológico (Nueva) --- */}
        <div className={`${styles.bentoItem} ${styles.techStackCard}`}>
          <div className={styles.cardHeader}>
            <Layers size={24} className={styles.cardIcon} />
            <h2>Stack Tecnológico</h2>
          </div>
          <p className={styles.description}>
            Las tecnologías que usamos para construir este
            proyecto. Siempre buscando la mejor base para nuestras ideas y soluciones. Ideado para eficiencia y escalabilidad.
          </p>
          <div className={styles.techGrid}>
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className={`${styles.techItem} ${
                  tech.invertInDark ? styles.invertInDark : ""
                }`}
              >
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className={styles.techLogo}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>


        {/* --- Tarjeta del Árbol de Renderizado --- */}
        <div className={`${styles.bentoItem} ${styles.diagramCard}`}>
          <div className={styles.cardHeader}>
            <GitMerge size={24} className={styles.cardIcon} />
            <h2>Árbol de Renderizado y Rutas</h2>
          </div>
          <p className={styles.description}>
            Jerarquía de componentes y su relación con las rutas de la
            aplicación.
          </p>
          <div
            className={styles.imageContainer}
            onClick={() => setImageModalOpen(true)}
            role="button"
            tabIndex={0}
          >
            <img
              src={arbolDiagram}
              alt="Diagrama del árbol de renderizado"
              className={styles.diagramImage}
            />
          </div>
        </div>


        {/* --- Tarjeta de la Estructura de Carpetas --- */}
        <div className={`${styles.bentoItem} ${styles.structureCard}`}>
          <div className={styles.cardHeader}>
            <FolderTree size={24} className={styles.cardIcon} />
            <h2>Organización de Carpetas</h2>
          </div>
          <p className={styles.description}>
            La estructura de directorios que da forma a nuestro proyecto.
          </p>
          <div className={styles.structureContainer}>
            <button
              onClick={handleCopyStructure}
              className={styles.copyButton}
              aria-label="Copiar estructura de carpetas"
            >
              {isCopied ? <Check size={16} /> : <Copy size={16} />}
              <span>{isCopied ? "Copiado!" : "Copiar"}</span>
            </button>
            <pre className={styles.structurePre}>{estructuraMd}</pre>
          </div>
        </div>
      </div>
      {isImageModalOpen && <ImageModal />}
    </div>
  );
};


export default DiagramsPage;

