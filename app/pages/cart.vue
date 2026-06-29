<script setup lang="ts">
const cartStore = useCartStore();
</script>

<template>
  <div class="p-8">
    <h1>Your Cart</h1>

    <div v-if="cartStore.items.length === 0">Your cart is empty.</div>

    <div
      v-for="item in cartStore.items"
      :key="item.id"
      class="flex justify-between"
    >
      <span>{{ item.name }} × {{ item.qty }}</span>
      <span>${{ item.price * item.qty }}</span>
      <button @click="cartStore.removeItem(item.id)">Remove</button>
    </div>

    <div v-if="cartStore.items.length > 0">
      <hr />
      <p>
        <strong>Total: ${{ cartStore.totalPrice }}</strong>
      </p>
      <button @click="cartStore.clearCart()">Clear Cart</button>
    </div>
  </div>
</template>
