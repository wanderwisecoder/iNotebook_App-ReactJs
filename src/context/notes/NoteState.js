import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {
	const s1 = {
		name: 'Suraj',
		class: 'Higher',
	};
	// To Update the State
	const [state, setState] = useState(s1);
	const update = () => {
		setTimeout(() => {
			setState({
				name: 'Larry',
				class: 'Middle',
			});
		}, 5000);
	};

	return <NoteContext.Provider value={{ state, update }}>{props.children}</NoteContext.Provider>;
};

export default NoteState;
