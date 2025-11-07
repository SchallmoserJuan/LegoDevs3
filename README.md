# LegoDevs3 — Proyecto Frontend (Grupo 5)

Aplicación frontend creada como trabajo práctico académico para la materia de Frontend | IFTS 29.

## Descripción

LegoDevs3 es una SPA (Single Page Application) creada con React y Vite que contiene una barra lateral (sidebar) con navegación principal y secundaria, un submenú de "Equipo" que lista perfiles, páginas de demo para consumir datos JSON y API, una página de bitácora y secciones de perfil/estadísticas.

## Tecnologías

- React 18
- Vite
- CSS Modules
- Lucide (iconos) / react-icons (según reemplazo)
- React Router

## Estructura principal del proyecto

Raíz relevante:

- `index.html` — punto de entrada HTML (favicon se referencia aquí)
- `src/main.jsx` — mount React
- `src/App.jsx` — componente principal / rutas
- `src/components/Sidebar/` — sidebar, subcomponentes y estilos
- `src/components/Layout/` — Layout, estilos y el fondo con `background-image`
- `src/pages/` — páginas de la app (Home, Bitácora, JsonDataPage, ApiDataPage, Profile, DiagramsPage)
- `public/` — archivos estáticos (favicon y assets públicos)
- `src/assets/data/` — datos estáticos JSON (productos, equipo, bitácora)

## Instalación (local)

Requisitos: Node.js 18+ (recomendado) y npm o pnpm.

1. Clona el repositorio

```bash
git clone https://github.com/SchallmoserJuan/LegoDevs2.git
cd LegoDevs3
```

2. Instala dependencias

```bash
npm install
```

3. Ejecuta en modo desarrollo

```bash
npm run dev
```

4. Construir para producción

```bash
npm run build
```

## Contribuir

- Crea un fork y abre un Pull Request.
- Mantén el mismo estilo de indentación y convenciones del repo (CSS Modules, JSX).

## Licencia y atribuciones

Proyecto creado como entrega académica. Consulta al equipo para derechos de autor o distribución.

---
