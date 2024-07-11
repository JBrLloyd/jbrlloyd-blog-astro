import { getCollection } from 'astro:content';
const isProd = import.meta.env.PROD;

export const getBlogPosts = async () => {
  const posts = await getCollection('blog')
  return posts
    .filter(p =>
      // Only apply filtering of posts to production app
      !isProd
      || (!p.data.draft && p.slug !== 'markdown-style-guide' && p.slug !== 'using-mdx'))
    .sort((a, b) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );
}