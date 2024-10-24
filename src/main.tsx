import "./index.css";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import routes from "~react-pages";

import { BrowserRouter, useRoutes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

function App() {
	return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}

// biome-ignore lint/style/noNonNullAssertion: vite main file
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ConvexProvider client={convex}>
			<BrowserRouter>
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</ConvexProvider>
	</StrictMode>,
);
