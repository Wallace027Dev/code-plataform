import { Routes, Route } from "react-router-dom";

import Home from "../Components/Home";
import Calculator from "../Components/Projects/Mold";

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={Home} />
			<Route path="/calculator" element={<Calculator />} />
		</Routes>
	);
}
