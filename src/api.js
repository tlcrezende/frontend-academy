//export const API_URL = "https://dogsapi.origamid.dev/json";
export const API_URL = "http://localhost:3001/api";

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/auth/sign_in',
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(body),
    },
  };
}
