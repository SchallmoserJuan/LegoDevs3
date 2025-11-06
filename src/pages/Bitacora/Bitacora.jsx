import React, { useMemo, useState } from "react";
import { bitacoraData } from "../../assets/data/bitacoraData";
import { BitacoraHeader } from "./BitacoraHeader";
import { Timeline } from "./Timeline";
import styles from "./Bitacora.module.css";


const Bitacora = () => {
  const [filter, setFilter] = useState("all");


  const stats = useMemo(() => {
    const total = bitacoraData.length;
    const completed = bitacoraData.filter(
      (entry) => entry.status === "completado"
    ).length;
    const inProgress = bitacoraData.filter(
      (entry) => entry.status === "en-progreso"
    ).length;


    return { total, completed, inProgress };
  }, []);


  const filteredEntries = useMemo(() => {
    if (filter === "all") {
      return bitacoraData;
    }
    return bitacoraData.filter((entry) => entry.status === filter);
  }, [filter]);


  return (
    <div className={styles.bitacoraContainer}>
      <BitacoraHeader
        title="Bitácora del Proyecto"
        subtitle="Seguimiento del desarrollo, decisiones tomadas y próximos pasos."
        stats={stats}
      />


      <div className={styles.filterContainer}>
        <button
          className={`${styles.filterButton} ${
            filter === "all" ? styles.activeFilter : ""
          }`}
          onClick={() => setFilter("all")}
        >
          Todos ({stats.total})
        </button>
        <button
          className={`${styles.filterButton} ${
            filter === "completado" ? styles.activeFilter : ""
          }`}
          onClick={() => setFilter("completado")}
        >
          Completados ({stats.completed})
        </button>
        <button
          className={`${styles.filterButton} ${
            filter === "en-progreso" ? styles.activeFilter : ""
          }`}
          onClick={() => setFilter("en-progreso")}
        >
          En Progreso ({stats.inProgress})
        </button>
      </div>


      <Timeline entries={filteredEntries} />
    </div>
  );
};


export default Bitacora;
