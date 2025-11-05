import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  CheckSquare,
  BookOpen,
  Github,
  ArrowRight,
  Package,
  Sparkles,
  GitBranch,
  Cloud,
  Database,
} from "lucide-react";
import { teamData } from "../../assets/data/teamData";
import { TeamModal } from "./TeamModal";
import styles from "./Home.module.css";

const Home = () => {
  // Calcular estadísticas del equipo
  const [isTeamModalOpen, setTeamModalOpen] = useState(false);
  const totalTasks = teamData.reduce(
    (sum, member) => sum + member.stats.completedTasks,
    0
  );
  const teamSize = teamData.length;
  const teamPreview = teamData.slice(0, 5); // Tomamos los primeros 5 para la vista previa

  return (
    <main className={styles.homeContainer}>
      <div className={styles.bentoGrid}>
        {/* --- Tarjeta de Bienvenida (Grande) --- */}
        <div className={`${styles.bentoItem} ${styles.welcomeCard}`}>
          <h1>Construyendo Bloque a Bloque</h1>
          <p>
            Bienvenidos al portfolio de LegoDevs. Acá documentamos nuestro
            proceso creativo y los proyectos que hemos ensamblado con código y
            pasión.
          </p>
        </div>

        {/* --- Tarjeta de Miembros --- */}
        <div className={`${styles.bentoItem} ${styles.statCard}`}>
          <Users size={28} className={styles.bentoIcon} />
          <span className={styles.bentoNumber}>{teamSize}</span>
          <span className={styles.bentoLabel}>Miembros</span>
        </div>

        {/* --- Tarjeta de Tareas --- */}
        <div className={`${styles.bentoItem} ${styles.statCard}`}>
          <CheckSquare size={28} className={styles.bentoIcon} />
          <span className={styles.bentoNumber}>+{totalTasks}</span>
          <span className={styles.bentoLabel}>Tareas Completadas</span>
        </div>

        {/* --- Tarjeta de Proyectos (Nueva) --- */}
        <div
          className={`${styles.bentoItem} ${styles.statCard} ${styles.green}`}
        >
          <Package size={28} className={styles.bentoIcon} />
          <span className={styles.bentoNumber}>12</span>
          <span className={styles.bentoLabel}>Proyectos</span>
        </div>

        {/* --- Tarjeta de Diagramas (Nueva) --- */}
        <Link
          to="/diagrams"
          className={`${styles.bentoItem} ${styles.diagramsCard}`}
        >
          <GitBranch size={28} className={styles.bentoIcon} />
          <h4>Diagramas</h4>
          <p>Visualiza la estructura y flujo de nuestro proyecto.</p>
        </Link>

        {/* --- Tarjeta de Bitácora --- */}
        <Link
          to="/bitacora"
          className={`${styles.bentoItem} ${styles.ctaCard}`}
        >
          <BookOpen size={28} className={styles.bentoIcon} />
          <h3>Nuestra Bitácora</h3>
          <p>Sigue el progreso y los hitos de nuestro proyecto.</p>
          <span className={styles.ctaLink}>
            Ver más <ArrowRight size={16} />
          </span>
        </Link>

        {/* --- Tarjeta para abrir el modal del equipo --- */}
        <div
          className={`${styles.bentoItem} ${styles.teamPreviewCard}`}
          onClick={() => setTeamModalOpen(true)}
        >
          <div className={styles.avatarGroup}>
            {teamPreview.map((member) => (
              <img
                key={member.id}
                src={member.avatar}
                alt={member.name}
                className={styles.avatar}
                title={member.name}
              />
            ))}
          </div>
          <h3>Los Arquitectos</h3>
          <p>Un equipo diverso listo para construir grandes soluciones.</p>
          <span className={styles.ctaLink}>
            Conoce al equipo
            <ArrowRight size={16} />
          </span>
        </div>

        {/* --- Tarjeta de GitHub --- */}
        <a
          href="https://github.com/SchallmoserJuan/LegoDevs3"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.bentoItem} ${styles.githubCard}`}
        >
          <Github size={40} />
          <h4>Ver el Código Fuente</h4>
          <p>Explora el repositorio del proyecto en GitHub.</p>
        </a>

        {/* --- Tarjeta de API Data (Nueva) --- */}
        <Link
          to="/api-data"
          className={`${styles.bentoItem} ${styles.apiDataCard}`}
        >
          <Cloud size={40} />
          <div className={styles.apiTextContainer}>
            <h4>Datos desde API</h4>
            <p>Catálogo de productos consumidos desde una API externa.</p>
          </div>
        </Link>

        {/* --- Tarjeta de JSON Data (Nueva) --- */}
        <Link
          to="/json-data"
          className={`${styles.bentoItem} ${styles.jsonDataCard}`}
        >
          <Database size={28} className={styles.bentoIcon} />
          <div className={styles.jsonTextContainer}>
            <h4>Datos Locales</h4>
            <p>Productos desde JSON.</p>
          </div>
        </Link>
      </div>

      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => setTeamModalOpen(false)}
        members={teamData}
      />
    </main>
  );
};

export default Home;
