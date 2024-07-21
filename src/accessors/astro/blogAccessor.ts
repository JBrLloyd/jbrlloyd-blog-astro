import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
const isProd = import.meta.env.PROD;

type BlogPostData = CollectionEntry<'blog'>;

export const getBlogEntryBySlugOrId = async (id: string | null) => {
  if (!id) {
    return null;
  }

  return await getEntry('blog', id);
}

export const getAllBlogPosts = async () => await getCollection('blog',
  (p) => {
    // Only apply filtering of posts to production app
    return !isProd
      || (!p.data.draft && p.slug !== 'markdown-style-guide' && p.slug !== 'using-mdx')
  })

export const sortPostsByPublishDesc = (blogPosts: CollectionEntry<'blog'>[]) => {
  return blogPosts
    .sort((a, b) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );
}

export const sortPostsByPublishAsc = (blogPosts: CollectionEntry<'blog'>[]) => {
  return blogPosts
    .sort((a, b) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );
}

export type SortedBlogPost = BlogPostData & {
  previousPostSlug: string | null
  nextPostSlug: string | null
}

export const getBlogPosts = async () => {
  const posts = await getAllBlogPosts();
  const sortedPosts = sortPostsByPublishDesc(posts);

  return sortedPosts
    .map((p, idx): SortedBlogPost => ({
      ...p,
      previousPostSlug: idx < sortedPosts.length - 1 ? sortedPosts[idx + 1].slug : null,
      nextPostSlug: idx > 0 ? sortedPosts[idx - 1].slug : null,
    }));
}

export const getBlogPostsTagsLookup = async () => {
  const posts = await getBlogPosts();
	const postsByTag = new Map<string, SortedBlogPost[]>();

	for (const post of posts) {
		if (!post.data.tags)
			continue;

		for (const tag of post.data.tags) {
			const tagLowerCase = tag.toLocaleLowerCase();

			if (tagLowerCase === 'blog')
				continue;

			if (postsByTag.has(tagLowerCase)) {
				postsByTag.get(tagLowerCase)?.push(post);
			} else {
				postsByTag.set(tagLowerCase, [post])
			}
		}
	}

  return postsByTag;
}

export const getBlogPostSeries = async (seriesKey: string | undefined) => {
  if (!seriesKey) {
    return null;
  }

  const posts = await getAllBlogPosts();
  const sortedPosts = sortPostsByPublishAsc(posts);

  return sortedPosts.filter(p => !!p.data.series && p.data.series === seriesKey);
}