<script setup>

</script>

<template>
  <div class="select-block">
    <label
        for="some_select_id"
        class="select-block__label"
    >
      Label
    </label>
    <select
        id="some_select_id"
        class="select-block__select"
    >
      <option
          class="select-block__option"
          value=""
      >
        Option
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.select-block {
  display: block;

  &__label {
    display: block;
  }

  &__select {
    padding: 5px;
    border-radius: 4px;

    &:focus, &:hover {
      border-color: #646cff;
      outline-color: #646cff;
    }
  }

  &__option {
    display: block;
  }
}
</style>