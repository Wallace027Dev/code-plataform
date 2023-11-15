import styled from "styled-components";

const Container = styled.section`
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	}

	h1 {
		color: #0078d4;
		margin-bottom: 20px;
	}

	.input-container {
		display: flex;
		flex-wrap: wrap;
	}

	input[type="text"],
	textarea,
	select {
		width: 100%;
		padding: 10px;
		margin: 5px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	button {
		background-color: #0078d4;
		color: #fff;
		border: none;
		padding: 10px 20px;
		cursor: pointer;
		margin: 5px;
		border-radius: 5px;
	}

	.note-controls {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;
	}

	.note-list {
		margin-top: 20px;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		margin: 10px 0;
		border: 1px solid #ccc;
		padding: 10px;
		border-radius: 5px;
		position: relative;
	}

	li button {
		position: absolute;
		top: 10px;
		right: 10px;
		background-color: #f44336;
		color: #fff;
		border: none;
		padding: 5px 10px;
		cursor: pointer;
		border-radius: 5px;
	}

	li button.edit-button {
		background-color: #0078d4;
	}

	/* Estilos para telas pequenas (máximo de 600px) */
	@media (max-width: 600px) {
		.container {
			max-width: 100%;
			padding: 10px;
		}
	}
`;

export default Container;
