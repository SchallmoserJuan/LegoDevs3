import React from "react";
import PropTypes from "prop-types";
import { TimelineItem } from "./TimelineItem";
import { getRelativeTime } from "../../assets/data/bitacoraData";
import styles from "./Bitacora.module.css";

export const Timeline = ({ entries }) => {
  if (!entries || entries.length === 0) {
    return (
      <div className={styles.timeline}>
        <p style={{ textAlign: 'center', color: '#64748b', padding: '2rem' }}>
          No hay entradas en la bitácora aún.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.timeline}>
      {entries.map((entry) => (
        <TimelineItem 
          key={entry.id} 
          entry={entry} 
          relativeTime={getRelativeTime(entry.date)}
        />
      ))}
    </div>
  );
};

Timeline.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};