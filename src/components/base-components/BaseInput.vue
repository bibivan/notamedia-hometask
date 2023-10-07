<script setup lang="ts"></script>

<template>
  <div class="input-block">
    <label
      class="input-block__label"
      for="some_input_id"
    >
      Label
    </label>
    <input
      id="some_input_id"
      class="input-block__input"
      type="text"
    />
  </div>
</template>

<style lang="scss" scoped>
.input-block {
  display: block;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &__label {
    display: block;
  }

  &__input {
    display: block;
    min-width: 200px;
    min-height: 30px;
    border: 1px solid #1a1a1a;
    border-radius: 4px;

    &:focus,
    &:hover {
      border-color: #646cff;
      outline-color: #646cff;
    }
  }
}
</style>
