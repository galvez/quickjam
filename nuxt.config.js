import serverMiddleware from './api'

export default {
  serverMiddleware,
  modules: ['@nuxt/http'],
  server: {
    port: 3030,
  },
  http: {
    baseURL: 'http://localhost:3030'
  },
  plugins: ['~/plugins/http']
}
