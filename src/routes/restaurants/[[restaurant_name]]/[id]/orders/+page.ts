import type { PageLoad } from "./$types";
export const load: PageLoad = async ({ fetch, params }) => {
  const response = await fetch(`/api/restaurants/${params.id}/orders`);
  const orders = await response.json();

  return { orders };
};
