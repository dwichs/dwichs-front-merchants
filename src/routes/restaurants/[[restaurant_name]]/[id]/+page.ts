import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
  const response = await fetch(
    `http://172.26.1.58:3000/restaurants/${params.id}`,
  );
  const menuItems = await response.json();

  return { menuItems };
};
