import type { PageLoad } from "./$types";
import { PUBLIC_API_BASE_CLIENT } from "$env/static/public";

export const load: PageLoad = async ({ fetch, params }) => {
  const response = await fetch(
    `${PUBLIC_API_BASE_CLIENT}/restaurants/${params.id}/orders`,
  );
  const orders = await response.json();

  return { orders };
};
