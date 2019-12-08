<template>
  <div id="secondTextSection">
    <p v-for="content in secondTextContentData" v-bind:key="content.id">{{content}}</p>
  </div>
</template>

<script>
export default {
  name: 'SecondTextSection',
  computed: {
    secondTextContentData () {
      return this.$store.getters.secondTextContentData
    }
  }
}
</script>
