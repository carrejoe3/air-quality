import Vue from 'vue'
import Vuex from 'vuex'
import englishData from '../data/english.json'
// import hindiData from '../data/hindi.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allData: englishData
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
