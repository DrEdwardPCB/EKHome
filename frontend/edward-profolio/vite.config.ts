import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import inject from "@rollup/plugin-inject";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	plugins: [react()],
	define: {
		"process.env.NODE_ENV": mode === "production" ? '"production"' : '"development"',
		"process.env": process.env,
	},
	build: {
		rollupOptions: {
			plugins: [inject({ process: ["process"] })],
		},
	},
}));
