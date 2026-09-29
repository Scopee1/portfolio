# Portfolio — Agostino Scopetta

Portfolio personal: presentación, sobre mí, proyectos y contacto.

## Stack

| Capa | Tecnología |
| --- | --- |
| Framework | Next.js 16 (App Router) con exportación estática (`output: "export"`) |
| UI | React 19 + TypeScript |
| Estilos | CSS plano con variables (tokens de color, espaciado y tipografía) |
| Tipografías | Instrument Serif, Geist y Geist Mono vía `next/font` (servidas localmente) |
| Deploy | Render (Static Site, definido en `render.yaml`) |

## Características

- Secciones: Hero, Sobre mí, Proyectos y Contacto, con navbar fija y menú mobile.
- HTML semántico (`header`, `nav`, `main`, `section`, `footer`) y un único `h1`.
- Accesibilidad: link para saltar al contenido, foco visible, navegación completa con teclado, `aria-*` en el menú y el formulario.
- Responsive en 360px, 768px y 1280px, sin scroll horizontal.
- Modo claro y oscuro: respeta la preferencia del sistema y recuerda la elección sin parpadeo al cargar.
- Animaciones sutiles que se desactivan con `prefers-reduced-motion`.
- Formulario de contacto con validación de campos; al enviarlo abre el cliente de correo con el mensaje armado.

## Correr localmente

Requisitos: Node.js 22 o superior.

```bash
npm install
npm run dev
```

Abrir http://localhost:3000.

Para generar el sitio estático (queda en `out/`):

```bash
npm run build
```

## Editar el contenido

Todos los textos (datos personales, biografía, habilidades y proyectos) están en `src/content/profile.ts`.

## Deploy en Render

1. En Render: **New → Blueprint** y elegir este repositorio (usa `render.yaml`).
2. Render ejecuta `npm ci && npm run build` y publica la carpeta `out`.
