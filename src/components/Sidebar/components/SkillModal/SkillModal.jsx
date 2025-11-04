// src/components/SkillModal/SkillModal.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './SkillModal.css'; // Importa los estilos de Modal


// DATOS TEMÁTICOS DE LEGO
const SKILL_THEMES = {
  'React': {
    metaphor: "Ladrillo Modular Básico (2x4)",
    description: "React es el componente fundamental, altamente reutilizable y la base de cada parte de la interfaz de usuario, ¡la pieza de ensamblaje más importante de todo el proyecto!"
  },
  'Node.js': {
    metaphor: "Motor LEGO Technic (Power Functions)",
    description: "Node.js es el potente motor que impulsa la funcionalidad del backend. Permite que toda la maquinaria (el servidor) corra de forma eficiente y rápida."
  },
  'Python': {
    metaphor: "Conjunto de Herramientas Avanzadas",
    description: "Python es una caja de herramientas versátil, ideal para scripts complejos y gestión de datos. El lenguaje que permite construir la lógica más difícil con menos código."
  },
  'Django': {
    metaphor: "Plano Estructural Completo (Architecture)",
    description: "Django proporciona la estructura MVC (Modelo-Vista-Controlador) lista para usar, funcionando como un plano de ingeniería que asegura que el proyecto se construya de forma lógica y organizada."
  },
  'AWS': {
    metaphor: "La Mesa de Construcción Global",
    description: "AWS es la infraestructura a gran escala donde se monta todo. Asegura que el proyecto sea robusto y accesible para todos, sin importar dónde se encuentren."
  },
  'CI/CD': {
    metaphor: "Línea de Ensamblaje Automatizada",
    description: "CI/CD es el proceso que automatiza la construcción, prueba y despliegue del software, garantizando que el producto final esté siempre listo y sin errores."
  },
  'Git': {
    metaphor: "La Biblioteca de Versiones del Ladrillo",
    description: "Git es el sistema de control de versiones. Nos permite guardar y rastrear cada versión del proyecto (cada ladrillo), asegurando que siempre podemos volver a un estado anterior."
   },
  'HTML5': {
    metaphor: "La Placa Base (Baseplate)",
    description: "HTML5 es la base estructural inamovible de cualquier construcción digital, definiendo el esqueleto de todo lo que se construye encima."
  },
  'CSS3': {
    metaphor: "Colección de Ladrillos de Color y Textura",
    description: "CSS3 es el conjunto de estilos, colores y formas que da vida a la estructura HTML, asegurando que la construcción sea atractiva y visualmente funcional."
  },
  'JavaScript': {
    metaphor: "El Engranaje y la Cadena",
    description: "JavaScript es el lenguaje que introduce movimiento e interactividad a la estructura estática, haciendo que los elementos respondan y se muevan dinámicamente."
  },
  'Vite': {
    metaphor: "Máquina de Ensamblaje Rápido",
    description: "Vite es la herramienta que acelera el proceso de construcción. Reduce drásticamente los tiempos de espera en el desarrollo para ver los cambios en tiempo real."
  },
  'Express': {
    metaphor: "El Centro de Distribución y Rutas",
    description: "Express es el marco ligero y flexible que gestiona todas las solicitudes y respuestas entre el servidor y el cliente. Define cómo se entregan los datos."
  },

  // === NUEVAS HABILIDADES - BASES DE DATOS Y DEVOPS ===
  'MongoDB': {
    metaphor: "El Almacén Desestructurado de Piezas",
    description: "MongoDB es un almacén flexible (NoSQL) donde las piezas (datos) se guardan en cajas individuales (documentos) sin un plano rígido, ideal para la rápida iteración."
  },
  'SQL': {
    metaphor: "El Índice de Catálogo y Organización",
    description: "SQL es el lenguaje estructurado para gestionar datos. Actúa como el sistema de catalogación que asegura que cada pieza esté perfectamente indexada para ser encontrada con precisión."
  },
  'Docker': {
    metaphor: "Contenedor de Transporte (Container)",
    description: "Docker encapsula la construcción en una caja estandarizada, asegurando que se construya, pruebe y se ejecute exactamente de la misma manera en cualquier lugar."
  },
  'GraphQL': {
    metaphor: "El Despachador de Pedidos a Medida",
    description: "GraphQL es un sistema de consulta que permite al cliente pedir solo las piezas exactas que necesita, evitando el envío de cajas innecesarias y optimizando la comunicación."
  },

  // === NUEVAS HABILIDADES - METODOLOGÍAS Y GESTIÓN ===
  'Scrum': {
    metaphor: "Reunión de Planificación y Revisión de Módulos",
    description: "Scrum es un marco de trabajo ágil que organiza la construcción en ciclos cortos e iterativos (Sprints), asegurando revisiones constantes y adaptación."
  },
  'Agile': {
    metaphor: "Manifiesto de Adaptación (Principio LEGO)",
    description: "Agile es la mentalidad que prioriza la entrega continua y la respuesta al cambio sobre seguir un plan estricto. Construir piezas valiosas de forma constante."
  },
  'Trello': {
    metaphor: "El Tablero de Progreso del Taller",
    description: "Trello es la herramienta visual que organiza todas las tareas como tarjetas en tableros, mostrando el progreso de cada pieza desde la idea hasta la implementación."
  },
  'Jira': {
    metaphor: "Sistema de Seguimiento de Errores y Piezas Faltantes",
    description: "JIRA es la herramienta avanzada de gestión de proyectos que rastrea cada tarea, error (bug) y requerimiento, garantizando que nada se pierda en la construcción."
  },

  // === NUEVAS HABILIDADES - DISEÑO/UX/UI ===
  'Figma': {
    metaphor: "El Estudio de Diseño Digital",
    description: "Figma es la herramienta central donde se diseñan todos los planos y la apariencia final de la construcción, desde los colores hasta la disposición de cada elemento."
  },
  'Adobe XD': {
    metaphor: "Prototipado del Producto Final",
    description: "Adobe XD se utiliza para crear prototipos funcionales, permitiendo simular cómo se sentirán y funcionarán las piezas antes de la construcción real."
  },
  'User Research': {
    metaphor: "Pruebas de Juego con Niños",
    description: "User Research es el proceso de entender al usuario final y sus necesidades, asegurando que el producto sea relevante y útil para quien realmente va a 'jugar' con él."
  },
  'Prototyping': {
    metaphor: "Modelo a Escala (Maqueta)",
    description: "Prototipado es la creación rápida de modelos funcionales para validar ideas y conceptos con un mínimo esfuerzo antes de comprometerse con la construcción final."
  },
  'Wireframing': {
    metaphor: "El Esqueleto del Plano (Dibujo a Lápiz)",
    description: "Wireframing es la etapa inicial donde se dibuja la estructura básica y el flujo de la aplicación, sin preocuparse por el color o el diseño final."
  },

  // === NUEVAS HABILIDADES - HABILIDADES BLANDAS ===
  'Comunicación': {
    metaphor: "Las Instrucciones Claras y Concisas",
    description: "La comunicación es la habilidad de transmitir planes e ideas de forma efectiva, asegurando que todo el equipo (y el cliente) sepa exactamente qué pieza se está construyendo."
  },
  'Liderazgo': {
    metaphor: "El Arquitecto Principal del Proyecto",
    description: "Liderazgo es la habilidad de guiar al equipo a través del plano, inspirando la mejor construcción posible y asegurando que se mantengan los estándares de calidad."
  },
};


const SkillModal = ({ skill, onClose }) => {
    
    // LÓGICA DE DATOS CORRECTA
    const themeData = SKILL_THEMES[skill] || {
        metaphor: "Pieza sin etiquetar",
        description: `Detalles de ${skill} próximamente...`
    };

    return (
        // ESTRUCTURA DE MODAL (con fondo oscuro)
        <div className="modal-overlay"> 
            <div className="modal-content">
                {/* Botón de cierre */}
                <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>

                <h2>{skill}</h2>
                
                {/* Contenido sin imagen */}
                <div className="modal-details">
                    <p className="modal-metaphor">
                        Metáfora LEGO: {themeData.metaphor}
                    </p>
                    <p className="modal-description">{themeData.description}</p>
                </div>
                
                <button className="modal-action-btn" onClick={onClose}>
                    Salir
                </button>
            </div>
        </div>
    );
};

SkillModal.propTypes = {
  skill: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default SkillModal;