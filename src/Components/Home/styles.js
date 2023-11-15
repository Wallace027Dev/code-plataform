import styled from "styled-components";

export const Container = styled.main`
	text-align: center;

	h1 {
		font-weight: 700;
		font-size: 3.8rem;
	}

	h2 {
		font-weight: 600;
		font-size: 3.2rem;
		margin-top: 3.5rem;
		margin-bottom: 5rem;
	}

	p {
		font-size: 2rem;
	}

	section + section {
		border-top: 1px dotted #ccc;
		margin: 3.5rem 0;
	}
	.theme-project {
		margin: 0;

		.project-wrap {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			gap: 2rem;
		}
	}
`;
