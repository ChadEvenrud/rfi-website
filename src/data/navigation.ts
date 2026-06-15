export interface NavLink {
	href: string;
	label: string;
}

export const mainNav: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/services', label: 'Services' },
	{ href: '/industries', label: 'Industries' },
	{ href: '/about', label: 'About' },
	{ href: '/case-studies', label: 'Case Studies' },
	{ href: '/insights', label: 'Insights' },
	{ href: '/contact', label: 'Contact' },
];

export function isActiveNav(linkHref: string, pathname: string): boolean {
	const base = import.meta.env.BASE_URL;
	let path = pathname;

	if (base !== '/') {
		path = path.replace(new RegExp(`^${base.replace(/\/$/, '')}`), '') || '/';
	}

	if (linkHref === '/') return path === '/' || path === '';
	return path === linkHref || path.startsWith(`${linkHref}/`);
}
