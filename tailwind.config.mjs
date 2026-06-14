/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				rfi: {
					navy: {
						950: '#060a12',
						900: '#0a0e17',
						800: '#111827',
						700: '#1a2332',
						600: '#243044',
					},
					charcoal: '#141b26',
					cyan: {
						DEFAULT: '#00d2ff',
						light: '#66e5ff',
						dim: 'rgba(0, 210, 255, 0.12)',
					},
					blue: {
						DEFAULT: '#0072ff',
						electric: '#0072ff',
						dim: 'rgba(0, 114, 255, 0.12)',
					},
					violet: {
						DEFAULT: '#8e2de2',
						deep: '#4a00e0',
						dim: 'rgba(142, 45, 226, 0.12)',
					},
					white: '#ffffff',
					muted: 'rgba(255, 255, 255, 0.72)',
					subtle: 'rgba(255, 255, 255, 0.48)',
				},
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
			},
			fontSize: {
				'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
				'display-lg': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '700' }],
				display: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-lg': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
				heading: ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
				'heading-sm': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
				'body-lg': ['1.125rem', { lineHeight: '1.65' }],
				body: ['1rem', { lineHeight: '1.7' }],
				'body-sm': ['0.875rem', { lineHeight: '1.6' }],
				caption: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
				overline: [
					'0.6875rem',
					{ lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '600' },
				],
			},
			spacing: {
				section: '5rem',
				'section-sm': '3rem',
				'section-lg': '7rem',
				'section-xl': '9rem',
			},
			maxWidth: {
				content: '72rem',
				prose: '42rem',
			},
			boxShadow: {
				'glow-cyan': '0 0 40px rgba(0, 210, 255, 0.18)',
				'glow-blue': '0 0 48px rgba(0, 114, 255, 0.22)',
				'glow-violet': '0 0 48px rgba(142, 45, 226, 0.2)',
				card: '0 4px 24px rgba(0, 0, 0, 0.35)',
				'card-hover': '0 8px 32px rgba(0, 114, 255, 0.15)',
			},
			backgroundImage: {
				'gradient-brand': 'linear-gradient(135deg, #00d2ff 0%, #0072ff 50%, #8e2de2 100%)',
				'gradient-brand-vertical':
					'linear-gradient(180deg, #00d2ff 0%, #0072ff 50%, #8e2de2 100%)',
				'gradient-brand-soft':
					'linear-gradient(135deg, rgba(0, 210, 255, 0.14) 0%, rgba(0, 114, 255, 0.14) 50%, rgba(142, 45, 226, 0.14) 100%)',
				'gradient-radial-glow':
					'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0, 114, 255, 0.28) 0%, transparent 70%)',
				'gradient-hero':
					'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0, 210, 255, 0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 30% at 80% 20%, rgba(142, 45, 226, 0.08) 0%, transparent 50%)',
			},
			borderRadius: {
				brand: '0.75rem',
				'brand-lg': '1rem',
			},
		},
	},
	plugins: [],
};
