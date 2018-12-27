<template>
  <div class="quotes">
    <div class="quotes__container">
      <h2>Цитаты на каждый день</h2>
      <div v-if="quotes.length === 0" class="quotes__loader" />
      <div class="quotes__card" v-for="quote in quotes" :key="quote.quoteLink">
        <Quote :key="quote.quoteLink" :text="quote.quoteText" :author="quote.quoteAuthor" />
      </div>
      <button @click="this.fetchQuote">Больше цитат</button>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import fetchJsonp from "fetch-jsonp";

export default {
  name: "app",
  components: {
    Quote
  },
  data() {
    return {
      quotes: []
    };
  },
  methods: {
    fetchQuote() {
      const api =
        "https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=jsonp&jsonp=parse";
      fetchJsonp(api, {
        jsonpCallbackFunction: "parse"
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          console.log("parsed json", json);
          this.quotes.push(json);
        })
        .catch(ex => {
          console.log("parsing failed", ex);
        });
    }
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
  }

  &__loader {
    background: url("../src/assets/loader.gif") no-repeat;
    background-size: contain;
    width: 100px;
    height: 100px;
  }

  &__card {
    width: 70%;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
  }
}
</style>
