import { PUBLIC_API_BASE_CLIENT } from "$env/static/public";

export const load = async ({ fetch }) => {
  const res = await fetch(`${PUBLIC_API_BASE_CLIENT}/data`);
  return { data: await res.json() };
};
