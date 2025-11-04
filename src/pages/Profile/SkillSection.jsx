import React from "react";
import PropTypes from "prop-types";
import { Settings } from "lucide-react";
import styles from "./ProfilePage.module.css";


export const SkillsSection = ({ skills }) => {
  return (
    <div className={`${styles.card} ${styles.skillsSection}`}>
      <h3>
        <Settings size={24} />
        Habilidades
      </h3>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillTag}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

SkillsSection.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};