/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	darkMode: 'media', // or 'class'
	theme: {
		extend: {
			colors: {
				salmon: {
					'DEFAULT': '#fc6e60',
					dark: '#ce5c52'
				}
			}
		},
	},
	plugins: [],
}
