<script setup lang="ts">
const cartStore = useCartStore();
</script>

<template>
  <nav class="flex justify-between p-4 bg-gray-800 text-white">
    <NuxtLink to="/">🛍 Shop</NuxtLink>
    <NuxtLink to="/cart">
      🛒 Cart
      <span v-if="cartStore.totalItems > 0" class="badge">
        {{ cartStore.totalItems }}
      </span>
    </NuxtLink>
  </nav>
</template>
