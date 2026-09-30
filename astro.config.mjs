import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://valentine-os.github.io',
  base: process.env.GITHUB_ACTIONS === 'true' ? '/atelie' : '/',
  trailingSlash: 'always',
});
