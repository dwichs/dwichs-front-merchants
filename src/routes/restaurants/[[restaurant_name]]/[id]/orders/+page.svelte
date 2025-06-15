<script>
  /** @type {import('./$types').PageProps} */
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

<h1 class="text-3xl underline">Commandes :</h1>
<div class="space-y-5">
  {#each data.orders.data as order}
    <Order {order} />
  {/each}
</div>

<!-- <script> -->
<!--   import Order from "$lib/components/Order.svelte"; -->
<!---->
<!--   let { data } = $props(); -->
<!-- </script> -->
<!---->
<!-- <h1 class="text-3xl underline">Commandes :</h1> -->
<!-- <div class="space-y-5"> -->
<!--   {#each data.userOrders.data as order} -->
<!--     <Order {order} /> -->
<!--   {/each} -->
<!-- </div> -->
