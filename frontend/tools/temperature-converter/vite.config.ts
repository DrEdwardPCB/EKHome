import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import federation from "@originjs/vite-plugin-federation";
import postcss from "./postcss.config.js";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		federation({
			name: "SvelteTemperatureConverter",
			filename: "remoteEntry.js",
			exposes: {
				"./TemperatureConverter": "./src/lib/TemperatureConverter/TemperatureConverter.svelte",
			},
			shared: ["svelte"],
		}),
	],
	css: {
		postcss,
	},
	server: {
		port: 3101,
		strictPort: true,
	},
});
