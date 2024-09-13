import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

// https://astro.build/config
export default defineConfig({
  // Asegúrate de establecer el `base` si tu proyecto está en un subdirectorio en GitHub Pages
  base: '/minimalist-portfolio-json/', // reemplaza <nombre-del-repositorio> con el nombre de tu repositorio
  integrations: [github()]
});