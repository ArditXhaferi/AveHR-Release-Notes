import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  base: '/AveHR-Release-Notes/', // Replace with your repository name
  adapter: github(),
});