import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
	const host = 'http://localhost:5055';
	const notesInitial = [];
	const [notes, setNotes] = useState(notesInitial);

	// Get all Notes
	const getNotes = async () => {
		// todo: API call
		const response = await fetch(`${host}/api/note/fetchallnote`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiN2E4MDBlZDYzNjZhOTNmY2RlNTY1In0sImlhdCI6MTY4OTgzMjY1Mn0.FlySLqUm688CF1quvD1bp81BV6Vxx9qTowdq58Cb6yE',
			},
		});
		const json = await response.json();
		console.log(json);
		setNotes(json);
	};

	// Add a Note
	const addNote = async (title, description, tag) => {
		// API call
		const response = await fetch(`${host}/api/note/addnote`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiN2E4MDBlZDYzNjZhOTNmY2RlNTY1In0sImlhdCI6MTY4OTgzMjY1Mn0.FlySLqUm688CF1quvD1bp81BV6Vxx9qTowdq58Cb6yE',
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const json = response.json();
		console.log(json);

		console.log('Adding a new note');
		const note = {
			_id: '64bcf9460c32391e7a5e5d1a',
			user: '64b7a800ed6366a93fcde565',
			title: title,
			description: description,
			tag: tag,
			date: '2023-07-23T09:56:22.443Z',
			__v: 0,
		};
		setNotes(notes.concat(note));
	};

	// Delete a Note
	const deleteNote = async (id) => {
		//API call
		const response = await fetch(`${host}/api/note/deletenote/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiN2E4MDBlZDYzNjZhOTNmY2RlNTY1In0sImlhdCI6MTY4OTgzMjY1Mn0.FlySLqUm688CF1quvD1bp81BV6Vxx9qTowdq58Cb6yE',
			},
		});
		const json = response.json();

		console.log('Deleting the note with id.' + id);
		const newNotes = notes.filter((note) => {
			return note._id !== id;
		});
		setNotes(newNotes);
	};

	// Edit a Note
	const editNote = async (id, title, description, tag) => {
		// API call
		const response = await fetch(`${host}/api/note/updatenote/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiN2E4MDBlZDYzNjZhOTNmY2RlNTY1In0sImlhdCI6MTY4OTgzMjY1Mn0.FlySLqUm688CF1quvD1bp81BV6Vxx9qTowdq58Cb6yE',
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const json = await response.json();
		console.log(json);

		let newNotes = JSON.parse(JSON.stringify(notes));

		//Logic to edit in client
		for (let index = 0; index < newNotes.length; index++) {
			const element = newNotes[index];
			if (element._id === id) {
				newNotes[index].title = title;
				newNotes[index].description = description;
				newNotes[index].tag = tag;
				break;
			}
		}
		console.log(newNotes);
		setNotes(newNotes);
	};

	return <NoteContext.Provider value={{ notes, deleteNote, addNote, editNote, getNotes }}>{props.children}</NoteContext.Provider>;
};
export default NoteState;
