/** @type {import('./$types').PageLoad} */

import { env } from "$env/dynamic/public";

export async function load({ fetch }) {
  const response = await fetch(
    `${env.PUBLIC_API_BASE_CLIENT}/owners/restaurants`,
    {
      credentials: "include",
    },
  );
  const ownedRestaurants = await response.json();

  return { ownedRestaurants };
}
