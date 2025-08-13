# Presentación web estática

Este repositorio contiene una página web simple para presentar un proyecto o perfil.

## Estructura

- `index.html`: página principal
- `src/styles.css`: estilos
- `src/script.js`: lógica mínima

## Uso

Abre `index.html` en tu navegador.

## Despliegue

- Puedes usar GitHub Pages: Settings → Pages → Deploy from a branch → `main` / root.

---
© 2025 Tu Nombre

## Publicación en GitHub

1. Crea un repositorio vacío en GitHub (sin README), por ejemplo `presentacion-web`.
2. En la terminal, ejecuta:

```bash
git remote add origin https://github.com/TU_USUARIO/presentacion-web.git
git push -u origin main
```

3. Activa GitHub Pages:
   - Opción A (recomendada): Settings → Pages → Build and deployment → Source: GitHub Actions.
   - Opción B (simple): Settings → Pages → Source: Deploy from a branch → `main` / root.

Con la opción A, el workflow `.github/workflows/pages.yml` desplegará automáticamente en cada push.
