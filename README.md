# LegoDevs3 — Proyecto Frontend (Grupo 5)

<img width="3780" height="1890" alt="ldbanner" src="https://github.com/user-attachments/assets/fe4acd06-2dd2-4c5d-a8ed-39e4839be3b5" />

* Aplicación frontend desarrollada como trabajo práctico para la materia Frontend (IFTS 29). 
* Es una SPA construida con React + Vite que incorpora navegación con Sidebar, temas claro/oscuro, páginas de datos (JSON y API), Bitácora, Perfil con módulos, y una sección de Diagramas.

## Principales mejoras

- Sidebar responsive con menú mobile, overlay y submenú de equipo (TeamSubmenu).
- Sistema de temas claro/oscuro con `ThemeContext`, `useTheme` y `ThemeToggle` (CSS variables en `src/styles/global.css`).
- Filtro de búsqueda para la página de datos desde API (Rebrickable): búsqueda, paginación y animaciones con Framer Motion.
- Filtro de búsqueda para la página de datos desde JSON local con búsqueda y animaciones.
- Página de Bitácora con timeline, filtros por estado y detalles plegables.
- Perfil modular: cabecera, bio, proyectos con “hover preview”, skills con modal temático, stats con gráfico circular, y contacto.
- Nueva diseño de la página de Diagramas: árbol de renderizado, estructura de carpetas (copiable) y stack tecnológico.
- Mejoras de accesibilidad: ARIA labels, roles, foco de teclado en submenú, alt en imágenes, y lectura de estado.
- UX y rendimiento: `ScrollToTop` al cambiar de ruta, lazy-loading de imágenes y transiciones suaves.

## Páginas y rutas

- `/` Home: grid estilo “bento” con accesos a secciones, estadísticas del equipo y modal de miembros.
- `/bitacora` Bitácora: línea de tiempo con filtros “Todos / Completados / En Progreso”.
- `/profile/:name` Perfil: vista detallada por miembro (secciones modulares + preview de proyectos).
- `/json-data` Datos locales: catálogo desde `src/assets/data/products.json` con búsqueda.
- `/api-data` Datos desde API: sets de LEGO Star Wars desde Rebrickable (búsqueda + paginación).
- `/diagrams` Diagramas: árbol de renderizado, estructura (`Estructura.md`) y stack.

## Arquitectura y componentes

- `src/App.jsx`: rutas de la SPA dentro de `ThemeProvider` y `Layout`.
- `src/components/Layout/`: layout con fondo (modo oscuro con overlay) y `ThemeToggle`.
- `src/components/Sidebar/`: navegación primaria/secundaria, TeamSubmenu, color activo por ruta.
- `src/pages/Profile/`: secciones reutilizables (`BioSection`, `ProjectSection`, `SkillSection`, `StatsSection`, `ContactSection`, `ProjectPreview`).
- `src/components/StatsChart/StatsChart.jsx`: gráfico circular con `react-circular-progressbar`.
- `src/components/ScrollToTop/ScrollToTop.jsx`: resetea scroll en navegación.

## Temas (Dark/Light)

- Contexto: `src/contexts/ThemeContext.jsx` define el estado y `toggleTheme`.
- Hook: `src/hooks/useTheme.js` expone el contexto.
- Toggle: `src/components/ThemeToggle/ThemeToggle.jsx` con iconos Sun/Moon.
- Estilos: variables CSS globales (`:root` y `[data-theme="dark"]`) en `src/styles/global.css`.
- Preferencia del SO: inicia según `prefers-color-scheme` y permite alternar.

## Datos y APIs

- JSON local: `src/pages/JsonDataPage/JsonDataPage.jsx` filtra productos por nombre y anima el grid.
- API externa: `src/pages/ApiDataPage/ApiDataPage.jsx` consume Rebrickable (`/lego/sets`) con page size, búsqueda, paginación, estados de carga/error y animaciones.
  - Nota: la API key se usa con fines educativos/demo.

## Accesibilidad y UX

- Roles/ARIA en submenú de equipo, botones, y estados expand/collapse.
- Navegación de teclado en TeamSubmenu; foco gestionado según visibilidad.
- Imágenes con `alt`, `loading="lazy"`, y semántica en encabezados.
- Overlay clickeable y botón de cierre en modales.

## Scripts

- `npm run dev` inicia el entorno de desarrollo (Vite).
- `npm run build` genera la build de producción.
- `npm run preview` sirve la build localmente.

## Instalación

Requisitos: Node.js 18+ y npm o pnpm.

1) Clonar y entrar al proyecto

```bash
git clone https://github.com/SchallmoserJuan/LegoDevs3.git
cd LegoDevs3
```

2) Instalar dependencias

```bash
npm install
```

3) Ejecutar en desarrollo

```bash
npm run dev
```

4) Build de producción

```bash
npm run build
```

## Estructura relevante

- `src/components/Sidebar/` navegación + subcomponentes (NavItem, TeamSubmenu, SkillModal, StatsChart).
- `src/pages/` vistas principales: Home, Bitacora, Profile, JsonDataPage, ApiDataPage, DiagramsPage.
- `src/assets/data/` datos locales: `products.json`, `teamData.js`, `bitacoraData.js`.
- `src/components/Layout/` layout y estilos; `src/styles/global.css` variables de tema.

## Notas

- Los textos y ejemplos (imágenes, avatars, métricas) son demostrativos.

## Contribuir

- Crea un fork y abre un Pull Request.
- Respeta el estilo del repo (React + CSS Modules, componentes modulares, accesibilidad básica).

## Licencia

Proyecto académico. Consultar al equipo sobre usos y distribución.

