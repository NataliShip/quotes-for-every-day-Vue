<template>
  <div class="quote">
    <div class="quote__close">x</div>
    <h2 class="quote__text">{{ text }}</h2>
    <span>{{ author }}</span>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: {
    text: String,
    author: String
  }
};
</script>

<style scoped lang="scss">
  .quote {
    position: relative;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
    &__close {
      position: absolute;
      top: 20px;
      right: 20px;
    }
    &__text {
      margin: 0 0 10px 0;
    }
  }
</style>
