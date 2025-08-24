import { createAuthClient } from "better-auth/svelte";
import { env } from "$env/dynamic/public";

export const authClient = createAuthClient({
  baseURL: `${env.PUBLIC_API_BASE_CLIENT}/api/auth`,
});
