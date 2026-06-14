// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages project site: https://chadevenrud.github.io/rfi-website/
	// For custom domain later, set site to https://rfidatasolutions.net and base to '/'
	site: process.env.ASTRO_BASE ? 'https://chadevenrud.github.io' : 'https://rfidatasolutions.net',
	base: process.env.ASTRO_BASE || '/',
	integrations: [mdx(), tailwind(), sitemap()],
	redirects: {
		'/welcome': '/about',
	},
});
