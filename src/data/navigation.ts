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

export function isActiveNav(href: string, pathname: string): boolean {
	if (href === '/') return pathname === '/';
	return pathname === href || pathname.startsWith(`${href}/`);
}
