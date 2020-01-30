import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import '../styles.css';

const mailFormat = /(?:[a-z0-9A-Z!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function isEmailValid(email) {
	return email.match(mailFormat);
}

export default function EmailForm() {
	const [credentials, setCredentials] = useState({
		fullname: '',
		email: ''
	});
	const emailError =
		credentials.email !== '' && !isEmailValid(credentials.email);
	return (
		<div className="emailForm">
			<h1>Sales Funnel Exploration</h1>
			<form>
				<div className="formField">
					<div>
						<label
							htmlFor="email"
							className={classNames({
								requiredField: true,
								formFieldLabel: true
							})}>
							Full Name:
						</label>
					</div>
					<input
						id="fullname"
						name="fullname"
						type="text"
						value={credentials.fullname}
						onChange={e =>
							setCredentials({ ...credentials, fullname: e.target.value })
						}
						autofocus
					/>
				</div>
				<div className="formField">
					<div>
						<label
							htmlFor="email"
							className={classNames({
								requiredField: true,
								formFieldLabel: true
							})}>
							Email:
						</label>
					</div>
					<input
						id="email"
						name="email"
						type="email"
						value={credentials.email}
						onChange={e =>
							setCredentials({ ...credentials, email: e.target.value })
						}
						className={classNames({
							invalidField: emailError
						})}
					/>
					{emailError ? <p className="fieldError">Enter a valid email</p> : ''}
				</div>
			</form>
			<button
				type="submit"
				disabled={
					emailError || credentials.email === '' || credentials.fullname === ''
				}
				className={classNames({
					formSubmitButton: true
				})}>
				Make money now!
				<br />
				Sales funnel template
			</button>
		</div>
	);
}
