export const brand = {
	name: 'RFI Data Solutions',
	tagline:
		'Data, reporting, AI, and integration solutions for small to midsized construction companies.',
	values: ['Trust', 'Innovation', 'Clarity'] as const,
	logo: {
		vertical: {
			src: '/images/brand/rfi-logo-vertical.png',
			alt: 'RFI Data Solutions',
			width: 526,
			height: 178,
		},
		horizontal: {
			src: '/images/brand/rfi-logo-horizontal.png',
			alt: 'RFI Data Solutions — construction integration, data analytics, and AI',
			width: 324,
			height: 284,
		},
	},
	colors: {
		navy: {
			950: '#060a12',
			900: '#0a0e17',
			800: '#111827',
			700: '#1a2332',
			600: '#243044',
		},
		charcoal: '#141b26',
		cyan: '#00d2ff',
		blue: '#0072ff',
		violet: '#8e2de2',
		white: '#ffffff',
	},
	gradients: {
		brand: 'linear-gradient(135deg, #00d2ff 0%, #0072ff 50%, #8e2de2 100%)',
		brandSoft: 'linear-gradient(135deg, rgba(0, 210, 255, 0.15) 0%, rgba(0, 114, 255, 0.15) 50%, rgba(142, 45, 226, 0.15) 100%)',
		glow: 'radial-gradient(ellipse at 50% 0%, rgba(0, 114, 255, 0.25) 0%, transparent 60%)',
	},
} as const;

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type LogoVariant = keyof typeof brand.logo;
