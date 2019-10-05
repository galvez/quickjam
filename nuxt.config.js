import serverMiddleware from './api'

export default {
  serverMiddleware,
  modules: ['@nuxt/http'],
  server: {
    port: 3030,
  },
  http: {
    baseURL: process.env.SANDBOX_URL || 'http://localhost:3030'
  },
  features: {
    store: false
  },
  plugins: [
    '~/plugins/store',
    '~/plugins/http'
  ]
}
