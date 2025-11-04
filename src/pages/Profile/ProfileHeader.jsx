// src/pages/Profile/components/ProfileHeader.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./ProfilePage.module.css";


export const ProfileHeader = ({ member }) => {
  const { avatar, name, role, status } = member;

  return (
    <header className={styles.profileHeader}>
      <img
        src={avatar}
        alt={`Foto de perfil de ${name}`}
        className={styles.avatar}
      />
      <div className={styles.headerText}>
        <h1>{name}</h1>
        <h2>{role}</h2>
        <span className={styles.statusBadge}>{status}</span>
      </div>
    </header>
  );
};

ProfileHeader.propTypes = {
  member: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};