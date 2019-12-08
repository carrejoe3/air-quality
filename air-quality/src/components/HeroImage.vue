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
#heroImageContainer {
  position: relative;
  display: inline-block;
  #heroImageTitle {
    position: absolute;
    z-index: 999;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 40%;
    text-align: center;
    width: 60%;
    color: white;
  }
  #heroImage {
    width: 100%;
    max-width: 760px;
  }
}
</style>
