/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "hsl(from var(--color-primary) h s l / <alpha-value>)",
					50: "hsl(from var(--color-primary) h s calc(50% + var(--color-light-step)*4.5) / <alpha-value>)",
					100: "hsl(from var(--color-primary) h s calc(50% + var(--color-light-step)*4) / <alpha-value>)",
					200: "hsl(from var(--color-primary) h s calc(50% + var(--color-light-step)*3) / <alpha-value>)",
					300: "hsl(from var(--color-primary) h s calc(50% + var(--color-light-step)*2) / <alpha-value>)",
					400: "hsl(from var(--color-primary) h s calc(50% + var(--color-light-step)) / <alpha-value>)",
					500: "hsl(from var(--color-primary) h s 50% / <alpha-value>)",
					600: "hsl(from var(--color-primary) h s calc(50% - var(--color-dark-step)) / <alpha-value>)",
					700: "hsl(from var(--color-primary) h s calc(50% - var(--color-dark-step)*2) / <alpha-value>)",
					800: "hsl(from var(--color-primary) h s calc(50% - var(--color-dark-step)*3) / <alpha-value>)",
					900: "hsl(from var(--color-primary) h s calc(50% - var(--color-dark-step)*4) / <alpha-value>)",
					950: "hsl(from var(--color-primary) h s calc(50% - var(--color-dark-step)*4.5) / <alpha-value>)"
				}
			},
			fontFamily: {
				inter: ['"Inter"', "sans-serif"],
				playfair: ['"Playfair Display"', "serif"],
				rajdhani: ['"Rajdhani"']
			}
		}
	},
	plugins: []
}
