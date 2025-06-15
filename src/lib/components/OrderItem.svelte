<script>
  let { orderItem } = $props();
</script>

<div class="flex justify-between">
  <div class="flex gap-5">
    <p>{orderItem.imageUrlAtOrder}</p>
    <h2>{orderItem.nameAtOrder}</h2>
  </div>
  <div>
    <p>{orderItem.priceAtOrder}</p>
  </div>
</div>
