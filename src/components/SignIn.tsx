import React, { FormEvent, useState } from "react"
import { isEmail, UserLogin } from "../util/UserAuth";

export default function() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(!isEmail(email)) {
      setError(true);
      setErrorMessage("Invalid email");
      return; 
    }
    setError(false);
    UserLogin(email, password).then().catch(e => {
      setError(true);
      setErrorMessage(e);
    });
  }  
  
  return <div>
    {error && <div>!{errorMessage}</div>}
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value.trim())}/>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  </div>
}