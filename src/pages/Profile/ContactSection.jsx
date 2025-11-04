import React from "react";
import PropTypes from "prop-types";
import { Book, Github, Linkedin } from "lucide-react";
import styles from "./ProfilePage.module.css";


const CONTACT_ICONS = {
  github: Github,
  linkedin: Linkedin,
};

export const ContactSection = ({ contact }) => {
  const contactEntries = Object.entries(contact);

  return (
    <div className={`${styles.card} ${styles.contactSection}`}>
      <h3>
        <Book size={24} />
        Contacto
      </h3>
      <div className={styles.contactLinks}>
        {contactEntries.map(([platform, url]) => {
          const Icon = CONTACT_ICONS[platform.toLowerCase()];
          
          if (!Icon) return null;

          return (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
              aria-label={`${platform} de ${contact.name || 'miembro'}`}
            >
              <Icon size={24} />
              <span>{platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

ContactSection.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};