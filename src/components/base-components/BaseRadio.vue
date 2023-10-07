<script setup lang="ts"></script>

<template>
  <div class="radio-block">
    <input
      id="some_radio_id"
      class="radio-block__input"
      type="radio"
    />
    <label
      for="some_radio_id"
      class="radio-block__label"
    >
      Label
    </label>
  </div>
</template>

<style scoped lang="scss">
.radio-block {
  display: block;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &__label {
    &:focus,
    &:hover {
      border-color: #646cff;
      outline-color: #646cff;
    }
  }
}
</style>
