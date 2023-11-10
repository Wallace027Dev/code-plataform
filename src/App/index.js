import { BrowserRouter } from "react-router-dom";

import AppRoutes from "../routes/Routes";
import Nav from "../Components/Nav";

import "./index.css";

function App() {
	return (
		<>
			<Nav />
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</>
	);
}

export default App;
