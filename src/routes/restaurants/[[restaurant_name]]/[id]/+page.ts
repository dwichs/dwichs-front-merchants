import type { PageLoad } from "./$types";
import { env } from "$env/dynamic/public";

export const load: PageLoad = async ({ fetch, params }) => {
  const response = await fetch(
    `${env.PUBLIC_API_BASE_CLIENT}/restaurants/${params.id}`,
  );
  const menuItems = await response.json();

  return { menuItems };
};
