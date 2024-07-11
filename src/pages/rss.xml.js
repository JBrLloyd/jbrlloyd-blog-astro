import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

import { getBlogPosts } from '../accessors/astro/blogAccessor';

export async function GET(context) {
	const posts = await getBlogPosts();

	return rss({
		stylesheet: '/rss/styles.xsl',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
			categories: post.data.tags,
		})),
	});
}
