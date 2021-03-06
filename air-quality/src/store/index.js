import Vue from 'vue'
import Vuex from 'vuex'
import englishData from '../data/english.json'
import hindiData from '../data/hindi.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allData: englishData
  },
  mutations: {
    englishDataSource (state) {
      state.allData = englishData
    },
    hindiDataSource (state) {
      state.allData = hindiData
    }
  },
  actions: {
    changeLanguage ({ commit }, language) {
      language === 'english' ? commit('englishDataSource') : commit('hindiDataSource')
    }
  },
  getters: {
    heroImageData (state) {
      let heroImageData = {
        src: state.allData.hero_1_image,
        title: state.allData.hero_1_title
      }
      return heroImageData
    },
    articleInfo (state) {
      let articleInfo = {
        byLine: state.allData['article-info_1_byline'],
        date: state.allData['article-info_1_date'],
        category: state.allData['article-info_1_category'],
        categoryUrl: state.allData['article-info_1_category_url']
      }
      return articleInfo
    },
    firstTextContentData (state) {
      let firstTextContentData = {
        p1: state.allData.p_1_value,
        p2: state.allData.p_2_value,
        p3: state.allData.p_3_value,
        p4: state.allData.p_4_value,
        p5: state.allData.p_5_value
      }
      return firstTextContentData
    },
    secondTextContentData (state) {
      let secondTextContentData = {
        p1: state.allData.p_6_value,
        p2: state.allData.p_7_value,
        p3: state.allData.p_8_value,
        p4: state.allData.p_9_value,
        p5: state.allData.p_10_value
      }
      return secondTextContentData
    },
    selectCityContent (state) {
      let selectCityContent = {
        p1: state.allData['compare-tabs_1_method'],
        p2: state.allData['compare-tabs_1_title']
      }
      return selectCityContent
    },
    cityData (state) {
      let cityData = []
      for (let i = 1; i < parseInt(state.allData.total_cities_1_value) + 1; i++) {
        let city = {
          id: i,
          name: state.allData['compare-tabs_1_city_' + i + '_name'],
          aqi: state.allData['compare-tabs_1_city_' + i + '_aqi'],
          cigg: state.allData['compare-tabs_1_city_' + i + '_cigg']
        }
        cityData.push(city)
      }
      return cityData
    }
  }
})
