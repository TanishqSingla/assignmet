import React, { FormEvent, useState } from "react";
import { isEmail, UserSignup } from "../util/UserAuth";

export default function Signup() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (!isEmail(email)) {
			setError(true);
      setErrorMessage("Invalid Email");
			return;
		}
    if(password !== confirmPassword) {
      setError(true);
     return 
    }
    setError(false);
		UserSignup({firstName, lastName, email, password}).then(data => {
      console.log(data);
    }).catch(e => {
      setError(true);
      setErrorMessage(e.error)
    });
	};

	return (
		<div>
      {error && <span className="text-red-500">! {errorMessage}</span>}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="First Name"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					required
				/>
				<input
					type="text"
					placeholder="LastName"
					value={lastName}
					required
					onChange={(e) => setLastName(e.target.value)}
				/>
				<input
					type="email"
					placeholder="example@example.com"
					value={email}
					onChange={(e) => setEmail(e.target.value.trim())}
					required
				/>
				<input
					type="Password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Confirm Password"
					required
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
        <button type="submit">submit</button>
			</form>
		</div>
	);
}
