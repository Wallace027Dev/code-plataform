import { Routes, Route } from "react-router-dom";

import Home from "../Components/Home";
import Calculator from "../Components/Projects/Calculator";

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/calculadora" element={<Calculator />} />
		</Routes>
	);
}
