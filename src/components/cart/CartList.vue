<script setup lang="ts">
import CartItem from '@/components/cart/CartItem.vue'

// Мокданные списка городов и доступных точек доставки
// import { pickupPointsMockData } from "@/data/mock-data/index.ts";
</script>

<template>
  <div class="cart">
    <CartItem class="cart__item" />
  </div>
</template>

<style scoped>
.cart {
  padding: 10px;
  min-height: 200px;
  background-color: var(--vt-c-text-dark-2);
  border-radius: 4px;
}
</style>
