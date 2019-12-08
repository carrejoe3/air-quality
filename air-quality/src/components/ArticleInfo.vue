<template>
  <div id="articleInfo">
    <div>{{ articleInfo.byLine }}</div>
    <div>{{ articleInfo.date }}</div>
    <div>{{ articleInfo.category }}</div>
    <a v-bind:href="articleInfo.categoryUrl">{{ articleInfo.categoryUrl }}</a>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  computed: {
    articleInfo () {
      return this.$store.getters.articleInfo
    }
  }
}
</script>

<style scoped lang="scss">
#articleInfo {
  display: flex;
  justify-content: space-between;
  text-align: left;
  font-size: 0.7em;
}
</style>
