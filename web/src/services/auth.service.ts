const VITE_API_URL = "https://curly-potato-2.azurewebsites.net";
// const VITE_API_URL = import.meta.env.VITE_API_URL;
const baseUrl = `${VITE_API_URL}/auth`;

const signUp = async (email: string, password: string) => {
  const rawResponse = await fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const content = await rawResponse.json();
  return content;
};

const signIn = async (email: string, password: string) => {
  const rawResponse = await fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const content = await rawResponse.json();
  return content;
};

export default { signUp, signIn };
