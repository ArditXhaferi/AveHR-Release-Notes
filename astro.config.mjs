import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';

import netlify from '@astrojs/netlify';

export default defineConfig({
  // Vercel
  output: "server",
  adapter: netlify()
});