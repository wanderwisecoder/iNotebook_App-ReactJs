import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
	const notesInitial = [
		{
			_id: '64bcf9460c32391e7a5e5d1a',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 1',
			description: 'Please wake Up Early 1.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.089Z',
			__v: 0,
		},
		{
			_id: '64bcf9460c32391e7a5e5d1c',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 2',
			description: 'Please wake Up Early.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.443Z',
			__v: 0,
		},
		{
			_id: '64bcf9460c32391e7a5e5d1a',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 3',
			description: 'Please wake Up Early 1.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.089Z',
			__v: 0,
		},
		{
			_id: '64bcf9460c32391e7a5e5d1c',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 4',
			description: 'Please wake Up Early.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.443Z',
			__v: 0,
		},
		{
			_id: '64bcf9460c32391e7a5e5d1a',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 5',
			description: 'Please wake Up Early 1.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.089Z',
			__v: 0,
		},
		{
			_id: '64bcf9460c32391e7a5e5d1c',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 6',
			description: 'Please wake Up Early.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.443Z',
			__v: 0,
		},
		{
			_id: '64bcf9460c32391e7a5e5d1a',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 7',
			description: 'Please wake Up Early 1.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.089Z',
			__v: 0,
		},
		{
			_id: '64bcf9460c32391e7a5e5d1c',
			user: '64b7a800ed6366a93fcde565',
			title: 'My Title 8',
			description: 'Please wake Up Early.',
			tag: 'personal',
			date: '2023-07-23T09:56:22.443Z',
			__v: 0,
		},
	];

	const [notes, setNotes] = useState(notesInitial);
	return <NoteContext.Provider value={{ notes, setNotes }}>{props.children}</NoteContext.Provider>;
};

export default NoteState;
