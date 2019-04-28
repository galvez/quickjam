export const state = () => ({
  user: {
    email: null,
    token: null,
    authenticated: false    
  }
})

export const mutations = {
  authUser(state, user) {
    state.user.email = user.email
    state.user.token = user.token
    state.user.authenticated = true
  }
}
