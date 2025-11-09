import React from "react";
import PropTypes from "prop-types";
import styles from "./ProjectPreview.module.css";


export const ProjectPreview = ({ project, position }) => {
  if (!project) return null;


  const previewHeight = 230; // Altura aproximada de la tarjeta de vista previa en píxeles
  const windowHeight = window.innerHeight;
  const spaceBelow = windowHeight - position.y;


  // Si no hay suficiente espacio abajo, muestra la tarjeta hacia arriba.
  const topPosition =
    spaceBelow < previewHeight
      ? position.y - previewHeight - 20 // Posición hacia arriba
      : position.y + 20; // Posición hacia abajo (por defecto)


  // Ajuste para posicionar el preview cerca del cursor
  const style = {
    top: `${topPosition}px`,
    left: `${position.x - 280}px`, // 280px es el ancho aprox. de la tarjeta
  };


  return (
    <div className={styles.previewContainer} style={style}>
      <img
        src={project.imageUrl}
        alt={project.name}
        className={styles.previewImage}
      />
      <div className={styles.previewDetails}>
        <h4>{project.name}</h4>
        <span
          className={`${styles.projectStatus} ${
            styles[`status-${project.status.replace(" ", "-")}`]
          }`}
        >
          {project.status}
        </span>
      </div>
    </div>
  );
};


ProjectPreview.propTypes = {
  project: PropTypes.object,
  position: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
};