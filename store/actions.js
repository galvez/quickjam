import Cookies from 'js-cookie'

export function authUser ({ $state }, user) {
  $state.user.email = user.email
  $state.user.token = user.token
  $state.user.authenticated = true
  if (process.client) {
    Cookies.set('quickjam-auth-token', user.token, { expires: 1 })
  }
}
