<template>
  <div class="quotes">
    <div class="quotes__container">
      <h1>Цитаты на каждый день</h1>
      <div v-if="quotes.length === 0" class="quotes__loader" />
      <div class="quotes__card" v-for="quote in quotes" :key="quote.quoteLink">
        <Quote
          :key="quote.quoteLink"
          :text="quote.quoteText"
          :author="quote.quoteAuthor"
        />
      </div>
      <button @click="this.fetchQuote">Больше цитат</button>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "app",
  components: {
    Quote
  },
  computed: {
    ...mapState({
      quotes: state => state.quotes
    })
  },
  methods: {
    ...mapActions([
      "fetchQuote"
    ])
  },

  created() {
    this.fetchQuote();
  }
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
    font-family: 'Arial';
  }

  &__loader {
    background: url("../src/assets/loader.gif") no-repeat;
    background-size: contain;
    width: 100px;
    height: 100px;
  }

  &__card {
    width: 90%;
  }
}
</style>
