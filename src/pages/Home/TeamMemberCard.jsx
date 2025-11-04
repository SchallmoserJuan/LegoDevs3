import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Home.module.css";

export const TeamMemberCard = ({ member }) => {
  const { id, name, role, avatar, status } = member;

  return (
    <Link 
      to={`/profile/${id}`} 
      className={styles.memberLink}
      aria-label={`Ver perfil de ${name}, ${role}`}
    >
      <article className={styles.member}>
        <div className={styles.avatarWrapper}>
          <img
            src={avatar}
            alt={`Foto de perfil de ${name}`}
            loading="lazy"
          />
          {status && <span className={styles.status}>{status}</span>}
        </div>
        <h3>{name}</h3>
        <p className={styles.role}>{role}</p>
      </article>
    </Link>
  );
};

TeamMemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    status: PropTypes.string,
  }).isRequired,
};
