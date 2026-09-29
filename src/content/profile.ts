export const profile = {
  fullName: "Agostino Scopetta",
  initials: "AS",
  role: "Desarrollador Full Stack",
  tagline:
    "Construyo productos web de punta a punta: desde la base de datos hasta la última interacción de la interfaz, con foco en que funcionen en producción.",
  email: "scopettaagostino@gmail.com",
  githubUrl: "https://github.com/Scopee1",
  githubHandle: "Scopee1",
  linkedinUrl: "",
  linkedinHandle: "Agostino Scopetta",
  repositoryUrl: "https://github.com/Scopee1/portfolio",
};

export const biography = [
  "Soy desarrollador full stack y estudiante en la UAI. Me gusta llevar una idea desde el modelo de datos hasta un producto que usa gente real, y ocuparme también de lo que no se ve: seguridad, despliegue y monitoreo.",
  "Hoy desarrollo Mentora, una plataforma para consultorios de psiquiatría que está en producción, y sigo sumando proyectos de la facultad donde practico fundamentos de HTML, CSS y JavaScript.",
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit / RTK Query",
      "Tailwind CSS",
      "HTML y CSS semántico",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Prisma", "PostgreSQL", "APIs REST", "Autenticación con JWT"],
  },
  {
    title: "Herramientas",
    skills: ["Git y GitHub", "Docker", "Vitest", "Storybook", "Sentry", "Linux / VPS"],
  },
];

export type ProjectLink = {
  label: string;
  href: string;
};

export type SubwayLine = "A" | "B" | "C" | "D";

export type Project = {
  slug: string;
  line: SubwayLine;
  title: string;
  kind: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "mentora",
    line: "A",
    title: "Mentora",
    kind: "Producto en producción",
    description:
      "Plataforma para consultorios de psiquiatría: agenda y turnos online con seña, gestión de pacientes y admisiones, recetas, reportes y suscripciones cobradas con Mercado Pago. Desplegada con Docker en un VPS propio.",
    technologies: ["Next.js", "React 19", "NestJS", "Prisma", "PostgreSQL", "Docker", "Mercado Pago"],
    links: [{ label: "Ver sitio", href: "https://mentora.com.ar" }],
  },
  {
    slug: "futbolle",
    line: "B",
    title: "Futbolle",
    kind: "Proyecto final · Desarrollo y Arquitecturas Web",
    description:
      "Juego estilo Wordle para adivinar futbolistas en ocho intentos. Compara seis atributos del jugador secreto, tiene tres niveles de dificultad y un sistema de puntaje con bonus por tiempo.",
    technologies: ["HTML", "CSS", "JavaScript", "Fetch API"],
    links: [
      { label: "Jugar", href: "https://scopee1.github.io/Proyecto-Final-DAW/" },
      { label: "Código", href: "https://github.com/Scopee1/Proyecto-Final-DAW" },
    ],
  },
  {
    slug: "portfolio",
    line: "C",
    title: "Este portfolio",
    kind: "Trabajo práctico",
    description:
      "Sitio estático generado con Next.js: HTML semántico, modo claro y oscuro sin parpadeo, formulario de contacto con validación accesible y animaciones que respetan prefers-reduced-motion.",
    technologies: ["Next.js", "TypeScript", "CSS", "Render"],
    links: [{ label: "Código", href: "https://github.com/Scopee1/portfolio" }],
  },
  {
    slug: "practicas-daw",
    line: "D",
    title: "Prácticas de DAW",
    kind: "Ejercicios de cursada",
    description:
      "Ejercicios de la materia Desarrollo y Arquitecturas Web: maquetación con Flexbox, manipulación del DOM con JavaScript y validación de formularios del lado del cliente.",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Código", href: "https://github.com/Scopee1/DAW" }],
  },
];

export const navigationLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];
