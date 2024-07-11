import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		author: z.string(),
		heroImage: z.string().optional(),
		draft: z.boolean().optional(),
		category: z.string().optional(),
		subCategory: z.string().optional(),
		tags: z.array(z.string()).optional()
	}),
});

export const collections = { blog };
