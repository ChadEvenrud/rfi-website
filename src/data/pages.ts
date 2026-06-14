export interface PageMeta {
	title: string;
	description: string;
	path: string;
}

export const pageMeta = {
	home: {
		title: 'Home',
		description:
			'RFI Data Solutions provides data integration, reporting, AI, and technology consulting for small to midsized construction companies.',
		path: '/',
	},
	services: {
		title: 'Services',
		description:
			'Explore RFI Data Solutions services: application integration, construction data analytics, AI automation, and custom platform development.',
		path: '/services',
	},
	industries: {
		title: 'Industries',
		description:
			'RFI Data Solutions serves general contractors, owners, engineering firms, and specialty trades with construction-focused technology.',
		path: '/industries',
	},
	about: {
		title: 'About',
		description:
			'Learn about RFI Data Solutions — our mission, values, and commitment to trust, innovation, and clarity in construction technology.',
		path: '/about',
	},
	caseStudies: {
		title: 'Case Studies',
		description:
			'See how RFI Data Solutions helps construction teams integrate systems, unlock analytics, and deploy AI across complex projects.',
		path: '/case-studies',
	},
	insights: {
		title: 'Insights',
		description:
			'Construction technology insights on integration, data analytics, and AI from the RFI Data Solutions team.',
		path: '/insights',
	},
	contact: {
		title: 'Contact',
		description:
			'Contact RFI Data Solutions to discuss construction application integration, data analytics, and AI for your organization.',
		path: '/contact',
	},
} as const satisfies Record<string, PageMeta>;
