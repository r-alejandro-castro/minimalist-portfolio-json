import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

// https://astro.build/config
export default defineConfig({
    site: "https://r-alejandro-castro.github.io",
    base: "/minimalist-portfolio-json/", // reemplaza <nombre-del-repositorio> con el nombre de tu repositorio
    integrations: [github()]
});