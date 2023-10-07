<script setup lang="ts">
import BaseButton from '@/components/base-components/BaseButton.vue'
</script>

<template>
  <div class="product">
    <h3 class="product__name">Название товара</h3>
    <div class="product__counter">
      <BaseButton />
      <div class="product__count">Количество</div>
      <BaseButton />
    </div>
    <BaseButton />
  </div>
</template>

<style lang="scss" scoped>
.product {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &__name {
    width: 100%;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 1.1em;
    line-height: 1;
  }

  &__counter {
    display: flex;
  }

  &__count {
    margin: 0 10px;
  }
}
</style>
