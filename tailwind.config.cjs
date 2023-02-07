/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	"./node_modules/flowbite/**/*.js"],
	theme: {
		fontFamily: {
			'font-body': ['"Open Sans"']
		},
		extend: {},
	},
	plugins: [require('flowbite/plugin'),require('flowbite-typography')],
	
}
