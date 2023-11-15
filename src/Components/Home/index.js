import React from "react";

import Project from "../Project";
import { Container } from "./styles";

import blocoDeNotas from "../../assets/images/blocoDeNotas.png";
import calculadora from "../../assets/images/calculadora.png";
import calculadorIMC from "../../assets/images/calculadorIMC.png";
import calendario from "../../assets/images/calendario.png";
import campoMinado from "../../assets/images/campoMinado.png";
import canvas from "../../assets/images/canvas.png";
import chatBox from "../../assets/images/chatBox.png";
import contador from "../../assets/images/contador.png";
import cotacaoDeMoedas from "../../assets/images/cotacaoDeMoedas.png";
import geradorDeSenhas from "../../assets/images/geradorDeSenhas.png";
import jarvis from "../../assets/images/jarvis.png";
import jokenpo from "../../assets/images/jokenpo.png";
import pesquisador from "../../assets/images/pesquisador.png";
import temporizadorCronometro from "../../assets/images/temporizadorCronometro.png";
import tradutor from "../../assets/images/tradutor.png";

export default function Home() {
	const projects = [
		{
			title: "Bloco de Notas",
			imageSrc: blocoDeNotas,
			link: "/notepad",
		},
		{
			title: "Calculadora",
			imageSrc: calculadora,
			link: "/calculadora",
		},
		{
			title: "Calculador de IMC",
			imageSrc: calculadorIMC,
			link: "/imc-calculator",
		},
		{
			title: "Calendario",
			imageSrc: calendario,
			link: "/calendar",
		},
		{
			title: "Campo Minado",
			imageSrc: campoMinado,
			link: "#",
		},
		{
			title: "Canvas",
			imageSrc: canvas,
			link: "#",
		},
		{
			title: "ChatBox",
			imageSrc: chatBox,
			link: "#",
		},
		{
			title: "Contador",
			imageSrc: contador,
			link: "#",
		},
		{
			title: "Cotação de Moedas",
			imageSrc: cotacaoDeMoedas,
			link: "#",
		},
		{
			title: "Gerador de Senhas",
			imageSrc: geradorDeSenhas,
			link: "#",
		},
		{
			title: "Jarvis",
			imageSrc: jarvis,
			link: "#",
		},
		{
			title: "Jo Ken Po",
			imageSrc: jokenpo,
			link: "#",
		},
		{
			title: "Pesquisador",
			imageSrc: pesquisador,
			link: "#",
		},
		{
			title: "Temporizador",
			imageSrc: temporizadorCronometro,
			link: "#",
		},
		{
			title: "Tradutor",
			imageSrc: tradutor,
			link: "#",
		},
	];

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
						{projects.map((project, index) => (
							<Project
								key={index}
								title={project.title}
								imageSrc={project.imageSrc}
								link={project.link}
							/>
						))}
					</div>
				</div>
			</section>
		</Container>
	);
}
