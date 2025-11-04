import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
      title={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
    >
      {theme === "dark" ? (
        <>
          <Sun size={20} aria-hidden="true" />
          <span className={styles.srOnly}>Cambiar a tema claro</span>
        </>
      ) : (
        <>
          <Moon size={20} aria-hidden="true" />
          <span className={styles.srOnly}>Cambiar a tema oscuro</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
