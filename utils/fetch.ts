import configFe from "./config.fe";

export async function apiFetch(url: string, data: Record<string, any> = {}) {
  const response = await fetch(configFe.NEXT_PUBLIC_API_URL + url);
  return await response.json();
}