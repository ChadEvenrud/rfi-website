export interface SEOProps {
	title?: string;
	description?: string;
	canonical?: string;
	image?: string;
	noindex?: boolean;
	type?: 'website' | 'article';
	publishedTime?: string;
	modifiedTime?: string;
}
