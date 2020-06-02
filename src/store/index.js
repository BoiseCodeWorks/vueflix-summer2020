import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie?api_key=545c6ef058e65396849dfbbf381cbca3&page=1&include_adult=false&query="
})

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    movies: [],
    activeMovie: {}
  },
  mutations: {
    setMovies(state, data) {
      state.movies = data
    },
    setActiveMovie(state, movie) {
      state.activeMovie = movie
      // console.log(state.activeMovie)
    }
  },
  actions: {
    async searchApi({ commit, dispatch }, query) {
      try {
        let res = await _api.get(query)
        console.log(res.data.results);
        commit('setMovies', res.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    async setActiveMovie({ commit, dispatch }, movie) {
      try {
        commit('setActiveMovie', movie)
      } catch (error) {
        console.error(error)
      }
    }

  },
  modules: {
  }
})
