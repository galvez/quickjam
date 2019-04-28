export default function ({ $http, store }) {
  $http.onRequest((config) => {
    if (store.state.user.authenticated) {
      config.headers.set('Authorization', `Bearer ${store.state.user.token}`)
    }
    return config
  })
}
