import { env } from "$env/dynamic/public";

export const load = async ({ fetch }) => {
  const res = await fetch(`${env.PUBLIC_API_BASE_CLIENT}/data`);
  return { data: await res.json() };
};
