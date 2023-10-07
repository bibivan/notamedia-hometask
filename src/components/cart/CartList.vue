<script setup>
import CartItem from './CartItem.vue'

// Мокданные списка городов и доступных точек доставки
// import { pickupPointsMockData } from "../../data/mock-data/index.js";
</script>

<template>
<div class="cart">
  <CartItem class="cart__item"/>
</div>
</template>

<style scoped>
.cart {
  padding: 10px;
  min-height: 200px;
  background-color: #eee;
  border-radius: 4px;
}
</style>