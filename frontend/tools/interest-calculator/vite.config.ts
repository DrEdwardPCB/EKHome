import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
	plugins: [
		solid(),
		federation({
			name: "SolidInterestRateCalculator",
			filename: "remoteEntry.js",
			exposes: {
				"./InterestRateCalculator": "./src/components/interestRateCalculator/index.tsx",
			},
			shared: ["solid"],
		}),
	],
	server: {
		port: 3102,
		strictPort: true,
	},
});
