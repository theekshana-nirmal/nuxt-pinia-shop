<script setup lang="ts">
const cartStore = useCartStore();

// Pretend these come from an API
const products = [
  { id: 1, name: "Mechanical Keyboard", price: 120 },
  { id: 2, name: "Wireless Mouse", price: 45 },
  { id: 3, name: "USB-C Hub", price: 35 },
];
</script>

<template>
  <div class="grid grid-cols-3 gap-4 p-8">
    <div
      v-for="product in products"
      :key="product.id"
      class="border p-4 rounded"
    >
      <h2>{{ product.name }}</h2>
      <p>${{ product.price }}</p>
      <button @click="cartStore.addItem(product)">Add to Cart</button>
    </div>
  </div>
</template>
