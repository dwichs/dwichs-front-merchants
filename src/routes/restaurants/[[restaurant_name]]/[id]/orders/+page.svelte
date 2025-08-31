<script>
  import { onMount } from "svelte";
  import { invalidateAll } from "$app/navigation";
  import Order from "$lib/components/Order.svelte";
  let { data } = $props();
  onMount(() => {
    const interval = setInterval(() => {
      invalidateAll();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<h1 class="text-3xl mb-8 underline">Commandes</h1>
<div class="space-y-6">
  {#each data.orders.orders as order}
    <Order {order} />
  {/each}
</div>
