// app/stores/cart.ts
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  // STATE — reactive data
  const items = ref<{ id: number; name: string; price: number; qty: number }[]>(
    [],
  );

  // GETTER — derived value, auto-updates when items changes
  const totalItems = computed(() =>
    items.value.reduce((sum, item) => sum + item.qty, 0),
  );

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.qty, 0),
  );

  // ACTION — modifies state
  function addItem(product: { id: number; name: string; price: number }) {
    const existing = items.value.find((i) => i.id === product.id);
    if (existing) {
      existing.qty++;
    } else {
      items.value.push({ ...product, qty: 1 });
    }
  }

  function removeItem(productId: number) {
    const index = items.value.findIndex((i) => i.id === productId);
    if (index !== -1) items.value.splice(index, 1);
  }

  function clearCart() {
    items.value = [];
  }

  return { items, totalItems, totalPrice, addItem, removeItem, clearCart };
});
