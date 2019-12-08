<template>
  <div id="mainContent">
    <p v-for="content in mainContentData" v-bind:key="content.id">{{content}}</p>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  computed: {
    mainContentData () {
      return this.$store.getters.mainContentData
    }
  }
}
</script>

<style scoped lang="scss">

</style>
