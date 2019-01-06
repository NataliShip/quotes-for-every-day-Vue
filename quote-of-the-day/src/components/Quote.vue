<template>
  <div class="quote">
    <div class="quote__close"></div>
    <h2 class="quote__text">{{ text }}</h2>
    <span class="quote__author">{{ author }}</span>
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
    border: 4px solid #ccc;
    border-radius: 10px;
    padding: 20px 50px 20px 20px;
    margin: 20px;
    &__close {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 20px;
      height: 20px;
      background: url("../../src/assets/x.svg") no-repeat;
    }
    &__text {
      margin: 0 0 10px 0;
      font-family: 'Arial';
    }
    &__author {
      font-family: 'Arial';
    }
  }
</style>
