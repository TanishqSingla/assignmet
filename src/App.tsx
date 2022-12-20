import React, { useState } from "react";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";

export default function App() {
	const [onLogin, setOnLogin] = useState(true);

	return (
		<div>
			{onLogin ? <SignIn /> : <Signup />}
			{onLogin ? (
				<div>
					Not Registered?{" "}
					<span onClick={() => setOnLogin(false)} className="psuedo-link">
						Register here
					</span>
				</div>
			) : (
				<div>
					Already registered?{" "}
					<span onClick={() => setOnLogin(true)} className="psuedo-link">
						Login here
					</span>
				</div>
			)}
		</div>
	);
}
