<template>
  <div id="app">
    <div class="btnContainer">
      <button v-on:click="toggleLangauge('english')">English</button>
      <button v-on:click="toggleLangauge('hindi')">Hindi</button>
    </div>
    <HeroImage/>
    <ArticleInfo/>
    <FirstTextSection/>
    <CitySelect/>
    <SecondTextSection/>
  </div>
</template>

<script>
import HeroImage from './components/HeroImage.vue'
import ArticleInfo from './components/ArticleInfo.vue'
import FirstTextSection from './components/FirstTextSection.vue'
import CitySelect from './components/CitySelect.vue'
import SecondTextSection from './components/SecondTextSection.vue'

export default {
  name: 'app',
  components: {
    HeroImage,
    ArticleInfo,
    FirstTextSection,
    CitySelect,
    SecondTextSection
  },
  methods: {
    toggleLangauge (language) {
      this.$store.dispatch('changeLanguage', language)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 760px;
}
</style>
