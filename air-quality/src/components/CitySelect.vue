<template>
  <div id="CityDropdown">
    <p>{{ selectCityContent.p1 }}</p>
    <p>{{ selectCityContent.p2 }}</p>
    <select v-model="selectedCity">
      <option v-for="city in cityData" :key="city.id" :value="city">{{ city.name }}</option>
    </select>
    <p>{{ selectedCity.aqi }}</p>
    <p>{{ selectedCity.cigg }}</p>
  </div>
</template>

<script>

export default {
  name: 'CitySelect',
  data () {
    return {
      selectedCity: {}
    }
  },
  computed: {
    cityData () {
      return this.$store.getters.cityData
    },
    selectCityContent () {
      return this.$store.getters.selectCityContent
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
