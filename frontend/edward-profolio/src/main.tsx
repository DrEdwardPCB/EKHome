import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import * as Sentry from "@sentry/react";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { persistor, store } from "./redux/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import i18n from "./i18n/index.js";

Sentry.init({
	dsn: "https://81c83bc73c914a2c8d7daab7a47f42f2@o4505577302130688.ingest.sentry.io/4505577322119168",
	integrations: [
		new Sentry.BrowserTracing({
			// Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
			tracePropagationTargets: ["localhost"], // add later
		}),
		new Sentry.Replay(),
	],
	// Performance Monitoring
	tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<I18nextProvider i18n={i18n} defaultNS={"translation"}>
					<App />
					<ToastContainer></ToastContainer>
				</I18nextProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
