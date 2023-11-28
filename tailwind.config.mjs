/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                'midnight': '#082032',
                'slate-blue': '#334756',
                'command-yellow': '#f0a500' ,
            }
        },
        fontFamily: {
            'display': ['"Outfit Variable"', ...defaultTheme.fontFamily.sans],
        }
	},
	plugins: [],
}
