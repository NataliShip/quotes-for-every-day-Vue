<template>
  <div class="quotes">
    <div class="quotes__container">
      <h2 @click="this.fetchQuote">Цитаты на каждый день</h2>
      <div class="quotes__loader" />
      <Quote text="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";

export default {
  name: "app",
  components: {
    Quote
  },
  data() {
    return {
      quotes: [],
    };
  },
  methods: {
    fetchQuote() {
      const api = 'http://api.forismatic.com/api/1.0/'

      fetch(`${api}`, {
        method: 'GET',
      }).then(response => console.log(response))
    }
  },
};
</script>

<style lang="scss">
  .quotes {
    display: flex;
    flex-direction: row;
    justify-content: center;

    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__loader {
      background: url("../src/assets/loader.gif") no-repeat;
      background-size: contain;
      width: 100px;
      height: 100px;

    }
  }
</style>
