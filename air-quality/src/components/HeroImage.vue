<template>
  <div id="heroImageContainer">
    <h1 id="heroImageTitle">{{ heroImageData.title }}</h1>
    <img id="heroImage" v-bind:src="heroImageData.src" v-bind:alt="heroImageData.title">
  </div>
</template>

<script>
export default {
  name: 'HeroImage',
  computed: {
    heroImageData () {
      return this.$store.getters.heroImageData
    }
  }
}
</script>

<style scoped lang="scss">
#heroImage {
  width: 100%;
  max-width: 760px;
}
</style>
