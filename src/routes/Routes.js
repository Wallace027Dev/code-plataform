import { Routes, Route } from "react-router-dom";

import Home from "../Components/Home";
import Calculator from "../Components/Projects/Calculator";
import ImcCalculator from "../Components/Projects/ImcCalculator";

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/calculator" element={<Calculator />} />
			<Route path="/imc-calculator" element={<ImcCalculator />} />
		</Routes>
	);
}
