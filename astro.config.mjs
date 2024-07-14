import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkCodeTitle from "remark-flexible-code-titles";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";

/** @type { import("astro/config").AstroUserConfig } */
const astroUserConfig = {
  site: "https://blog.jbrlloyd.dev",
  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          heading: "contents",
          maxDepth: 3,
        },
      ],
      [
        remarkCodeTitle,
        {
          titleTagName: "span",
        },
      ],
    ],
    rehypePlugins: [
      rehypeAccessibleEmojis,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          titleTagName: "CodeBlockTitle",
          titleClassName: "custom-code-title",
          titleProperties: (language, title) => ({
            ["data-language"]: language,
            title,
          }),
        },
      ],
    ],
    shikiConfig: {},
  },
  integrations: [sitemap(), solidJs(), tailwind(), mdx(), playformCompress()],
  output: "hybrid",
  adapter: cloudflare({
  }),
};

export default defineConfig(astroUserConfig);
