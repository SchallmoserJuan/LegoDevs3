import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.containerRight}>{children}</main>
    </div>
  );
};

export default Layout;
