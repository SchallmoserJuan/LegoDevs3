import React from "react";
import PropTypes from "prop-types";
import { BookOpen } from "lucide-react";
import styles from "./Bitacora.module.css";

export const BitacoraHeader = ({ title, subtitle, stats }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerIcon}>
        <BookOpen size={48} />
      </div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      
      {stats && (
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{stats.total}</span>
            <span className={styles.statLabel}>Hitos</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{stats.completed}</span>
            <span className={styles.statLabel}>Completados</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{stats.inProgress}</span>
            <span className={styles.statLabel}>En progreso</span>
          </div>
        </div>
      )}
    </header>
  );
};

BitacoraHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    total: PropTypes.number,
    completed: PropTypes.number,
    inProgress: PropTypes.number,
  }),
};