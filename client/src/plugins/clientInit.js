import Cookie from 'js-cookie'

export default async function ({app}) {
  const token = Cookie.get('access-token', {domain: process.env.host})

  console.log('this is the token: ', token)

  if (!token) return

  app.$axios.setToken(token, 'Bearer')

  return app.$axios.get('/currentUser')
    .then(res => {
      let user = res.data
      app.store.commit('setCurrentUser', user)
    })
    .catch(err => {
      Cookie.remove('access-token')
      app.$axios.setToken(false)
    })
}
