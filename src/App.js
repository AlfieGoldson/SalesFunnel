import React, { useState } from 'react';
import './normalize.css';
import './styles.css';

import EmailForm from './components/email-form';

export default function App() {
	const [state, setState] = useState({
		emailFormVisible: false
	});
	return (
		<div className="App">
			{state.emailFormVisible ? (
				<EmailForm />
			) : (
				<button onClick={e => setState({ ...state, emailFormVisible: true })}>
					View your free video!
				</button>
			)}
		</div>
	);
}
