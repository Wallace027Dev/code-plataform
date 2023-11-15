import { useState } from "react";
import Mold from "../../Projects/Mold";
import { Container } from "./styles";

export default function Calculator() {
	const [displayValue, setDisplayValue] = useState("");

	function handleButtonClick(button) {
		if (
			button.classList.contains("number") ||
			button.classList.contains("operator")
		) {
			setDisplayValue((prevValue) => prevValue + button.textContent);
		} else if (button.classList.contains("clear")) {
			setDisplayValue("");
		} else if (button.classList.contains("backspace")) {
			setDisplayValue((prevValue) => prevValue.slice(0, -1));
		} else if (button.classList.contains("equal")) {
			try {
				setDisplayValue(eval(displayValue.value));
			} catch (error) {
				setDisplayValue("Erro");
			}
		} else if (button.classList.contains("special")) {
			setDisplayValue(
				(prevValue) =>
					prevValue + (button.textContent === "%" ? "/100" : button.textContent)
			);
		}
	}

	const buttons = document.querySelectorAll(".buttons button");

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			console.log("Olá botão");
			handleButtonClick(button);
		});
	});

	return (
		<>
			<Mold
				title="Calculadora"
				description="CALCULE SEUS CÁLCULOS USANDO UMA CALCULADORA QUE CONSEGUE FAZER  AS OPERAÇÕES BÁSICAS."
			/>
			<Container>
				<div className="calculator">
					<input type="text" id="display" readOnly />
					<div className="buttons">
						<button className="number">7</button>
						<button className="number">8</button>
						<button className="number">9</button>
						<button className="operator">/</button>
						<button className="number">4</button>
						<button className="number">5</button>
						<button className="number">6</button>
						<button className="operator">*</button>
						<button className="number">1</button>
						<button className="number">2</button>
						<button className="number">3</button>
						<button className="operator">-</button>
						<button className="number">0</button>
						<button className="clear">C</button>
						<button className="backspace">⌫</button>
						<button className="operator">+</button>
						<button className="special">%</button>
						<button className="special">(</button>
						<button className="special">)</button>
						<button className="special">[</button>
						<button className="special">]</button>
						<button className="special">{"{"}</button>
						<button className="special">{"}"}</button>
						<button className="special">.</button>
					</div>
					<button className="equal">=</button>
				</div>
			</Container>
		</>
	);
}
