import React from "react";
import PropTypes from "prop-types";
import { FolderKanban, ChevronDown } from "lucide-react";
import styles from "./ProfilePage.module.css";


export const ProjectsSection = ({
  projects,
  showProjects,
  onToggle,
  onProjectHover,
  onProjectLeave,
}) => {
  return (
    <section
      className={`${styles.card} ${styles.projectsSection} ${
        !showProjects ? styles.collapsed : ""
      }`}
    >
      <h3
        onClick={onToggle}
        onKeyDown={onToggle}
        tabIndex={0}
        role="button"
        aria-expanded={showProjects}
      >
        <FolderKanban size={24} />
        Proyectos Recientes
        <ChevronDown className={styles.chevron} size={24} />
      </h3>
      {showProjects && (
        <ul className={styles.projectList}>
          {projects.map((project) => (
            <li
              key={project.name}
              onClick={() => window.open(project.projectUrl, "_blank", "noopener,noreferrer")}
              onMouseEnter={(e) => onProjectHover(project, e)}
              onMouseMove={(e) => onProjectHover(project, e)} // Actualiza la posición mientras se mueve
              onMouseLeave={onProjectLeave}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.open(project.projectUrl, "_blank", "noopener,noreferrer");
                }
              }}
            >
              {project.name}
              <span
                className={`${styles.projectList} ${
                  styles[`status-${project.status.replace(" ", "-")}`]
                }`}
              >
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
      projectUrl: PropTypes.string,
    })
  ).isRequired,
  showProjects: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onProjectHover: PropTypes.func.isRequired,
  onProjectLeave: PropTypes.func.isRequired,
};


