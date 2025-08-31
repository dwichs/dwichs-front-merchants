<script>
  let { order } = $props();

  const statuses = [
    { name: "Pending" },
    { name: "Ready for Pickup" },
    { name: "Picked Up" },
    { name: "Cancelled" },
  ];

  async function updateStatus(newStatus) {
    // Add your API call here to update the order status
    console.log(`Updating order ${order.id} to ${newStatus}`);
  }
</script>

<div class="border border-gray-300 rounded-xl p-4">
  <div class="flex justify-between border-b pb-2 mb-3">
    <div>
      <h3 class="text-xl">Order #{order.id}</h3>
      <p class="text-sm text-gray-600">
        {new Date(order.date).toLocaleString("fr-FR")}
      </p>
    </div>

    <select
      value={order.status}
      onchange={(e) => updateStatus(e.target.value)}
      class="h-min cursor-pointer"
    >
      {#each statuses as status}
        <option value={status.name}>{status.name}</option>
      {/each}
    </select>
  </div>
  <ul class="space-y-2 list-disc pl-6">
    {#each order.items as item}
      <li>
        <div class="flex justify-between">
          <div>
            <span>{item.name}</span>
            {#if item.specialRequest}
              <div class="text-sm text-gray-600">{item.specialRequest}</div>
            {/if}
          </div>
          <span>${item.price}</span>
        </div>
      </li>
    {/each}
  </ul>
  <div class="border-t pt-2 mt-3">
    <div class="flex justify-between text-lg font-sem">
      <span>Total:</span>
      <span>${order.totalPrice}</span>
    </div>
  </div>
</div>
