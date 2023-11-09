import { Container } from "./styles";
import PropTypes from "prop-types";

export default function Project(props) {
	return (
		<Container>
			<img src={props.imageSrc} alt={`imagem do ${props.title}`} />
			<p>{props.title}</p>
		</Container>
	);
}

Project.propTypes = {
	title: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
};
