const VITE_API_URL = "https://curly-potato-2.azurewebsites.net";
const baseUrl = `${VITE_API_URL}/auth`;

console.log("VITE_API_URL", VITE_API_URL);
console.log("import.VITE_API_URL", import.meta.env.VITE_API_URL);

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

export default { signUp };
