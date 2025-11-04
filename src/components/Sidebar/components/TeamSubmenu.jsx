// src/components/Sidebar/components/TeamSubmenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../Sidebar.module.css";

export const TeamSubmenu = ({ isOpen, members, onItemClick }) => {
  return (
    <ul
      id="team-submenu"
      className={`${styles.submenu} ${isOpen ? styles.submenuOpen : ""}`}
      aria-hidden={!isOpen}
      role="menu"
    >
      {members.map((member) => (
        <li key={member.id} role="none">
          <Link 
            to={`/profile/${member.id}`}
            onClick={onItemClick}
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
          >
            {member.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

TeamSubmenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onItemClick: PropTypes.func,
};

TeamSubmenu.defaultProps = {
  onItemClick: () => {},
};