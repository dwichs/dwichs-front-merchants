/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const response = await fetch(`/api/owners/restaurants`);
  const ownedRestaurants = await response.json();

  return { ownedRestaurants };
}
