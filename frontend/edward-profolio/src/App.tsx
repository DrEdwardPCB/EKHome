import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingLayout } from "./layouts/landingLayout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});
function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingLayout></LandingLayout>}></Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
