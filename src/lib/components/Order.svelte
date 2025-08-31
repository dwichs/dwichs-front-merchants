<script>
  let { order } = $props();
</script>

<div class="border border-gray-300 rounded-xl p-4">
  <div class="flex justify-between border-b pb-2 mb-3">
    <div>
      <h3 class="text-xl">Order #{order.id}</h3>
      <p class="text-sm text-gray-600">
        {new Date(order.date).toLocaleString("fr-FR")}
      </p>
    </div>
    <div
      class="rounded-xl p-2 h-min
  {order.status === 'pending'
        ? 'bg-yellow-200'
        : order.status === 'completed'
          ? 'bg-green-200'
          : 'bg-gray-200'}"
    >
      {order.status}
    </div>
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
    <div class="flex justify-between text-lg">
      <span>Total:</span>
      <span>${order.totalPrice}</span>
    </div>
  </div>
</div>
