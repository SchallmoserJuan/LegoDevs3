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
import banner from "../../img/banner.png"

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Botón hamburguesa para celular */}
      <button
        className={styles.mobileMenuToggle}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay para cerrar en celular */}
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
      >
        {/* Profile Section */}
        <section className={styles.profileSection}>
          <header className={styles.header}>
            <img
              src={banner}
              alt="Banner del equipo"
              loading="lazy"
            />
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

        {/* Navigation Section */}
        <nav className={styles.navSection} aria-label="Navegación principal">
          <ul className={styles.menu}>
            {/* Navegación principal */}
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}

            {/* Menú de equipo con submenú */}
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
                  // Solo cerramos el menú móvil, mantenemos el submenú abierto
                  setMobileMenuOpen(false);
                }}
              />
            </li>

            {/* Divisor */}
            <hr className={styles.divider} />

            {/* Navegación secundaria */}
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

        {/* GitHub Link */}
        <div className={styles.githubProjectLink}>
          <a
            href="https://github.com/SchallmoserJuan/LegoDevs2"
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
