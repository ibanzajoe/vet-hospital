import Cookie from 'js-cookie'

export default function({store, redirect, route, req, res, app}) {
  return new Promise( resolve => {
    const path = route.path
    const whitelist_paths = ['/', '/admin', '/account', '/account/calendar', '/account/scheduler', '/login', '/login/forgot-pass', '/reset', '/reset-password', '/admin/clientList']
    const path_whitelisted = whitelist_paths.includes(path)
    /*const company = store.state.current_user && store.state.current_user._company*/
    /*const query_params = Object.keys(route.query).map( key => {
      return `${key}=${route.query[key]}&`
    })*/

    /*if(path.substring(0, 3) == '/c/') {
      return resolve()
    }*/

    if (path_whitelisted) return resolve()

    if (store.state.currentUser) {
      /*if (!company) return redirect(`//${process.env.www}/registration`)*/

      return resolve()
    }

    Cookie.remove('access-token')
    app.$axios.setToken(false)

    return redirect(`/login`)
  })
}
