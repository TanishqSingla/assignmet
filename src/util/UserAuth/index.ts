const url = "http://localhost:3030" 

export const UserLogin = async (email, password) => {
  const data = await fetch(`${url}/users/${email}/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({password})
  });
  
  const json = await data.json();
  if(json.error) 
    Promise.reject(json);
  Promise.resolve(json);
}

export const UserSignup = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  const data = await fetch(`${url}/signup`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({firstName, lastName, email, password})
  });
  const json = await data.json();
  if(json.error) {
    return Promise.reject(json);
  }
  return Promise.resolve(json);
}

export const isEmail = (email: string) => {
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  return regex.test(email);
}