import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const StatsChart = ({ percentage }) => {
  return (
    <div style={{ width: "150px", height: "150px" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={10}
        styles={buildStyles({
          // Colores
          pathColor: `rgba(59, 130, 246, ${percentage / 100})`,
          textColor: "#1f2937",
          trailColor: "#e5e7eb",
          backgroundColor: "#3e98c7",
          // Animación
          pathTransitionDuration: 0.8,
        })}
      />
    </div>
  );
};

export default StatsChart;
