import { json } from 'body-parser'
import { addUser } from './db'

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
  },
  {
    path: '/api/users',
    async handler(req, res, next) {
      if (req.method === 'POST') {
        await addUser(req.body)
        res.json({ success: true })
        res.end()
      }
      res.writeHead(403, 'Forbidden')
      res.end()
    }
  }
]
