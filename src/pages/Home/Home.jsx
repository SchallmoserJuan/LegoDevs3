import React from "react";
import { Link } from "react-router-dom";
import { teamData } from "../../assets/data/teamData";
import { TeamMemberCard } from "./TeamMemberCard";
import styles from "./Home.module.css";

const Home = () => {
  // Calcular estadísticas del equipo
  const totalTasks = teamData.reduce((sum, member) => sum + member.stats.completedTasks, 0);
  const teamSize = teamData.length;

  return (
    <main>
      {/* Hero Section con estadísticas */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroContent}>
          <h1 id="hero-title">Bienvenidos a nuestro Portfolio</h1>
          <p className={styles.heroText}>
            Somos un equipo de {teamSize} desarrolladores apasionados por crear y aprender
            juntos. Hemos completado más de {totalTasks} tareas exitosamente.
          </p>
        </div>
      </section>

      {/* Sección del equipo */}
      <section 
        id="equipo" 
        className={styles.teamPreview}
        aria-labelledby="team-title"
      >
        <h2 id="team-title">Conoce a nuestro equipo</h2>
        <p className={styles.sectionDescription}>
          Cada miembro aporta habilidades únicas que nos permiten entregar proyectos de calidad
        </p>
        <div className={styles.teamMembers}>
          {teamData.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;