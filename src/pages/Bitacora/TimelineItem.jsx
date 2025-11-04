import React, { useState } from "react";
import PropTypes from "prop-types";
import { Rocket, Palette, Settings, Lightbulb, ChevronDown } from "lucide-react";
import styles from "./Bitacora.module.css";

const ICONS = {
  rocket: Rocket,
  palette: Palette,
  settings: Settings,
  lightbulb: Lightbulb,
};

const STATUS_LABELS = {
  "en-progreso": "En Progreso",
  "completado": "Completado",
  "planificado": "Planificado",
};

export const TimelineItem = ({ entry, relativeTime }) => {
  const [showDetails, setShowDetails] = useState(false);
  const Icon = ICONS[entry.icon] || Rocket;
  const statusClass = entry.status === "completado" ? "completed" : "current";
  const tagClass = entry.status === "completado" ? "tagCompleted" : "tagInProgress";

  return (
    <article className={`${styles.timelineItem} ${styles[statusClass]}`}>
      <div className={styles.timelineIcon}>
        <Icon size={20} />
      </div>
      <div className={styles.timelineContent}>
        <div className={styles.contentHeader}>
          <div>
            <h2>{entry.title}</h2>
            <span className={styles.date}>{relativeTime}</span>
          </div>
          <span className={`${styles.tag} ${styles[tagClass]}`}>
            {STATUS_LABELS[entry.status]}
          </span>
        </div>
        
        <p>{entry.description}</p>

        {entry.highlights && entry.highlights.length > 0 && (
          <div className={styles.highlightsSection}>
            <button 
              className={styles.detailsToggle}
              onClick={() => setShowDetails(!showDetails)}
              aria-expanded={showDetails}
              aria-controls={`highlights-${entry.id}`}
            >
              <span>Detalles destacados</span>
              <ChevronDown 
                size={16} 
                style={{ 
                  transform: showDetails ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              />
            </button>
            
            {showDetails && (
              <ul id={`highlights-${entry.id}`} className={styles.highlightsList}>
                {entry.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

TimelineItem.propTypes = {
  entry: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["en-progreso", "completado", "planificado"]).isRequired,
    icon: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  relativeTime: PropTypes.string.isRequired,
};