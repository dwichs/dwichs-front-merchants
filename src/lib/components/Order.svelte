<script>
  import { PUBLIC_API_BASE_CLIENT } from "$env/static/public";
  let { order } = $props();

  const statuses = [
    { name: "Pending" },
    { name: "Ready for Pickup" },
    { name: "Picked Up" },
    { name: "Cancelled" },
  ];

  async function updateStatus(newStatus) {
    try {
      const response = await fetch(
        `${PUBLIC_API_BASE_CLIENT}/orders/${order.id}/status`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        },
      );

      if (response.ok) {
        order.status = newStatus; // Update local state
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
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
