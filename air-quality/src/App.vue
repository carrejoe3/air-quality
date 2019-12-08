<template>
  <div id="app">
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
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
