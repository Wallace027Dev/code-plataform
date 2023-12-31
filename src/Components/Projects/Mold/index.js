import { Container } from "./styles";

import PropTypes from "prop-types";

export default function Mold(props) {
	console.log(props);

	return (
		<Container>
			<h1>{props.title}</h1>
			<p>{props.description}</p>
		</Container>
	);
}

Mold.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
