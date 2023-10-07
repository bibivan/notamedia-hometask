<script setup>
import BaseSelect from './base-components/BaseSelect.vue'


// мокданные списка содержимого корзины
// import { productsMOckData } from "../data/mock-data/index.js";


</script>

<template>
  <section class="choose-city">
    <h2>Доступные города</h2>
    <BaseSelect/>
  </section>
</template>

<style lang="scss" scoped>
.choose-city {
  margin-bottom: 20px;
}
</style>