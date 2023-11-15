import { Link } from "react-router-dom";

import { Container } from "./styles";
import PropTypes from "prop-types";

export default function Project(props) {
	return (
		<Container>
			<Link to={props.link}>
				<img src={props.imageSrc} alt={`imagem do ${props.title}`} />
				<p>{props.title}</p>
			</Link>
		</Container>
	);
}

Project.propTypes = {
	link: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
};
