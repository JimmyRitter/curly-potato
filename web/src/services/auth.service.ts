const baseUrl = `${import.meta.env.VITE_API_URL}/auth`;
console.log(baseUrl);
console.log("vite env", import.meta.env);

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
