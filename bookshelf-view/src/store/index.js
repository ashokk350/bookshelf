import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    books: []
}

const actions = {
  async createBooks ({ commit }, params) {
    // debugger // eslint-disable-line
    await axios.post('http://localhost:3000/api/v1/books', params)
    console.log(commit)
  },

  async fetchBooks ({ commit }, params) {
    const { data } = await axios.get('http://localhost:3000/api/v1/books', { params: { search: params } } )
    commit('UPDATE_BOOKS', data)
  },

  async deleteBooks({ commit }, params) {
    await axios.delete(`http://localhost:3000/api/v1/books/${params}`)
    console.log(commit)
  },

  async updateBook({ commit }, params) {
    await axios.put(`http://localhost:3000/api/v1/books/${params.id}`, params)
    console.log(commit)
  }
}

const mutations = {
  UPDATE_BOOKS (state, books) {
    state.books = books
  }
}

const getters = {
  getEditBook({state}, bookId) {
    return state.books.find(element => element.id == bookId)
  }
}

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

export default store
