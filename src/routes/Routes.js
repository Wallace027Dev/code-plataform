import { Routes, Route } from "react-router-dom";

import Home from "../Components/Home";
import Calculator from "../Components/Projects/Calculator";
import ImcCalculator from "../Components/Projects/ImcCalculator";
import Notepad from "../Components/Projects/Notepad";
import Calendar from "../Components/Projects/Calendar";

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/calculator" element={<Calculator />} />
			<Route path="/notepad" element={<Notepad />} />
			<Route path="/imc-calculator" element={<ImcCalculator />} />
			<Route path="/calendar" element={<Calendar />} />
		</Routes>
	);
}
