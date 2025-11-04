import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.containerRight}>
        <div className={styles.themeToggleContainer} aria-hidden="false">
          <ThemeToggle />
        </div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
