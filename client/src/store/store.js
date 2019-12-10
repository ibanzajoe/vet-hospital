import Vue from 'vue'
import Cookie from 'js-cookie'

export const state = () => ({
  something: 'hello world',
  token: null,
  user: null,
  isUserLoggedIn: false
})

export const mutations = {
  setToken (state, token) {
    state.token = token
    token ? state.isUserLoggedIn = true : state.isUserLoggedIn = false
  },
  setUser (state, user) {
    state.user = user
  }
}

export const getters = {

}

export const actions = {
  setToken ({commit}, token) {
    commit('setToken', token)
  },
  setUser ({commit}, user) {
    commit('setUser', user)
  },
  login ({commit, dispatch}, {email, password}) {
    return this.$axios.post('login', {email, password})
      .then( res => {
        const {user, token} = res.data
        commit('setToken', token)
        commit('setUser', user)
        Cookie.set('access-token', token)
        this.$axios.setToken(token, 'Bearer')
        return res.data.user
      })
  }
}
