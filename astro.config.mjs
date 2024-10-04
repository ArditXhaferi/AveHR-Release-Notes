import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  // Update the base path if your project is not deployed to the root
  // For example, if it's deployed to github.com/user/repo, use 'repo' below
  base: '/AveHR-Release-Notes/', 
  adapter: github({
    // if using a custom domain:
    // domain: 'example.com'
  }),
});