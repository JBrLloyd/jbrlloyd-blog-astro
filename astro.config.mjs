import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://blog.jbrlloyd.dev',
  integrations: [mdx(), sitemap(), solidJs({ devtools: true}), tailwind()],
  output: "hybrid",
  adapter: cloudflare({
    imageService: passthroughImageService()
  })
});