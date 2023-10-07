<script setup lang="ts">
import ClientData from './components/ClientData.vue'
import PickUpPoints from './components/PickUpPoints.vue'
import SelectCity from './components/SelectCity.vue'
import CartList from './components/cart/CartList.vue'
import BaseButton from '@/components/base-components/BaseButton.vue'
</script>

<template>
  <div class="container grid">
    <h1 class="title">Оформление заказа</h1>
    <form class="checkout">
      <SelectCity />
      <PickUpPoints />
      <ClientData />
      <BaseButton />
    </form>
    <CartList />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 30px;
}

.title {
  grid-column: span 2;
}

.checkout {
  display: grid;
  grid-template-columns: 1f;
  gap: 20px;
}
</style>
