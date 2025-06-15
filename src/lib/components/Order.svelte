<script>
  import OrderItem from "$lib/components/OrderItem.svelte";
  let { order } = $props();

  function formatDateTime(isoString) {
    const d = new Date(isoString);

    const pad = (n) => n.toString().padStart(2, "0");

    const day = pad(d.getDate());
    const month = pad(d.getMonth() + 1); // Months are zero‑based
    const year = d.getFullYear();

    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
</script>

<div class="border border-gray-500 p-5 space-y-5 rounded-xl gap-5">
  <div class="flex justify-between">
    <h2># {order.id}</h2>
    <p>{formatDateTime(order.orderDate)}</p>
  </div>
  <div class="space-y-5">
    <div>
      {#each order.OrderItem as orderItem}
        <OrderItem {orderItem} />
      {/each}
    </div>

    <hr />
    <div class="flex">
      <p class="text-nowrap">Total :</p>
      <p class="text-end w-full">{order.totalPrice} €</p>
    </div>
  </div>

  <hr />

  <fieldset>
    <legend>Status : </legend>

    <div>
      <input type="radio" id="Pending" name="drone" value="huey" checked />
      <label for="Pending">Pending</label>
    </div>

    <div>
      <input type="radio" id="dewey" name="drone" value="dewey" />
      <label for="dewey">Dewey</label>
    </div>

    <div>
      <input type="radio" id="louie" name="drone" value="louie" />
      <label for="louie">Louie</label>
    </div>
  </fieldset>
  <p>Status : {order.OrderStatus.name}</p>
</div>
