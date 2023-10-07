<script setup>
import ClientData from './components/ClientData.vue'
import PickUpPoints from './components/PickUpPoints.vue'
import SelectCity from './components/SelectCity.vue'
import CartList from './components/cart/CartList.vue'
import BaseButton from "@/components/base-components/BaseButton.vue";
</script>

<template>
  <h1>Оформление заказа</h1>
  <div class="checkout">
    <form class="form">
      <SelectCity/>
      <PickUpPoints/>
      <ClientData/>
      <BaseButton/>
    </form>
    <CartList/>
  </div>
</template>

<style lang="scss" scoped>
.checkout {
  display: flex;
  align-items: flex-start;
}

.form {
  width: 80%;
  margin-right: 20px;
}
</style>
