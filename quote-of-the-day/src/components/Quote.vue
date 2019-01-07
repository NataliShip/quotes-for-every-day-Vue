<template>
  <div class="quote">
    <div v-if="quotes.length > 1" class="quote__close" @click="this.delete">

    </div>
    <h2 class="quote__text">{{ text }}</h2>
    <span class="quote__author">{{ author }}</span>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Quote",
  props: {
    text: String,
    author: String,
    color: String
  },
  computed: {
    ...mapState({
      quotes: state => state.quotes
    })
  },
  methods: {
    ...mapMutations(["deleteQuote"]),
    delete() {
      this.deleteQuote(this.text);
    }
  }
};
</script>

<style lang="scss">
.quote {
  position: relative;
  border-radius: 10px;
  padding: 20px 50px 20px 20px;
  margin: 20px;
  background-color: #fff;
  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    background: url("../../src/assets/x.svg") no-repeat;
    cursor: pointer;
  }
  &__text {
    margin: 0 0 10px 0;
    font-family: "Arial";
  }
  &__author {
    font-family: "Arial";
  }
}
</style>
