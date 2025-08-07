import { browser } from "$app/environment";
import {
  PUBLIC_API_BASE_CLIENT,
  PUBLIC_API_BASE_SERVER,
} from "$env/static/public";

console.log(browser);

export const load = async ({ fetch }) => {
  const API_BASE = browser ? PUBLIC_API_BASE_CLIENT : PUBLIC_API_BASE_SERVER;

  const res = await fetch(`${API_BASE}/data`);
  return { data: await res.json() };
};
