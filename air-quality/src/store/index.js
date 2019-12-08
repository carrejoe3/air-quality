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
  getters: {
    heroImageData (state) {
      let heroImageData = {
        src: state.allData.hero_1_image,
        title: state.allData.hero_1_title
      }
      return heroImageData
    },
    mainContentData (state) {
      let mainContentData = {
        p1: state.allData.p_1_value,
        p2: state.allData.p_2_value,
        p3: state.allData.p_3_value,
        p4: state.allData.p_4_value,
        p5: state.allData.p_5_value
      }
      return mainContentData
    }
  }
})
