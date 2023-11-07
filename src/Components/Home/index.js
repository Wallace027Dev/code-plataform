import React from "react";

import Project from "../Project";
import { Container } from "./styles";

export default function Home() {
	return (
		<Container>
			<section>
				<h1>Aplicativos da web por 123apps</h1>
				<p>Editar, converter, criar</p>
			</section>
			<section>
				<div className="theme-project">
					<h2>Ferramentas de Vídeo</h2>
					<div className="project-wrap">
						<Project />
						<Project />
						<Project />
						<Project />
						<Project />
						<Project />
						<Project />
						<Project />
						<Project />
					</div>
				</div>
			</section>
		</Container>
	);
}
