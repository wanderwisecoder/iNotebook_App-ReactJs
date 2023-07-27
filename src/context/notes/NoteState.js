import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
	const notesInitial = [
		{
			_id: '64bcf9460c32391e7a5eee5d1a8',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 1',
			description: 'Please wake Up Early 1.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.089Z',
			__v: 0,
		},
		{
			_id: '64bcf9460c32391tre7a5e5d1c1',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 2',
			description: 'Please wake Up Early.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.443Z',
			__v: 0,
		},
		{
			_id: '64bcf9460c323rt91e7a5e5d1a2',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 3',
			description: 'Please wake Up Early 1.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.089Z',
			__v: 0,
		},
		{
			_id: '64bcf9460c323gf91e7a5e5d1c3',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 4',
			description: 'Please wake Up Early.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.443Z',
			__v: 0,
		},
		{
			_id: '64bcf9460c323df91e7a5e5d1a4',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 5',
			description: 'Please wake Up Early 1.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.089Z',
			__v: 0,
		},
		{
			_id: '64bcf9460c3239ky1e7a5e5d1c5',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 6',
			description: 'Please wake Up Early.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.443Z',
			__v: 0,
		},
		{
			_id: '64bcf9460c32391e7a5e5d1mka6',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 7',
			description: 'Please wake Up Early 1.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.089Z',
			__v: 0,
		},
		{
			_id: '64bciyif9460c32391e7a5e5d1c7',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 8',
			description: 'Please wake Up Early.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.443Z',
			__v: 0,
		},
	];

	const [notes, setNotes] = useState(notesInitial);

	// Add a Note
	const addNote = (title, description, tag) => {
		// todo: API call
		console.log('Adding a new note.');
		const note = {
			_id: '64bciyif9460c32391e7a5e5d1c7bhby',
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
	const deleteNote = () => {};

	// Edit a Note
	const editNote = () => {};

	return <NoteContext.Provider value={{ notes, deleteNote, addNote, editNote, setNotes }}>{props.children}</NoteContext.Provider>;
};

export default NoteState;
