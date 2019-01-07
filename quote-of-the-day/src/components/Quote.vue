<template>
  <div class="quote">
    <div v-if="quotes.length > 1" class="quote__close" @click="this.delete"></div>
    <h2 class="quote__text">{{ text }}</h2>
    <span class="quote__author">{{ author }}</span>
    <div class="social">
      <div>Поделиться:</div>
      <a href="#" class="social__vk"></a>
      <a href="#" class="social__fb"></a>
      <a href="#" class="social__tw"></a>
      <a href="#" class="social__ok"></a>
    </div>
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

  .social {
    display: flex;
    justify-content:flex-end;
    align-items: center;
    color: black;
    font-size: 20px;

    &__vk, &__ok, &__tw, &__fb {
      width: 30px;
      height: 30px;
      margin: 0 0 0 10px;
    }
    &__vk {
      background: url("../../src/assets/vk.svg") no-repeat;
    }
    &__ok {
      background: url("../../src/assets/ok.svg") no-repeat;
    }
    &__tw {
      background: url("../../src/assets/tw.svg") no-repeat;
    }
    &__fb {
      background: url("../../src/assets/fb.svg") no-repeat;
    }
  }
}
</style>
