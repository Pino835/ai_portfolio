# CLAUDE.md

Guía de contexto para trabajar en este repositorio con Claude Code.

## Qué es este proyecto

Portafolio personal de **Juan Diego Pino**, enfocado en servicios de **automatización y generación de contenido con IA para pymes**. Es una landing page de una sola página (SPA de una sola vista, sin rutas) construida con **React 19 + Vite 7**.

Secciones de la página (en orden, todas dentro de `App.jsx`):
1. **Navbar** — navegación con anclas (`#inicio`, `#servicios`, `#proyectos`, `#contacto`) y menú hamburguesa responsive.
2. **Hero** — título y descripción de presentación.
3. **Servicios** — 4 tarjetas de servicios ofrecidos (contenido audiovisual, sitios web, chatbots/agentes GPT, automatizaciones a medida).
4. **Proyectos** — galería de portafolio dividida en secciones (imágenes, videos, audios, chatbots, otras herramientas), leídas desde `src/data/proyectos.json`, con modal para ver imágenes/videos en grande.
5. **Carrusel** — cinta animada infinita con logos de herramientas usadas (ChatGPT, Claude, Gemini, Midjourney, Canva, Make, Perplexity), logos cargados desde jsdelivr/simple-icons.
6. **Contacto** — formulario que envía los datos a un **webhook de Make.com** vía `fetch` POST con `Content-Type: application/json` (nota: no usar `mode: 'no-cors'`, rompe el envío de JSON estructurado a Make).
7. **Footer**.

## Estructura del repositorio

```
ai_portfolio/                  (raíz del repo git)
├── .github/workflows/deploy.yml   → CI/CD a GitHub Pages
└── ia_portfolio/                  (raíz real del proyecto React/Vite)
    ├── src/
    │   ├── App.jsx                 → composición de secciones
    │   ├── main.jsx                → entry point
    │   ├── index.css               → estilos globales
    │   ├── components/
    │   │   ├── Navbar/
    │   │   ├── Hero/
    │   │   ├── Servicios/
    │   │   ├── Proyectos/
    │   │   ├── Carrusel/
    │   │   ├── Contacto/
    │   │   └── Footer/
    │   │       (cada uno con su .jsx y su .module.css — CSS Modules)
    │   ├── data/proyectos.json     → contenido de la galería de proyectos
    │   └── assets/
    │       ├── images/ (imagen1..imagen45)
    │       ├── videos/ (video1..video14)
    │       ├── audios/ (audio1..audio8)
    │       ├── chatbots/, tools/   → imágenes de otras categorías
    │       └── sueltos: hero.png, contacto.png, proyectos.png, servicios.png, servicio1-4.jpeg
    ├── public/
    ├── index.html
    ├── vite.config.js              → base: '/ai_portfolio/' (para GitHub Pages)
    ├── eslint.config.js
    ├── package.json
    └── .env                        → VITE_MAKE_WEBHOOK (no versionado)
```

**Importante:** el proyecto de Vite/React NO está en la raíz del repo, sino en `ia_portfolio/`. Todos los comandos npm deben ejecutarse desde esa subcarpeta.

## Stack técnico

- **React** 19.2 + **React DOM** 19.2
- **Vite** 7.2 como bundler/dev server, con `@vitejs/plugin-react`
- **CSS Modules** (`*.module.css`) para estilos por componente, sin librería de UI ni Tailwind
- **ESLint** 9 (flat config) con `eslint-plugin-react-hooks` y `eslint-plugin-react-refresh`
- Sin TypeScript, sin router (todo es scroll/anchors en una sola página), sin gestor de estado global (solo `useState`/`useEffect` locales)
- Integración externa: **Make.com** (automatización) recibe el formulario de contacto vía webhook

## Comandos

Ejecutar siempre desde `ia_portfolio/`:

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (Vite)
npm run build     # build de producción a dist/
npm run preview   # preview del build
npm run lint      # eslint
```

## Variables de entorno

- `VITE_MAKE_WEBHOOK` — URL del webhook de Make.com usado por el formulario de contacto (`Contacto.jsx`). Se define en `.env` (no versionado) y en el secret de GitHub Actions `VITE_MAKE_WEBHOOK` para el build de CI.

## Despliegue

- GitHub Pages, vía `.github/workflows/deploy.yml`.
- Se dispara en cada push a `main`.
- Instala dependencias y hace build dentro de `ia_portfolio/`, luego publica `ia_portfolio/dist` con `peaceiris/actions-gh-pages`.
- `vite.config.js` tiene `base: '/ai_portfolio/'` — si se cambia el nombre del repositorio de GitHub, hay que actualizar este valor.

## Convenciones observadas en el código

- Cada componente vive en su propia carpeta bajo `src/components/<Nombre>/` con un `.jsx` y un `.module.css` homónimos.
- Las imágenes/videos/audios de la galería de Proyectos se importan todos explícitamente en `Proyectos.jsx` y se mapean por nombre de archivo (`mediaMap`) contra el campo `media` de `src/data/proyectos.json`. Para añadir un proyecto nuevo a la galería:
  1. Agregar el archivo a `src/assets/images|videos|audios/`.
  2. Importarlo en `Proyectos.jsx` y añadirlo a `mediaMap`.
  3. Agregar la entrada correspondiente (id, titulo, descripcion, media, mediaType) en `src/data/proyectos.json`, dentro de la sección adecuada (`imagenes`, `videos`, `audios`, `chatbots`, `otros`).
- `proyecto.media` también admite URLs absolutas (`http...`) directamente, sin pasar por `mediaMap`.
- Los textos de la UI están en español; mantener ese idioma en nuevo contenido visible al usuario.
- No hay tests configurados en este proyecto.

## Notas para trabajar aquí

- Al ejecutar comandos de terminal (`npm`, `vite`, etc.) recordar que hay que estar posicionado en `ia_portfolio/`, no en la raíz del repo.
- Los assets multimedia son numerosos y pesados (imágenes, videos, audios); tener cuidado al añadir más para no inflar excesivamente el bundle/tiempo de build.
- El formulario de Contacto depende de que `VITE_MAKE_WEBHOOK` esté configurado; si falta, el envío falla silenciosamente con un alert de error de configuración.
