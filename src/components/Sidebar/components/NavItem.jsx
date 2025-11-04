// src/components/Sidebar/components/NavItem.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../Sidebar.module.css";

export const NavItem = ({ to, icon: Icon, label, onClick }) => {
  return (
    <li className={styles.menuItem}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? `${styles.menuLink} ${styles.activeLink}` : styles.menuLink
        }
        onClick={onClick}
      >
        {Icon && <Icon size={20} />}
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

NavItem.defaultProps = {
  onClick: () => {},
};