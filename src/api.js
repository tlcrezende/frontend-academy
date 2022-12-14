//export const API_URL = "https://dogsapi.origamid.dev/json";
export const API_URL = "http://localhost:3001/api/articles";

export function TOKEN_POST(body) {
  return {
    url: API_URL,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}
