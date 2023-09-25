<script setup>
import CartItem from './CartItem.vue'

// Мок-данные содержимого корзины
// [
//   {
//     id: 'product_1',
//     count: 1,
//   },
//   {
//     id: 'product_2',
//     count: 2,
//   }
// ]


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