import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import rehypeSanitize from 'rehype-sanitize';
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import { transformerNotationDiff, transformerNotationFocus, transformerNotationHighlight } from '@shikijs/transformers';

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
      ],
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
      transformers: [transformerNotationDiff(), transformerNotationFocus(), transformerNotationHighlight()]
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
  adapter: cloudflare()
});
