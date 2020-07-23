import Cookie from 'js-cookie'

export const state = () => ({
  counter: 0,
  currentUser: null,
  
  currentPatient: {},
  patientList: [],
  currentPatient: {}
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  setCurrentUser (state, user) {
    state.currentUser = user
  },

  setPatients (state, patients) {
    state.patientList = patients
  },

  setPatient (state, patient) {
    state.currentPatient = patient
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
  },

  getPatients ({commit}) {
    return this.$axios.get('/getPatients')
      .then(res => {
        commit('setPatients', res.data)
        return res.data
      })
  },

  createNewPatient ({commit}, payload) {
    return this.$axios.post('/createNewPatient', payload)
      .then( res => {
        console.log('this is the return on /createNewPatient: ', res.data)
        return res.data
      })
  },
  getPatientById ({commit}, id) {
    return this.$axios.get(`/getPatientById/${id}`)
     .then( res => {
       console.log('this is the return on /getPatientById/id: ', res.data)
       commit('setPatient', res.data)
       return res.data
     })
  }
}
