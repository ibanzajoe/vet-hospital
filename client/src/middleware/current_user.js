import Cookie from 'js-cookie'

export default async ({app, store, route}) => {
  let token

  if (route.query.token) {
    token = query.token
    Cookie.set('access-token', token, {domain: process.env.host})
  }

  token = Cookie.get('access-token')

  if (!token) return

  app.$axios.setToken(token, 'Bearer')

  console.log("WHY IS THIS NOT WORKING?")

  return app.$axios.get('/currentUser')
    .then(res => {
      let user = res.data
      store.commit('setCurrentUser', user)
    })
    .catch(err => {
      console.log('error', 'cannot get user', err)
    })

}
