<template>
  <a
    target="_blank"
    @click="this.shareSocial"
    rel="noopener"
    :href="href"
    :class="className"
  ></a>
</template>

<script>
export default {
  name: "socialIcon",
  props: {
    href: String,
    className: String,
  },
  methods: {
    shareSocial(event) {
      const width = 600
      const height = 500
      window.open(
        event.currentTarget.href, event.currentTarget.target,
        `width=${width},
      height=${height},
      scrollbars=1,
      left=${(window.screen.width / 2) - (width / 2)},
      top=${(window.screen.height / 2) - (height / 2)}`
      )
      event.preventDefault()
    }
  }
};
</script>

<style scoped></style>
