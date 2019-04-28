export default function ({ store, route, redirect, req }) {
  if (process.server && req.email) {
    store.commit('authUser', {
      token: req.token,
      email: req.email
    })
  }
  if (!store.state.user.authenticated) {
    redirect('/register')
  }
}
