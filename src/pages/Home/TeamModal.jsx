import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import styles from "./TeamModal.module.css";

const LEGO_COLORS = ["blue", "red", "yellow", "green"];

export const TeamModal = ({ isOpen, onClose, members }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={28} />
        </button>
        <div className={styles.modalHeader}>
          <h2>Nuestros Arquitectos</h2>
          <p>Haz clic en un miembro para ver su perfil detallado.</p>
        </div>
        <div className={styles.teamGrid}>
          {members.map((member, index) => (
            <Link
              to={`/profile/${member.id}`}
              key={member.id}
              className={`${styles.memberCard} ${
                styles[LEGO_COLORS[index % LEGO_COLORS.length]]
              }`}
              onClick={onClose}
            >
              <img
                src={member.avatar}
                alt={member.name}
                className={styles.memberAvatar}
              />
              <div className={styles.memberInfo}>
                <span className={styles.memberName}>{member.name}</span>
                <span className={styles.memberRole}>{member.role}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
