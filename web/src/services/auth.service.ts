const baseUrl = "http://localhost:8080/auth";

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
