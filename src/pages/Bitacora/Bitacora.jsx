import React, { useMemo } from "react";
import { bitacoraData } from "../../assets/data/bitacoraData";
import { BitacoraHeader } from "./BitacoraHeader";
import { Timeline } from "./Timeline";
import styles from "./Bitacora.module.css";

const Bitacora = () => {
  const stats = useMemo(() => {
    const total = bitacoraData.length;
    const completed = bitacoraData.filter(entry => entry.status === "completado").length;
    const inProgress = bitacoraData.filter(entry => entry.status === "en-progreso").length;
    
    return { total, completed, inProgress };
  }, []);

  return (
    <div className={styles.bitacoraContainer}>
      <BitacoraHeader 
        title="Bitácora del Proyecto"
        subtitle="Seguimiento del desarrollo, decisiones tomadas y próximos pasos."
        stats={stats}
      />
      
      <Timeline entries={bitacoraData} />
    </div>
  );
};

export default Bitacora;