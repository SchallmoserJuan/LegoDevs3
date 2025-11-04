// src/assets/data/bitacoraData.js

export const bitacoraData = [
  {
    id: 1,
    title: "Migración a React (TP2)",
    date: "2025-10-08",
    description:
      "Inicio de la migración del proyecto estático a una Single Page Application (SPA) con React. Se configura el entorno con Vite, se estructura el proyecto en componentes y se implementa React Router para la navegación.",
    status: "en-progreso",
    icon: "rocket",
    highlights: [
      "Configuración de Vite",
      "Componentes reutilizables",
      "React Router implementado",
      "CSS Modules configurados"
    ]
  },
  {
    id: 2,
    title: "Diseño de Perfiles Individuales",
    date: "2025-10-01",
    description:
      "Finalización del diseño y maquetación de las páginas de perfil para cada integrante del equipo, incluyendo funcionalidades interactivas personalizadas.",
    status: "completado",
    icon: "palette",
    highlights: [
      "Perfiles personalizados",
      "Gráficos de estadísticas",
      "Sección de habilidades",
      "Enlaces de contacto"
    ]
  },
  {
    id: 3,
    title: "Maquetación Inicial (TP1)",
    date: "2025-09-24",
    description:
      "Creación de la estructura base del sitio con HTML5 y CSS3. Se definieron la paleta de colores, tipografías y el layout general con la barra lateral.",
    status: "completado",
    icon: "settings",
    highlights: [
      "Estructura HTML semántica",
      "Paleta de colores definida",
      "Tipografía seleccionada",
      "Layout responsive"
    ]
  },
  {
    id: 4,
    title: "Definición del Proyecto",
    date: "2025-09-17",
    description:
      "Brainstorming inicial, definición de los objetivos del portfolio y asignación de roles dentro del equipo. Se eligió la temática y el stack tecnológico inicial.",
    status: "completado",
    icon: "lightbulb",
    highlights: [
      "Objetivos definidos",
      "Roles asignados",
      "Stack tecnológico elegido",
      "Temática establecida"
    ]
  },
];

// Función helper para calcular tiempo relativo
export const getRelativeTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffDays === 0) return "Hoy";
  if (diffDays === 1) return "Ayer";
  if (diffDays < 7) return `Hace ${diffDays} días`;
  if (diffWeeks === 1) return "Hace 1 semana";
  if (diffWeeks < 4) return `Hace ${diffWeeks} semanas`;
  if (diffMonths === 1) return "Hace 1 mes";
  return `Hace ${diffMonths} meses`;
};