import Cookie from 'js-cookie'

export const state = () => ({
  counter: 0,
  currentUser: null
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  setCurrentUser (state, user) {
    state.currentUser = user
  }
}

export const actions = {
  login ({commit, dispatch}, {email, password}) {
    return this.$axios.post('/login', {email, password})
      .then( res => {
        const {user, token} = res.data

        commit('setCurrentUser', user)
        Cookie.set('access-token', token, {domain: process.env.host})
        this.$axios.setToken(token, 'Bearer')

        return user
      })
  }
}
