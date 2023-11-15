import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	justify-content: center;

	.calculator {
		background-color: #fafafa;
		border-radius: 10px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		text-align: center;
		padding: 20px;
		width: 90%; /* Tornar responsivo */
		max-width: 400px; /* Limitar a largura máxima */
	}

	#display {
		width: 100%;
		margin-bottom: 15px;
		padding: 10px;
		font-size: 24px;
		border: none;
		background-color: #fff;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		text-align: right;
	}

	.buttons {
		display: grid;
		grid-template-columns: repeat(
			auto-fit,
			minmax(75px, 1fr)
		); /* Tornar responsivo */
		gap: 10px;
	}

	.equal,
	.buttons button {
		padding: 15px;
		font-size: 20px;
		border: none;
		border-radius: 10px;
		cursor: pointer;
		background-color: #ededed;
		transition: background-color 0.2s;
	}

	.buttons button:hover {
		background-color: #e0e0e0;
	}

	.buttons button.operator {
		background-color: #f2a900;
		color: #ff8300;
		font-weight: bold;
	}

	.buttons button.operator:hover {
		background-color: #d18e00;
	}

	.buttons button.special {
		background-color: #a8a8a8;
		color: #fff;
		font-weight: bold;
	}

	.buttons button.special:hover {
		background-color: #878787;
	}

	.equal {
		width: 100%;
		margin-top: 1rem;
		background-color: #f2a900;
	}
`;
