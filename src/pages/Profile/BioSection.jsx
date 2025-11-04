import React from "react";
import PropTypes from "prop-types";
import { User } from "lucide-react";
import styles from "./ProfilePage.module.css";


export const BioSection = ({ bio }) => {
  return (
    <section className={`${styles.card} ${styles.bioSection}`}>
      <h3>
        <User size={24} />
        Sobre mí
      </h3>
      <p>{bio}</p>
    </section>
  );
};

BioSection.propTypes = {
  bio: PropTypes.string.isRequired,
};