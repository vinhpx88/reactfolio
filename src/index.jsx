import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from "@/components/theme-provider";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</HelmetProvider>
	</React.StrictMode>
);
