import Vue from 'vue'

export const state = () => ({
  something: 'hello world',
  token: null,
  user: null,
  isUserLoggedIn: false
})

export const mutations = {
  setToken (state, token) {
    state.token = token
  }
}

export const getters = {

}

export const actions = {
  setToken ({commit}, token) {
    commit('setToken', token)
  }
}
