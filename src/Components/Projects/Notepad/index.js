import Mold from "../Mold";
import Container from "./styles";

export default function Notepad() {
	function saveNote() {
		const noteTitle = document.getElementById("noteTitle");
		const noteContent = document.getElementById("noteContent");
		const noteCategory = document.getElementById("noteCategory");
		const noteList = document.getElementById("note-list");

		const title = noteTitle.value;
		const content = noteContent.value;
		const category = noteCategory.value;

		if (title.trim() === "" || content.trim() === "") {
			alert("Por favor, preencha o título e o conteúdo da nota.");
			return;
		}

		const noteItem = document.createElement("li");
		noteItem.innerHTML = `<strong>${title}</strong><br>${content}<br><em>Categoria: ${category}</em><br><small>Data de Criação: ${new Date().toLocaleString()}</small>`;

		const editButton = document.createElement("button");
		editButton.textContent = "Editar";
		editButton.addEventListener("click", () =>
			editNoteItem(noteItem, title, content, category)
		);

		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Excluir";
		deleteButton.addEventListener("click", () => deleteNoteItem(noteItem));

		noteItem.appendChild(editButton);
		noteItem.appendChild(deleteButton);

		noteList.appendChild(noteItem);

		noteTitle.value = "";
		noteContent.value = "";

		saveNotes();
	}

	function saveNotes() {
		const noteList = document.getElementById("note-list");
		const notes = noteList.querySelectorAll("li");
		const savedNotes = [];

		notes.forEach((note) => {
			savedNotes.push({
				title: note.querySelector("strong").textContent,
				content: note.textContent,
				category: note
					.querySelector("em")
					.textContent.replace("Categoria: ", ""),
				date: note
					.querySelector("small")
					.textContent.replace("Data de Criação: ", ""),
			});
		});

		localStorage.setItem("notes", JSON.stringify(savedNotes));
	}

	function loadNotes() {
		const noteList = document.getElementById("note-list");
		const savedNotes = JSON.parse(localStorage.getItem("notes"));

		if (savedNotes) {
			savedNotes.forEach((note) => {
				const noteItem = document.createElement("li");
				noteItem.innerHTML = `<strong>${note.title}</strong><br>${note.content}<br><em>Categoria: ${note.category}</em><br><small>Data de Criação: ${note.date}</small>`;

				const editButton = document.createElement("button");
				editButton.textContent = "Editar";
				editButton.addEventListener("click", () =>
					editNoteItem(noteItem, note.title, note.content, note.category)
				);

				const deleteButton = document.createElement("button");
				deleteButton.textContent = "Excluir";
				deleteButton.addEventListener("click", () => deleteNoteItem(noteItem));

				noteItem.appendChild(editButton);
				noteItem.appendChild(deleteButton);

				noteList.appendChild(noteItem);
			});
		}
	}

	function editNoteItem(noteItem, title, content, category) {
		const newTitle = prompt("Editar título da nota:", title);
		if (newTitle === null) {
			return; // Cancelar a edição
		}

		const newContent = prompt("Editar conteúdo da nota:", content);
		if (newContent === null) {
			return; // Cancelar a edição
		}

		const newCategory = prompt("Editar categoria da nota:", category);
		if (newCategory === null) {
			return; // Cancelar a edição
		}

		noteItem.innerHTML = `<strong>${newTitle}</strong><br>${newContent}<br><em>Categoria: ${newCategory}</em><br><small>Data de Criação: ${new Date().toLocaleString()}`;

		saveNotes();
	}

	function deleteNoteItem(noteItem) {
		if (confirm("Tem certeza de que deseja excluir esta nota?")) {
			noteItem.remove();
			saveNotes();
		}
	}

	function clearNotes() {
		if (confirm("Tem certeza de que deseja excluir todas as notas?")) {
			const noteList = document.getElementById("note-list");
			noteList.innerHTML = "";
			localStorage.removeItem("notes");
		}
	}

	function filterNotes() {
		const filterSelect = document.getElementById("filterSelect");
		const noteList = document.getElementById("note-list");
		const notes = noteList.querySelectorAll("li");

		const filterValue = filterSelect.value;

		notes.forEach((note) => {
			const category = note
				.querySelector("em")
				.textContent.replace("Categoria: ", "");
			if (filterValue === "all" || category === filterValue) {
				note.style.display = "block";
			} else {
				note.style.display = "none";
			}
		});
	}

	function sortNotes() {
		const sortSelect = document.getElementById("sortSelect");
		const noteList = document.getElementById("note-list");
		const notes = Array.from(noteList.querySelectorAll("li"));

		const sortValue = sortSelect.value;

		if (sortValue === "date") {
			notes.sort((a, b) => {
				const dateA = new Date(
					a.querySelector("small").textContent.replace("Data de Criação: ", "")
				);
				const dateB = new Date(
					b.querySelector("small").textContent.replace("Data de Criação: ", "")
				);
				return dateB - dateA;
			});
		} else if (sortValue === "category") {
			notes.sort((a, b) => {
				const categoryA = a
					.querySelector("em")
					.textContent.replace("Categoria: ", "");
				const categoryB = b
					.querySelector("em")
					.textContent.replace("Categoria: ", "");
				return categoryA.localeCompare(categoryB);
			});
		}

		notes.forEach((note) => noteList.appendChild(note));
	}

	loadNotes();

	return (
		<>
			<Mold
				title="Bloco de Notas"
				description="CRIE ANOTAÇÕES PARA SEU DIA A DIA, AS SALVANDO E AS PESQUISANDO POR MEIO DE FILTROS, DATA, ETC."
			/>
			<Container>
				<div className="container">
					<h1>Bloco de Notas</h1>
					<div className="input-container">
						<input type="text" id="noteTitle" placeholder="Título da nota" />
						<textarea
							id="noteContent"
							placeholder="Digite sua nota aqui..."
						></textarea>
						<select id="noteCategory">
							<option value="geral">Geral</option>
							<option value="trabalho">Trabalho</option>
							<option value="pessoal">Pessoal</option>
						</select>
						<button onClick={saveNote()}>Salvar</button>
						<button onClick={clearNotes()}>Limpar Todas as Notas</button>
					</div>
					<div className="note-controls">
						<select id="filterSelect" onChange={filterNotes()}>
							<option value="all">Todas as Notas</option>
							<option value="geral">Geral</option>
							<option value="trabalho">Trabalho</option>
							<option value="pessoal">Pessoal</option>
						</select>
						<select id="sortSelect" onChange={sortNotes()}>
							<option value="default">Ordenar por Padrão</option>
							<option value="date">Ordenar por Data</option>
							<option value="category">Ordenar por Categoria</option>
						</select>
					</div>
					<div className="note-list">
						<h2>Notas Salvas</h2>
						<ul id="note-list"></ul>
					</div>
				</div>
			</Container>
		</>
	);
}
