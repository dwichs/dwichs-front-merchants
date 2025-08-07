import { PUBLIC_API_BASE_CLIENT } from "$env/static/public";
import { PUBLIC_API_BASE_SERVER } from "$env/static/public";

export async function handleFetch({ request, fetch }) {
  console.log(request.url);
  request = new Request(
    request.url.replace(PUBLIC_API_BASE_CLIENT, PUBLIC_API_BASE_SERVER),
    request,
  );
  console.log(request.url);

  return fetch(request);
}
