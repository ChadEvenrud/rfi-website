import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		draft: z.boolean().default(false),
		publishedDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = { pages };
