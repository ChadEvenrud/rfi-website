const base = import.meta.env.BASE_URL;

/** Public folder asset path (images, favicon, etc.) */
export function asset(path: string): string {
	const clean = path.startsWith('/') ? path.slice(1) : path;
	return `${base}${clean}`;
}

/** Internal site link — prepends Astro base for GitHub Pages subpaths */
export function href(path: string): string {
	if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;

	const clean = path === '/' ? '' : path.startsWith('/') ? path.slice(1) : path;
	return `${base}${clean}`;
}

/** Absolute URL for SEO meta tags */
export function absoluteAsset(path: string): string {
	if (/^https?:/.test(path)) return path;
	return new URL(asset(path), import.meta.env.SITE).href;
}
