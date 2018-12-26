<template>
  <div class="hello">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: {
    text: String
  }
};
</script>

<style scoped lang="scss">

</style>
