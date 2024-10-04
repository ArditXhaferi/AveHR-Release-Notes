import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';

export default defineConfig({
  // Vercel
  output: "server",
  adapter: vercelServerless()
});