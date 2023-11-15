import { useState } from "react";

import Mold from "../Mold";

import Container from "./styles";

export default function ImcCalculator() {
	const [altura, setAltura] = useState("");
	const [peso, setPeso] = useState("");
	const [resultado, setResultado] = useState("");

	const calcIMC = () => {
		if (altura !== "" && peso !== "") {
			const imc = (peso / (altura * altura)).toFixed(2);
			let classification = "";

			if (imc < 18.5) {
				classification = "Abaixo do peso";
			} else if (imc < 25) {
				classification = "Peso normal";
			} else if (imc < 30) {
				classification = "Acima do peso";
			} else if (imc < 35) {
				classification = "Obesidade Grau I";
			} else if (imc < 41) {
				classification = "Obesidade Grau II";
			} else {
				classification = "Obesidade Grau III";
			}

			setResultado(`IMC: ${imc} (${classification})`);
		} else {
			setResultado("Preencha os campos");
		}
	};

	return (
		<>
			<Mold
				title="Calculadora de IMC"
				description="VEJA SEU PESO, E CONFIRA SUA MASSA CORPORAL."
			/>
			<Container>
				<h2>Cálculo IMC</h2>
				<div className="divAltura">
					<label htmlFor="altura">Altura (M)</label>
					<input
						type="number"
						id="altura"
						value={altura}
						onChange={(e) => setAltura(e.target.value)}
					/>
				</div>
				<div className="divPeso">
					<label htmlFor="peso">Peso (KG)</label>
					<input
						type="number"
						id="peso"
						value={peso}
						onChange={(e) => setPeso(e.target.value)}
					/>
				</div>

				<div className="divCalc">
					<button onClick={calcIMC}>Calcular</button>
				</div>

				<span id="resultado">{resultado}</span>
			</Container>
		</>
	);
}
