import React from "react";
import PropTypes from "prop-types";
import { PieChart } from "lucide-react";
import StatsChart from "../../components/StatsChart/StatsChart";
import styles from "./ProfilePage.module.css";


export const StatsSection = ({ stats }) => {
  return (
    <div className={`${styles.card} ${styles.statsSection}`}>
      <h3>
        <PieChart size={24} />
        Progreso General
      </h3>
      <div className={styles.chartContainer}>
        <StatsChart percentage={stats.completedTasks} />
        <p>{stats.completedTasks}% de tareas completadas</p>
      </div>
    </div>
  );
};

StatsSection.propTypes = {
  stats: PropTypes.shape({
    completedTasks: PropTypes.number.isRequired,
  }).isRequired,
};
