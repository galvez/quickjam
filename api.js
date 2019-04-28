import { json } from 'body-parser'

export default [
  {
    path: '/api/ping',
    handler(req, res, next) {
      res.end(`API pong at ${new Date().getTime()}`)
    }
  },
  json(),
  (req, res, next) => {
    res.json = (obj) => res.write(JSON.stringify(obj))
    next()
  }
]
