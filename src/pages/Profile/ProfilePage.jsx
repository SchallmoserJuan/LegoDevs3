// src/pages/Profile/ProfilePage.jsx
import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { teamData } from "../../assets/data/teamData";
import { ProfileHeader } from "./ProfileHeader";
import { BioSection } from "./BioSection";
import { ProjectsSection } from "./ProjectSection";
import { SkillsSection } from "./SkillSection";
import { StatsSection } from "./StatsSection";
import { ContactSection } from "./ContactSection";
import { ProjectPreview } from "./ProjectPreview"; // Cambiamos Modal por Preview
import styles from "./ProfilePage.module.css";


const ProfilePage = () => {
  const { name } = useParams();
  const [showProjects, setShowProjects] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });


  // Buscar miembro del equipo
  const member = teamData.find((m) => m.id === name);


  // Redirigir si no existe
  if (!member) {
    return <Navigate to="/" replace />;
  }


  const handleProjectHover = (project, e) => {
    setHoveredProject(project);
    setPosition({ x: e.clientX, y: e.clientY });
  };


  const handleProjectLeave = () => {
    setHoveredProject(null);
  };


  return (
    <div className={styles.dashboardContainer}>
      {/* Columna Principal */}
      <main className={styles.mainColumn}>
        <ProfileHeader member={member} />
        <BioSection bio={member.bio} />
        <ProjectsSection
          projects={member.projects}
          showProjects={showProjects}
          onToggle={() => setShowProjects(!showProjects)}
          onProjectHover={handleProjectHover}
          onProjectLeave={handleProjectLeave}
        />
      </main>


      {/* Columna Lateral */}
      <aside className={styles.sidebarColumn}>
        <SkillsSection skills={member.skills} />
        <StatsSection stats={member.stats} />
        <ContactSection contact={member.contact} />
      </aside>


      {/* Renderizar la vista previa si hay un proyecto en hover */}
      <ProjectPreview project={hoveredProject} position={position} />
    </div>
  );
};


export default ProfilePage;