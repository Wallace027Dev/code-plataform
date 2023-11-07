import styled from "styled-components";

export const Container = styled.div`
	background-color: var(--light-gray);
	width: 18rem;
	height: 20rem;
	border-radius: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 2rem;

	p {
		font-size: 1.6rem;
	}

	&:hover {
		background-color: #ffee55;
	}
`;
