import type { PageLoad } from "./$types";
import { env } from "$env/dynamic/public";

export const load: PageLoad = async ({ fetch, params }) => {
  const response = await fetch(
    `${env.PUBLIC_API_BASE_CLIENT}/restaurants/${params.id}/orders`,
    {
      credentials: "include",
    },
  );

  const orders = await response.json();

  return { orders };
};
