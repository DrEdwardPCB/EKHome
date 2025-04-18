/** @type {import('tailwindcss').Config} */
export default {
	plugins: [],
	theme: {
		extend: {},
	},
	purge: ["./index.html", "./src/**/*.{svelte,js,ts}"], // for unused CSS
	variants: {
		extend: {},
	},
	darkMode: "class",
};
