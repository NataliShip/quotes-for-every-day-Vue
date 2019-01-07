<template>
  <div class="quotes">
    <div class="quotes__container">
      <h1 class="quotes__header">Цитаты на каждый день</h1>
      <div v-if="quotes.length === 0" class="quotes__loader" />
      <div class="quotes__card" v-for="quote in quotes" :key="quote.quoteLink">
        <Quote
          :key="quote.quoteLink"
          :text="quote.quoteText"
          :author="quote.quoteAuthor"
        />
      </div>
      <button class="quotes__button" @click="this.fetchQuote">Больше цитат</button>
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
// color variables
$purple: #7B64B4;
$green: #47b47a;
$red: #D63658;
$orange: #E09C43;
$blue: #3174e0;
$pink: #d75cd1;

body {
  background-color: #eee;
}
.quotes {
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  &__button {
    font-size: 22px;
    font-family: 'Arial';
    border: 5px solid #aaa;
    color: #444;
    outline: none;
    cursor: pointer;
    background-color: #fff;
  }

  &__header {
    color: #666;
  }

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
  &__card:nth-child(n+1) {
    color: $purple;
    & .quote__close {
      fill: $purple;
    }
    & .quote {
      border: 5px solid $purple;
    }
  }
  &__card:nth-child(2n+1) {
    color: $green;
    & .quote {
      border: 5px solid $green;
    }
  }
  &__card:nth-child(3n+1) {
    color: #D63658;
    & .quote {
      border: 5px solid $red;
    }
  }
  &__card:nth-child(4n+1) {
    color: $orange;
    & .quote {
      border: 5px solid $orange;
    }
  }
  &__card:nth-child(5n+1) {
    color: $blue;
    & .quote {
      border: 5px solid $blue;
    }
  }
  &__card:nth-child(6n+1) {
    color: $pink;
    & .quote {
      border: 5px solid $pink;
    }
  }
}
</style>
