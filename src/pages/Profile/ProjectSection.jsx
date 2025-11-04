import React from "react";
import PropTypes from "prop-types";
import { Rocket, ChevronDown } from "lucide-react";
import styles from "./ProfilePage.module.css";


export const ProjectsSection = ({ projects = [], showProjects, onToggle }) => {
  // Si no hay proyectos en los datos, usar proyectos por defecto
  const projectList = projects.length > 0 ? projects : [
    { name: "Proyecto Alpha", status: "completado" },
    { name: "Migración a React", status: "en progreso" },
    { name: "API de LEGO", status: "completado" }
  ];

  return (
    <section
      className={`${styles.card} ${styles.projectsSection} ${
        !showProjects ? styles.collapsed : ""
      }`}
    >
      <h3 
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && onToggle()}
        aria-expanded={showProjects}
        aria-controls="projects-list"
      >
        <Rocket size={24} />
        Proyectos Destacados
        <ChevronDown 
          size={20} 
          className={styles.chevron}
          style={{ 
            transform: showProjects ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.3s ease'
          }}
        />
      </h3>
      {showProjects && (
        <ul id="projects-list" className={styles.projectList}>
          {projectList.map((project, index) => (
            <li key={index}>
              {project.name}
              <span className={styles[`status-${project.status.replace(/\s/g, '-')}`]}>
                {project.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
  showProjects: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};