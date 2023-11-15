import styled from "styled-components";

const Container = styled.section`
	width: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	font-size: 3rem;

	.divAltura,
	.divPeso,
	.divCalc {
		width: 90%;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	input,
	button {
		padding: 10px;
		outline: none;
		border: none;
		border-radius: 5px;
	}

	button {
		cursor: pointer;
		background-color: #6f00ff;
		color: white;
	}

	@media (max-width: 500px) {
		body,
		input,
		button {
			font-size: 1.6rem;
		}
	}
`;

export default Container;
