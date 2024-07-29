import { defineConfig, envField } from "astro/config";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";

export default defineConfig({
  site: "https://jbrlloyd.dev",
  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          heading: "contents",
          maxDepth: 3
        }
      ]
    ],
    rehypePlugins: [
      rehypeAccessibleEmojis,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          content: {
            type: 'text',
            value: '#',
          },
          headingProperties: {
            className: ['header-anchor'],
          },
          properties: {
            className: ['header-anchor-link'],
          },
        }
      ]
    ],
    shikiConfig: {
      transformers: []
    }
  },
  integrations: [
    sitemap(),
    solidJs(),
    tailwind(),
    expressiveCode({
      defaultLocale: 'en-UK',
      themes: ['github-dark'],
      plugins: [pluginLineNumbers()],
    }),
    mdx(),
    playformCompress(),
  ],
  output: "hybrid",
  adapter: cloudflare(),
  vite: {
    ssr: {
      external: ['node:fs', 'node:child_process--node-compat']
    }
  },
  experimental: {
    env: {
      schema: {
        HIDE_DRAFTS: envField.boolean({ context: "server", access: "public", optional: true }),
      }
    }
  },
});
