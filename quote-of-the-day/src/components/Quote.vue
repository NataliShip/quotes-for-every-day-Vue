<template>
  <div class="hello">
    <h2>{{ text }}</h2>
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

</style>
