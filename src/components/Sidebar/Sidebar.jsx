// Sidebar.jsx
import { useState } from "react";
import {
  Home,
  BookOpen,
  Users,
  Database,
  Cloud,
  GitBranch,
  Github,
  Menu,
  X,
} from "lucide-react";
import { teamData } from "../../assets/data/teamData";
import { NavItem } from "./components/NavItem";
import { TeamSubmenu } from "./components/TeamSubmenu";
import styles from "./Sidebar.module.css";
import banner from "../../img/banner.png";
import { useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/bitacora", icon: BookOpen, label: "Bitácora" },
];

const SECONDARY_NAV_ITEMS = [
  { to: "/json-data", icon: Database, label: "Datos (JSON)" },
  { to: "/api-data", icon: Cloud, label: "Datos (API)" },
  { to: "/diagrams", icon: GitBranch, label: "Diagramas" },
];

const Sidebar = () => {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const routeColors = {
    "/": "#3b82f6",
    "/bitacora": "#ef4444",
    "/profile": "#f59e0b",
    "/json-data": "#22c55e",
    "/api-data": "#8b5cf6",
    "/diagrams": "#f97316",
  };

  const getCurrentColor = () => {
    const path = location.pathname;
    if (path.startsWith("/profile")) return routeColors["/profile"];
    return routeColors[path] || routeColors["/"];
  };

  const activeColor = getCurrentColor();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <button
        className={styles.mobileMenuToggle}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMobileMenuOpen && (
        <div
          className={styles.overlay}
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}

      <aside
        className={`${styles.containerLeft} ${
          isMobileMenuOpen ? styles.mobileOpen : ""
        }`}
        style={{ "--active-color": activeColor }}
      >
        <section className={styles.profileSection}>
          <header className={styles.header}>
            <img src={banner} alt="Banner del equipo" loading="lazy" />
          </header>
          <img
            className={styles.profilePic}
            src="https://i.pinimg.com/736x/7d/5a/4b/7d5a4b4671b048b0aa1d8bf1b1c32da3.jpg"
            alt="Logo del Grupo 5"
            loading="lazy"
          />
          <h1>Grupo 5</h1>
          <h2>Proyecto Frontend</h2>
        </section>

        <nav className={styles.navSection} aria-label="Navegación principal">
          <ul className={styles.menu}>
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}

            <li className={styles.menuItem}>
              <button
                className={styles.menuButton}
                onClick={() => setSubmenuOpen(!isSubmenuOpen)}
                aria-expanded={isSubmenuOpen}
                aria-controls="team-submenu"
              >
                <Users size={20} />
                <span>Equipo</span>
              </button>
              <TeamSubmenu
                isOpen={isSubmenuOpen}
                members={teamData}
                onItemClick={() => {
                  setMobileMenuOpen(false);
                }}
              />
            </li>

            <hr className={styles.divider} />

            {SECONDARY_NAV_ITEMS.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}
          </ul>
        </nav>

        <div className={styles.githubProjectLink}>
          <a
            href="https://github.com/SchallmoserJuan/LegoDevs3"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubBtn}
            aria-label="Ver proyecto en GitHub"
          >
            <Github size={20} />
            <span>Ver en GitHub</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
