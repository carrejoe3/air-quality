<template>
  <div id="firstTextSection">
    <p v-for="content in firstTextContentData" v-bind:key="content.id">{{content}}</p>
  </div>
</template>

<script>
export default {
  name: 'FirstTextSection',
  computed: {
    firstTextContentData () {
      return this.$store.getters.firstTextContentData
    }
  }
}
</script>

<style scoped lang="scss">

</style>
