export default function ({ $http, $state }) {
  $http.onRequest((config) => {
    if ($state.user.authenticated) {
      config.headers.set('Authorization', `Bearer ${$state.user.token}`)
    }
    return config
  })
}
