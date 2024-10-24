import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import biomePlugin from "vite-plugin-biome";
import Pages from "vite-plugin-pages";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		Pages(),
		biomePlugin({
			mode: "check",
			applyFixes: true,
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
